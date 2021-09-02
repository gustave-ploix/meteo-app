import React from "react";

import "./zipSelection.scss";

import ZipForm from "../../components/ZipForm";

import Title from "../../components/Title";

export default function ZipSelection({ zip, setZip }) {
  return (
    <div className="inputPage">
        <div className="main">
            <Title />
            <ZipForm zip={zip} setZip={setZip} />
        </div>
    </div>
  );
}
