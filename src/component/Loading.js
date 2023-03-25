import React from "react";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoadingPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1
        className="text-4xl font-bold text-gray-900 mb-4 animate-pulse"
        style={{ fontFamily: "sans-serif" }}
      >
        Loading...
      </h1>
      <RingLoader color={"#F13AB1"} css={override} size={150} />
    </div>
  );
};

export default LoadingPage;