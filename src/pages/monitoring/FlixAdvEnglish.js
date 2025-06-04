import React from 'react'
import FlixBanner from "./Banner/FlixAdvEnglish"
import FlixBuildFeat from "./Feature/FlixAdvEng"
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