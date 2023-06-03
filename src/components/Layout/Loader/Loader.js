import React from "react";
import { SyncLoader } from "react-spinners";
import "./Loader.css";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loader = () => {
  return (
    <div className="loader_container">
        <SyncLoader cssOverride={override} size={30} />

    </div>
  );
};

export default Loader;
