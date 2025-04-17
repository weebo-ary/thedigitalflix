import React from 'react'
import FlixBanner from "./Banner/FlixBuildBanner"
import FlixBuildFeat from "./Feature/FlixBuildFeat"
import FlixBuildAdv from "./Advantages/FlixBuildAdv"
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