import React from 'react'
import FlixBanner from "./Banner/FlixEcom"
import FlixBuildFeat from "./Feature/FlixECom"
import FlixBuildAdv from "./Advantages/FlixEcom"
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