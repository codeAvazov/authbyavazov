import React from "react";
import { useSelector } from "react-redux";
import "remixicon/fonts/remixicon.css";
import img from "../assets/mosque.png";

export const Cabinet = () => {
  const user = useSelector((s) => s.auth.user);

  return (
    <div className="cabinet">
      {user && (
        <div className="userCard">
          <div className="userImg">
            <img src={img} alt="#123" />
          </div>
          <div className="userData">
            <div>
              <div className="name">{user.name}</div>
              <div className="email">{user.email}</div>
            </div>
            <div className="_id">
              <b>Id</b> - {user.id}
            </div>
          </div>
          <div className="userDetils">
            <div>
              <i className="ri-pencil-fill" />
            </div>
            <div>
              <i className="ri-delete-bin-7-fill" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
