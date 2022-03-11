import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../Layout/Metadata";
import Loader from "../Layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          
          <div className="section_heading">
            <div className="homeHeading">
              <h2>My Profile</h2>
            </div>
          </div>
          <div className="profileContainer">
            <div>
              <img src={user.avatar.url} alt={user.name} />
              <Link className="btn_primary" to="/profile/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link className="btn_primary" to="/orders">My Orders</Link>
                <Link className="btn_primary" to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
