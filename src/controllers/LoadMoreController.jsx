import React from "react";
import { useSearchParams } from "react-router-dom";
import LoadMoreView from "../views/LoadMoreView";

const LoadMoreController = ({ disabled }) => {
  const [params, setParams] = useSearchParams();

  const handleClick = () => {
    const pageNumber = Number(params.get("page") || 1);
    setParams({ page: String(pageNumber + 1) });
  };

  return <LoadMoreView handleClick={handleClick} disabled={disabled} />;
};

export default LoadMoreController;
