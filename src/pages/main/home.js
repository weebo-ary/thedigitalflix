import React from "react";
import Banner from "./Home/banner";
import Form from "./Home/form";
import Tabs from "./Home/tabs";
// import Feature from "./Home/feature";
import Proccess from "./Home/proccess";
import WhyUs from "./Home/whyus";
import TrustUs from "./Home/trustus";
import Offering from "./Home/offering";
import Faq from "./Home/faq";
import "./Home/index.css"
import BrouchureSection from "./Home/brouchure";
import FeatureList from "./Home/featureListHome";
import Benifits from "./Home/benifits";

function home() {
  return (
    <div>
      <Banner />
      <Form />
      <Tabs />
      <Proccess />
      {/* <Feature /> */}
      <FeatureList />
      <Benifits />
      <BrouchureSection />
       <WhyUs />
       {/* <Video /> */}
      <TrustUs />
      <Offering />
     <Faq />
    </div>
  );
}

export default home;
