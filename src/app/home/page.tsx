import React from "react";

import AboutUs from "./Aboutus";
import Contactus from "./Contactus";
import Events from "./Events";
import Gallery from "./Gallery";
import Gifpage from "./Gifpage";
import Initiative from "./Initiative";
import Ourteam from "./Ourteam";

export default function Home() {
  return (
    <div>
      <Gifpage />
      <AboutUs />
      <Initiative />
      <Events />
      <Gallery />
      <Ourteam />
      <Contactus />
    </div>
  );
}
