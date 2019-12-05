/* eslint-disable camelcase */
/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';

import {
  LinkButtons,
  deleteButton,
  updateButton,
  loginButton,
  logoutButton,
  HeaderBar,
  linkStyle,
  forgotButton,
} from '../buttons';

const loading = {
  margin: '1em',
  fontSize: '24px',
};

const title = {
  pageTitle: 'User Profile Screen',
};

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: '',
      isLoading: true,
      deleted: false,
      error: false,
    };
  }

  async componentDidMount() {
    const accessString = localStorage.getItem('JWT');
    const {
      match: {
        params: { username },
      },
    } = this.props;
    console.log(username);
    if (accessString == null) {
      this.setState({
        isLoading: false,
        error: true,
      });
    } else {
      try {
        const response = await axios.get('http://localhost:3001/findUser', {
          params: {
            username,
          },
          headers: { Authorization: `JWT ${accessString}` },
        });
        this.setState({
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          username: response.data.username,
          password: response.data.password,
          isLoading: false,
          error: false,
        });
      } catch (error) {
        console.error(error.response.data);
        this.setState({
          error: true,
        });
      }
    }
  }

  deleteUser = async (e) => {
    const accessString = localStorage.getItem('JWT');
    const {
      match: {
        params: { username },
      },
    } = this.props;
    if (accessString === null) {
      this.setState({
        isLoading: false,
        error: true,
      });
    }

    e.preventDefault();
    try {
      const response = await axios.delete('http://localhost:3001/deleteUser', {
        params: {
          username,
        },
        headers: { Authorization: `JWT ${accessString}` },
      });
      console.log(response.data);
      localStorage.removeItem('JWT');
      this.setState({
        deleted: true,
      });
    } catch (error) {
      console.error(error.response.data);
      this.setState({
        error: true,
      });
    }
  };

  logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('JWT');
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      username,
      password,
      error,
      isLoading,
      deleted,
    } = this.state;

    if (error) {
      return (
        <div>
          <HeaderBar title={title} />
          <div style={loading}>
            Problem loading your data. Please try again.
          </div>
          <LinkButtons
            buttonText="Login"
            buttonStyle={loginButton}
            link="/login"
          />
        </div>
      );
    }
    if (isLoading) {
      return (
        <div>
          <HeaderBar title={title} />
          <div style={loading}>Loading</div>
        </div>
      );
    }
    if (deleted) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Button
          style={deleteButton}
          variant="contained"
          color="primary"
          onClick={this.deleteUser}
        >
          Delete User
        </Button>
        <LinkButtons
          buttonStyle={updateButton}
          buttonText="Update User"
          link={`/updateUser/${username}`}
        />
        <LinkButtons
          buttonStyle={forgotButton}
          buttonText="Update Password"
          link={`/updatePassword/${username}`}
        />
        <Button
          style={logoutButton}
          variant="contained"
          color="primary"
          onClick={this.logout}
        >
          <Link style={linkStyle} to="/">
            Logout
          </Link>
        </Button>
      </div>
    );
  }
}

Profile.propTypes = {
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
  }),
};

export default Profile;
