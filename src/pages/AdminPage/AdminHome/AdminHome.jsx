import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className="tabs tabs-boxed">
      <Link to="/dashboard/createJob" className="tab tab-active">Create Job</Link>
      <a className="tab ">Top IT Company</a>
      <a className="tab">upcoming item</a>
    </div>
  );
};

export default AdminHome;
