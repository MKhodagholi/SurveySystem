import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import MenuStyled from "./MenuStyled";
import { VscAccount } from "react-icons/vsc";
import { AiFillAppstore, AiFillAlert } from "react-icons/ai";

const Menu = ({ userXLoggined }) => {
  const [active, setIsActive] = useState(2);
  const location = useLocation();
  const pathname = location.pathname;
  const parts = pathname.split("/", 3);
  const id = parts[2];
  const userIsLogin = pathname.includes("user");
  return (
    userIsLogin && (
      <MenuStyled>
        <ul>
          <li>
            <Link
              className={`${active === 1 ? "active" : ""} disable`}
              to={`user/${id}/profile`}
              onClick={() => setIsActive(1)}
            >
              <VscAccount />
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsActive(2)}
              className={active === 2 ? "active" : ""}
              to={`user/${id}`}
            >
              <AiFillAppstore />
            </Link>
          </li>
          {/* <li>
            <Link to="/shop">
              <AiFillAlert />
            </Link>
          </li> */}
        </ul>
      </MenuStyled>
    )
  );
};

export default Menu;
