import React from "react";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">
          <a href="/" className="logo-text">
            Where in the world?
          </a>
        </div>
        <div className="mode-toggle">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="mode-icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path>
          </svg>
          <span className="mode-text">Dark Mode</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
