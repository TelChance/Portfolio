import React from "react";


function Nav(props) {
  const pages = ["About Me", "Project", "Contact", "Resume"];
  return (
    <header>
      <nav>
        <ul className="nav nav-row">
          {pages.map((page) => (
            <li className="nav-item" key={page}>
              <button
                onClick={() => props.setCurrentPage(page)}
                className={`nav-b ${
                  props.currentPage === page ? "nav-link active" : "nav-link"
                }`}
              >
                {page.toLowerCase()}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;