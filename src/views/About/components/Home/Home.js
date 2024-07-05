import Box from "@mui/material/Box";
import { useEffect } from "react";

import DefaultHomePage from "./DefaultHomePage";

const Home = ({ windowWidth }) => {
  console.log("🚀 ~ Home ~asdfasdf windowWidth:", windowWidth);
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
      style={{ height: "100%", marginTop: "0px" }}
      display={"flex"}
      alignItems={"center"}
      id="agency__portfolio-item--js-scroll"
    >
      <DefaultHomePage windowWidth={windowWidth}></DefaultHomePage>
    </Box>
  );
};

export default Home;
