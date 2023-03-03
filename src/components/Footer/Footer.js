import React from 'react';
import { FaGithub } from 'react-icons/fa';
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <span>
          <a
            href="https://www.github.com/Siddhesh-Agarwal"
            rel="noreferrer noopener"
            target="_blank"
          >
            <FaGithub />
            <p>
              Siddhesh-Agarwal
            </p>
          </a>
        </span>
      </footer>
    )
  }
}

export default Footer
