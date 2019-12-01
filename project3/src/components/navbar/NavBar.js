import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import UserDropDown from "./UserDropDown";
import UserProvider from "../../context/UserProvider";
import { data } from "../../data";
import _ from "lodash";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LogoutIcon from "@material-ui/icons/MeetingRoom";


// function NavBar(props) {

const NavBar = () => {
  const userData = useContext(UserProvider.context);
  const loginType = !_.isEmpty(userData) ? _.find(data, d => d.name === userData.provider) : {};
  
  return (
    <div className="menu-bar">
            {
              !_.isEmpty(userData) &&
              <Link className="btn menu-btn" to="/profile" title={`${loginType.name} data`}>
                    <div className="app-icon-container" style={{ backgroundColor: loginType.color }}>
                        <img
                            className="btn-icon"
                            src={loginType.img}
                            alt={loginType.alt}
                            style={{ position: "absolute", top: 17, paddingLeft: 5 }}
                            />
                    </div>
                </Link>
            }

            {
              _.isEmpty(userData) &&
              <a className="btn menu-btn" href="/">
                      <Link to="/" className="nav-link" title="Home">
                        <HomeIcon /> dogMUD
                      </Link>
                </a>
            }

            {
              !_.isEmpty(userData) &&
              <Link className="btn menu-btn" to="/profile" title="Profile">
                    <AccountCircleIcon />
                </Link>
            }

            {
              <Link to="/play" className="nav-link" title="Play">play</Link>
            }

            {
              <Link to="/char" className="nav-link" title="Character">character</Link>
            }

            <UserDropDown />

            {
              !_.isEmpty(userData) &&
              <a
              className="btn menu-btn"
              href={"/auth/logout"}
              title="Logout"
              style={{ float: "right" }}
              >
                    <LogoutIcon />
                </a>
            }
        </div>
    );
  };
  
  
export default NavBar;