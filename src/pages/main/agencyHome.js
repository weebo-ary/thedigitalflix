import React from "react";
import Banner from "./AgencyHome/banner";
import Form from "./AgencyHome/form";
import Tabs from "./AgencyHome/tabs";
// import Feature from "./Home/feature";
import Proccess from "./AgencyHome/proccess";
import WhyUs from "./AgencyHome/whyus";
import TrustUs from "./AgencyHome/trustus";
import Offering from "./AgencyHome/offering";
import Faq from "./AgencyHome/faq";
import "./AgencyHome/index.css"
import BrouchureSection from "./AgencyHome/brouchure";
import FeatureList from "./AgencyHome/featureListHome";
import Benifits from "./AgencyHome/benifits";

function home() {
  return (
    <div>
      <Banner />
      <Form />
      <Tabs />
      <Proccess />
      {/* <Feature /> */}
      <FeatureList />
      {/* <Benifits /> */}
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
