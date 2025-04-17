import React from 'react'
import FlixBanner from "./Banner/FlixJavascript"
import FlixBuildFeat from "./Feature/FlixJSFeat"
import FlixBuildAdv from "./Advantages/FlixJSAdv"
import Connect from "../extra-pages/connect"


function EnergyMonitoring() {
  return (
    <div>
        <FlixBanner />
        <FlixBuildFeat />
        <FlixBuildAdv />
        <Connect />
    </div>
  )
}

export default EnergyMonitoring