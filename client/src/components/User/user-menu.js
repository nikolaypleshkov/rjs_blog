import React, {useState} from "react";
import "./Menu.css";
const name = "Nikolay Pleshkov";

function UserMenu() {
    const [userMenu, setUserMenu] = useState(false);
  return (
    <div className="nb-btn-group-right">
      <div className="menu-container" onClick={() => setUserMenu(!userMenu)}>
        {/* <div className="profile-picture-container">
                            
                </div> */}
        <div className="profile-name">
          <p>{name}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-down-fill"
          viewBox="-3 -5 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
        <div className={userMenu ? "dropdown3 set-d-n" : ' dropdown3'}>
                <ul className="dropdown-links3">
                  <li>
                    <a href="#forus">Профил</a>
                  </li>
                  <li>
                    <a href="#projects">Настройки</a>
                  </li>
                  <li>
                    <a href="#partners">Излизане</a>
                  </li>
                </ul>
              </div>

      </div>
    </div>
  );
}

export default UserMenu;
