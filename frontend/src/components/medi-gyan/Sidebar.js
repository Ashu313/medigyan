import React from "react";
import PublicIcon from "@material-ui/icons/Public";
import StarsIcon from "@material-ui/icons/Stars";
import WorkIcon from "@material-ui/icons/Work";
import "./css/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <Link to="/" style={{fontSize:'20px',fontWeight:'600'}}>Home</Link>

            {/* <a href="/">Home</a> */}
          </div>
          <div className="sidebar-option">
            <p>PUBLIC</p>
            <div className="link">
              <div className="link-tag">
                <PublicIcon />
                <Link to="/">Question</Link>

                {/* <a href="/">Question</a> */}
              </div>

              <div className="tags">
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>Trending</p>
            <div className="link">
             


              <div className="link-tag">
                <StarsIcon />
                <Link to="/">Home Remedies</Link>
              

                {/* <a href="/">Explore Collectives</a> */}
              </div>
              <div className="link-tag">
                <StarsIcon />
                <Link to="/">Expert Advice</Link>
              

                {/* <a href="/">Explore Collectives</a> */}
              </div>
              <div className="link-tag">
                <StarsIcon />
                <Link to="/">Common Viral</Link>
              

                {/* <a href="/">Explore Collectives</a> */}
              </div>
              <div className="link-tag">
                <StarsIcon />
                <Link to="/">Acute diseases Medicine</Link>
              

                {/* <a href="/">Explore Collectives</a> */}
              </div>
            </div>
          </div>
         
         
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
