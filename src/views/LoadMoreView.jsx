import React from "react";

const LoadMoreView = ({ handleClick, disabled }) => {
  return (
    <div className="d-flex justify-content-center mt-3 mb-5">
      <button
        type="button"
        onClick={handleClick}
        className="btn btn-outline-light px-4"
        disabled={disabled}
      >
        {disabled ? "Yükleniyor..." : "Daha fazla"}
      </button>
    </div>
  );
};

export default LoadMoreView;
