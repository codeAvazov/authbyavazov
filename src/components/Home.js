import React from "react";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <div className="home i-c">
      <h1 className="t-c">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello my name is Avazov Ulug`bek!")
              .pauseFor(2500)
              .start();
          }}
        />
      </h1>
    </div>
  );
};
