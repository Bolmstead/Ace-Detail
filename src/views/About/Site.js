import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";

import Container from "components/Container";
import Main from "layouts/Main";
import { Topbar } from "layouts/Main/components";

import { backgroundColor } from "vars";
import { BottomContact, Hero, Story } from "./components";
import HowToBuy from "./components/HowToBuy";

const Site = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      let width = Math.min(1200, window.innerWidth - 40);
      console.log("🚀 ~ file: Site.js:25 ~ handleResize ~ width:", width);
      setWindowWidth(width);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <Main>
      <Topbar windowWidth={windowWidth} />
      <Hero windowWidth={windowWidth} />{" "}
      <Container maxWidth={800} paddingY={"0 !important"}>
        <Divider />
      </Container>
      <a id="about">
        <Box bgcolor={"#F7FAFE"}>
          <Container style={{ padding: "30px 30px" }}>
            <Story />
          </Container>
        </Box>
      </a>
      <a id="how-to-buy">
        <Box bgcolor={backgroundColor}>
          <HowToBuy />
        </Box>
      </a>
      {/* <Container paddingTop={'0 !important'}>
        <WhoWeAre />
      </Container> */}
      {/* <Container maxWidth={800} paddingY={"0 !important"}>
        <Divider />
      </Container> */}
      {/* <a id="expertise">
        <Container>
          <Team />
        </Container>
      </a> */}
      {/* <Box bgcolor={backgroundColor}>
        <Container>
          <Partners />
        </Container>
      </Box> */}
      {/* <Box bgcolor={backgroundColor}>
        <a id="contact">
          <Contact />
        </a>
      </Box> */}
      <BottomContact windowWidth={windowWidth} />
      {/* <BottomBar windowWidth={windowWidth} /> */}
    </Main>
  );
};

export default Site;
