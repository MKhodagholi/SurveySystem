import React from "react";
import { Link, useLocation } from "react-router-dom";
import UserStyled from "./UserStyled";

const User = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <UserStyled>
      <ul>
        <li>
          <Link to={`${pathname}/create-survey`}>ایجاد یک نظرسنجی جدید</Link>
        </li>
        <li>
          <button>مشاهده نظرسنجی های ایجاد شده</button>
        </li>
        <li>
          <button>اشتراک گذاری نظرسنجی های ایجاد شده</button>
        </li>
        <li>
          <button>تصحیح نظرسنجی های ایجاد شده</button>
        </li>
      </ul>
    </UserStyled>
  );
};

export default User;
