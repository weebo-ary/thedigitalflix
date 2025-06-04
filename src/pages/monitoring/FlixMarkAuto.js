import React from 'react'
import FlixBanner from "./Banner/FlixMarkAuto"
import FlixBuildFeat from "./Feature/FlixMarkAuto"
import FlixBuildAdv from "./Advantages/FlexMarkAuto"
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