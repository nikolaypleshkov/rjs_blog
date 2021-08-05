import React from "react";
import "./Blog.css";

let numberOfBlogs = 432;
let numbersOfGroups = 32;
function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-title">
        <span className="blog-numbers">{numberOfBlogs}</span> IT блога
      </div>
      <div className="blog-title-sec">
        <span className="gr-numbers">{numbersOfGroups}</span> групи за IT
        общността
      </div>
      <div class="search-box">
        <button class="btn-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 17 17"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
        <input
          type="text"
          class="input-search"
          placeholder="Type to Search..."
        />
      </div>
    </div>
  );
}

export default Blog;
