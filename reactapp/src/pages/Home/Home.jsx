import React from "react";

import { Link } from "react-router-dom";

import HomeStyled from "./HomeStyled";

const Home = () => {
  return (
    <HomeStyled>
      <div className="links">
        <Link to="/register">ثبت نام</Link>
        <Link to="/login">ورود</Link>
      </div>
      <div className="descriptions">
        <h1>به سیستم ساخت نظرسنجی خوارزمی خوش آمدید</h1>
        <ul>
          <h2>در این سیستم چه کارهایی می‌شود انجام داد؟</h2>
          <li>احراز هویت</li>
          <li>ساخت نظرسنجی</li>
          <li>پخش نظرسنجی</li>
          <li>و ...</li>
          <h2>این سیستم چه ویژگی هایی دارد؟</h2>
          <li>استفاده در پلتفرم های مختلف (از قبیل دستکتاپ و موبایل)</li>
        </ul>
      </div>
    </HomeStyled>
  );
};

export default Home;
