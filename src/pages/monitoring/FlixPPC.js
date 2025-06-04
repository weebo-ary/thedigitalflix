import React from 'react'
import FlixBanner from "./Banner/FlixGoogleAds"
import FlixBuildFeat from "./Feature/FlixGoogleAds"
import FlixBuildAdv from "./Advantages/FlixPPC"
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