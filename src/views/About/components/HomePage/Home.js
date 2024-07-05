import React, { useEffect } from "react";
import Box from "@mui/material/Box";

import DefaultHomePage from "./DefaultHomePage";

const Home = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll(".jarallax");
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import("jarallax");
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  return (
    <Box
      className={"jarallax"}
      data-jarallax
      data-speed="0.2"
      position={"relative"}
      style={{ height: "94vh", marginTop: "0px" }}
      display={"flex"}
      alignItems={"center"}
      id="agency__portfolio-item--js-scroll"
    >
      <DefaultHomePage></DefaultHomePage>
    </Box>
  );
};

export default Home;
