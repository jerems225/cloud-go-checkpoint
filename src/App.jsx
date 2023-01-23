import React from 'react'

import IntroSection from './components/intro/Intro'
import MapSection from './components/map/Map' // import the map here
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'

import './App.css'

const location = {
  address: 'Pharmacie Principale de Bingerville',
  lat: 5.359866472649383,
  lng:  -3.887648474132526,
} // our location object from earlier

const App = () => (
  <div className="App">
    <IntroSection />
    <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    <DisclaimerSection />
    <FooterSection />
  </div>
)

export default App