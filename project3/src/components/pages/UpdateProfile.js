import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


import axios from 'axios';

const loading = {
  margin: '1em',
  fontSize: '24px',
};

class UpdateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: '',
      loadingUser: false,
      updated: false,
      error: false,
    };
  }

  async componentDidMount() {
    this.setState({ loadingUser: true });

    const accessString = localStorage.getItem('JWT');
    if (accessString === null) {
      this.setState({
        loadingUser: false,
        error: true,
      });
    }
    const {
      match: {
        params: { username },
      },
    } = this.props;
    try {
      const response = await axios.get('http://localhost:3001/findUser', {
        params: {
          username,
        },
        headers: { Authorization: `JWT ${accessString}` },
      });
      console.log(response.data);
      this.setState({
        loadingUser: false,
        first_name: response.data.first_name ? response.data.first_name : '',
        last_name: response.data.last_name ? response.data.last_name : '',
        email: response.data.email,
        username: response.data.username,
        password: response.data.password,
        error: false,
      });
    } catch (error) {
      console.log(error.response.data);
      this.setState({
        loadingUser: false,
        error: true,
      });
    }
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updateUser = async (e) => {
    const accessString = localStorage.getItem('JWT');
    if (accessString === null) {
      this.setState({
        loadingUser: false,
        error: true,
      });
    }
    const {
 first_name, last_name, email, username 
} = this.state;
    e.preventDefault();
    try {
      const response = await axios.put(
        'http://localhost:3001/updateUser',
        {
          first_name,
          last_name,
          email,
          username,
        },
        {
          headers: { Authorization: `JWT ${accessString}` },
        },
      );

      console.log(response.data);
      this.setState({
        updated: true,
        error: false,
      });
    } catch (error) {
      console.log(error.response.data);
      this.setState({
        loadingUser: false,
        error: true,
      });
    }
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      username,
      password,
      updated,
      error,
      loadingUser,
    } = this.state;

    if (error) {
      return (
        <Container>
          <CssBaseline />
        <div>
          <p style={loading}>
            There was a problem retrieving your data, please try again.
          </p>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            // className={classes.submit}
          >
            Sign In
          </Button>
        </div>
        </Container>
      );
    }
    if (loadingUser !== false) {
      return (
        <div>
          <p style={loading}>Loading</p>
        </div>
      );
    }
    if (loadingUser === false && updated === true) {
      return <Redirect to={`/userProfile/${username}`} />;
    }
    if (loadingUser === false) {
      return (
        <div>
          <form className="profile-form" onSubmit={this.updateUser}>
            <TextField
              id="first_name"
              label="first_name"
              value={first_name}
              onChange={this.handleChange('first_name')}
              placeholder="First Name"
            />
            <TextField
              id="last_name"
              label="last_name"
              value={last_name}
              onChange={this.handleChange('last_name')}
              placeholder="Last Name"
            />
            <TextField
              id="email"
              label="email"
              value={email}
              onChange={this.handleChange('email')}
              placeholder="Email"
            />
            <TextField
              id="username"
              label="username"
              value={username}
              readOnly
              disabled
            />
            <TextField
              id="password"
              label="password"
              value={password}
              readOnly
              disabled
              type="password"
            />
            <Button buttonText="Save Changes" />
          </form>
          <Button 
            variant="oulined"
            color="secondary"
            buttonText="Cancel Changes"
          />
        </div>
      );
    }
  }
}

UpdateProfile.propTypes = {
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
  }),
};

export default UpdateProfile;
