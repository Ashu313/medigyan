import React from "react";
import "./css/index.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
// import Avatar from "@mui/material/Avatar";
import InboxIcon from "@material-ui/icons/Inbox";
import HelpIcon from "@material-ui/icons/Help";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";

function Header() {
  const user = useSelector(selectUser);
  // console.log(user);
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: name ? stringToColor(name) : "rgba(255,255,255,0.8)",
      },
      children: name && `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <Link to="/">
            <img width="100px" height="30" src="medicinelogo.jpg" 
              alt="logo"
            />
          </Link>
          {/* <a href="/">
            
          </a> */}

          <h3>Discussions</h3>
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
            {window.innerWidth < 768 && <SearchIcon />}
            {user?
              <Avatar
              style={{
                cursor: "pointer",
              }}
              {...stringAvatar(user && user.displayName)}
              onClick={() => auth.signOut()}
            />:
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{
              cursor: "pointer",
            }}
            {...stringAvatar(user && user.displayName)}
            onClick={() => auth.signOut()}><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            }
            <InboxIcon />
            <HelpIcon />
            <svg
              aria-hidden="true"
              class="svg-icon iconStackExchange"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="rgba(0,0,0,0.5)"
              style={{
                cursor: "pointer",
              }}
            >
              <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
            </svg>
            {/* <img
              src="https://symbols-electrical.getvecta.com/stencil_96/73_stack-exchange-icon.bbd1a14a04.svg"
              alt="stack-exchange"
            /> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
