import React from "react";
import CenterBox from "../components/CenterBox";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import VeritcalAllignedBox from "../components/VerticalAllignedBox";

const DefaultLayout = ({ children }) => (
  <div>
    <NavBar />
    <VeritcalAllignedBox marginBottom={1}>
      <CenterBox width={{ xs: "100%", sm: "30%" }} padding={5}>
        <img
          src="logo.png"
          alt="Martin Flynn Driver Training"
          width="100%"
          height="auto"
        />
      </CenterBox>
    </VeritcalAllignedBox>
    {children}
    <Footer />
  </div>
);

export default DefaultLayout;
