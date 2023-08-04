import React from "react";

const NavBar = () => {
  return (
    <div>
      <h1>All compo</h1>
      <div id="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">To Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};
