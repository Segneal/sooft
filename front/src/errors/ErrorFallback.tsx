import React from "react";
import e500 from "./e500.jpg";

export default function ErrorFallback() {
  return (
    <div className="flex justify-center w-full">
      <img src={e500} alt="500" />
    </div>
  );
}
