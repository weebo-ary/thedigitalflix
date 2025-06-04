import React from 'react'
import FlixBanner from "./Banner/FlixDsAm"
import FlixBuildFeat from "./Feature/FlixDsAm"
import FlixBuildAdv from "./Advantages/FlixDsAm"
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