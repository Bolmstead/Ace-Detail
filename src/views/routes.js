import React from "react";

import {

  About as AboutView,
  
} from "views";

const routes = [
  {
    path: "/",
    renderer: (params = {}) => <AboutView {...params} />,
  },
];

export default routes;
