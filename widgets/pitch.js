import styles from '../styles/Pitch.module.css'
import TeamSheet from './teamsheet'
import React, { useRef } from 'react'
import { exportComponentAsJPEG } from 'react-component-export-image'


function HalfPitch ({ position }) {
    return(
        <div className={position? styles.halfPitchI:styles.halfPitch}>
            <div className={styles.semiCircle}></div>
            <div className={styles.defHalf}>
                <div className={styles.defHalfSemiCircle}></div>
                <div className={styles.eighteenBox}></div>
            </div>
        </div>
    )
}

// ref pitch component
const Pitch = React.forwardRef((props, ref) => (
    <div ref={ref} id='pitch' className={styles.pitch}>
        <div className={styles.pitchLines}>
            <HalfPitch position={2}/>
            <HalfPitch />
        </div>
        <div className={styles.playerBoard}>
            <TeamSheet formation={props.formation} shirtColor={props.jerseyColor} gkShirtColor={props.gkJerseyColor}/>
        </div>
     </div>
))

// exporting Pitch Component
export default function ({formation, gkJerseyColor, jerseyColor}) {
    
    const pitchDiv = useRef()
    
    return (
        <div className={styles.body}>
            <Pitch ref={pitchDiv} formation={formation} gkJerseyColor={gkJerseyColor} jerseyColor={jerseyColor}/>
            <button onClick={()=> exportComponentAsJPEG(pitchDiv) }>
                Download Lineup
            </button>
        </div>
    )
}

