import React from 'react'
import FlixBanner from "./Banner/FlixAIMark"
import FlixBuildFeat from "./Feature/FlixAIFeat"
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