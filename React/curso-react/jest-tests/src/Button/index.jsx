import React from "react";

export const Button = ({ text, onClick, disabled }) => {
  return (
    <button className="neymar" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
