import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src="https://apod.nasa.gov/apod/image/2409/MoonPleiades_Dyer_2048.jpg"
        alt=""
        className="h-96 w-full"
      />
      <div
        className=""
        style={{
          position: "absolute",
          top: "20%",
          padding: "2rem",
          color: "white",
          overflow: "hidden",
        }}
      >
        <h1 className="font-bold text-2xl mb-3">NASA Planetry APOD</h1>
        <p className="font-light text-wrap">
          One of the most popular websites at NASA is the Astronomy Picture of
          the Day. In fact, this website is one of the most popular websites
          across all federal agencies. It has the popular appeal of a Justin
          Bieber video. This endpoint structures the APOD imagery and associated
          metadata so that it can be repurposed for other applications. In
          addition, if the concept_tags parameter is set to True, then keywords
          derived from the image explanation are returned. These keywords could
          be used as auto-generated hashtags for twitter or instagram feeds; but
          generally help with discoverability of relevant imagery.
        </p>
      </div>
    </div>
  );
};

export default Hero;
