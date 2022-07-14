import React from "react";

import { Link } from "react-router-dom";
import MenuStyled from "./MenuStyled";
import { VscAccount } from "react-icons/vsc";
import { AiFillAppstore, AiTwotoneShop } from "react-icons/ai";

const Menu = () => {
  const userIsLogin = false;
  return (
    userIsLogin && (
      <MenuStyled>
        <ul>
          <li>
            <Link to="/profile">
              <VscAccount />
            </Link>
          </li>
          <li>
            <Link className="active" to="/battle">
              <AiFillAppstore />
            </Link>
          </li>
          <li>
            <Link to="/shop">
              <AiTwotoneShop />
            </Link>
          </li>
        </ul>
      </MenuStyled>
    )
  );
};

export default Menu;
