import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../../firebase";
import "./index.css"
 

function Index() {
  const history = useHistory();
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function validateEmail(email) {
    const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === false) {
      return false;
    } else return true;
  }

  const handleGoogleSignIN = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((res) => {
        setLoading(false);
        // console.log(res);
        history.push("/");
        // return (
        //   <>

        //   </>
        // );
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handleSignIn = () => {
    setError();
    setLoading(true);
    if (email === "" || password === "") {
      setError("Required field is missing");
      setLoading(false);
    } else if (!validateEmail(email)) {
      setError("Email is malformed");
      setLoading(false);
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          // console.log(res);
          history.push("/");
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.code);
          setError(error.message);
          setLoading(false);
        });
    }
  };

  const handleRegister = () => {
    setError("");
    setLoading(false);
    if (email === "" || password === "" || username === "") {
      setError("Required field is missing.");
      setLoading(false);
    } else if (!validateEmail(email)) {
      setError("Email is malformed");
      setLoading(false);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          // console.log(res);
          history.push("/");
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
          setLoading(false);
        });
    }
    {history && history.push('/')}
    
  };
  return (
 
    <div className="auth">
      <div className="auth-container">
        <div class="heading-content" style={{marginTop:"70px"}}>
        <p style={{marginTop:'20px'}}>
          <span style={{textAlign:'center'}} className="c1">Login now ! </span>
  
          <span className="c2"> start a deep dive in the knowledge of medicinal ocean</span>
           <br></br> 
          <span className="c1">Share</span> <span className="c1">,Collaborate, </span> <span className="c1">Explore</span> <span className="c2">and Grow together</span></p>
        </div>
        <div className="auth-login">
          <div className="auth-login-container">
            {register ? (
              <>
                {" "}
                <div className="input-field">
                  <p>Username</p>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <p>Email</p>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </div>
                <button
                  onClick={handleRegister}
                  disabled={loading}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </>
            ) : (
              <>
                <div className="input-field">
                  <p>Email</p>
                  <input type="text" />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input type="password" />
                </div>
                <div className="button-content" style={{marginTop:'40px'}}>
                <button
                  onClick={handleSignIn}
                  disabled={loading}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
                </div>
              </>
            )}

            <p
              onClick={() => setRegister(!register)}
              style={{
                marginTop: "10px",
                textAlign: "center",
                color: "#0095ff",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {register ? "Login" : "Register"} ?
            </p>
          </div>
         
        </div>
        <div className="sign-options">
          <div onClick={handleGoogleSignIN} className="single-option">
          <img width="50" height="50" src="https://img.icons8.com/bubbles/50/google-logo.png" alt="google-logo"/>
          <br></br>
            <p>{loading ? "Signing in..." : "Login with Google"}</p>
          </div>
        
         
        </div>
        {error !== "" && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
            }}
          >
            {error}
          </p>
        )}
         
      </div>
    </div>
  );
}

export default Index;
