import React from "react";
import { Link } from "react-router-dom";
import NotFoundStyled from "./NotFoundStyled";

const NotFound = () => {
  return (
    <NotFoundStyled>
      <h1>صفحه مورد نظر وجود ندارد</h1>
      <Link to="/">بازگشت به صفحه اصلی</Link>
    </NotFoundStyled>
  );
};

export default NotFound;
