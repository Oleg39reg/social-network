import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          className={s.logo}
          src="https://wi.wallpapertip.com/wsimgs/99-992426_plantas-de-un-bosque.jpg"
        ></img>
      </div>
      <div>
        <img
          className={s.avatar}
          src="https://ps.w.org/tiny-compress-images/assets/icon-256x256.png?rev=1088385"
          alt=""
        ></img>
      </div>
      <div>
        My Post
        <div>New posts</div>
        <div className={s.posts}>
          <div className={s.item}>post 1</div>
          <div className={s.item}>post 2</div>
          <div className={s.item}>post 3</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
