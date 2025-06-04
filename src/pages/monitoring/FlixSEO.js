import React from 'react'
import FlixBanner from "./Banner/FlixSEO"
import FlixBuildFeat from "./Feature/FlixSEOFeat"
import FlixBuildAdv from "./Advantages/FlixSEOAdv"
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