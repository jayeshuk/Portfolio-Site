import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class landingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/supportmale-512.png"
              alt="male-avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>FullStack Web Developer</h1>
              <hr />
              <p>
                HTML | CSS | JS | React | Python | R | C | CPP | JAVA | NodeJS
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://google.co.in"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>

                {/* Github */}
                <a
                  href="https://google.co.in"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>

                {/* Facebook */}
                <a
                  href="https://google.co.in"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </a>

                {/* Twitter */}
                <a
                  href="https://google.co.in"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default landingPage;
