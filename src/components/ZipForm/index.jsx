import React, { useState, useRef } from "react";
import { useHistory } from "react-router";
import "./zipForm.scss";

export default function ZipForm({ zip, setZip }) {
  const zipRegex = new RegExp(/[0-9]{5}/g);

  let history = useHistory();

  let submit = useRef();

  const [valid, setValid] = useState(true);

  const handleChange = (e) => {
    setZip(e.target.value);
  };

  const handleSubmit = (e) => {
    if (zipRegex.test(zip)) {
      e.preventDefault();
      submit.current.className = "submit transition";
      const timer = setTimeout(() => {
        history.push(`/dashboard/${zip}`);
        e.preventDefault();
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      e.preventDefault();
      setValid(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={valid ? "input" : "input error"}
        placeholder="entrez votre code postal"
        onChange={handleChange}
        type="text"
      />

      <input className="submit" ref={submit} type="submit" value="=>" />
      <p className={valid ? "invisible" : "visible"}>
        Code postal non valide.
      </p>
    </form>
  );
}
