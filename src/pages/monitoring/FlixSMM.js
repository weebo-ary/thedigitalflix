import React from 'react'
import FlixBanner from "./Banner/FlixSMM"
import FlixBuildFeat from "./Feature/FlixSMM"
import FlixBuildAdv from "./Advantages/FlexSMM"
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