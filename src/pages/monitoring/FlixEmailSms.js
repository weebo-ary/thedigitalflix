import React from 'react'
import FlixBanner from "./Banner/FlixEmailSMS"
import FlixBuildFeat from "./Feature/FlixEmailSMS"
import FlixBuildAdv from "./Advantages/FlixSmsEmail"
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