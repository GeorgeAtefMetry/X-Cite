import React from 'react'
import DesktopMemory from './DesktopMemory'
import DesktopProcessor from './DesktopProcessor'
import DesktopScreen from './DesktopScreen'

const Aside = () => {
  return (
    <div>
        <hr/>
        <DesktopProcessor/>
        <hr/>
        <DesktopMemory/>
        <hr/>
        <DesktopScreen/>
    </div>
  )
}

export default Aside