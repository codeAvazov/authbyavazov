import React from "react";
import Typewriter from "typewriter-effect";

export const NotFoundPage = () => {
  return (
    <div className="notFound">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("page not found !")
            .pauseFor(100)
            .start();
        }}
      />
      
    </div>
  );
};
