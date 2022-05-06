import styles from '../styles/Pitch.module.css'
import TeamSheet from './teamsheet'


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

// exporting Pitch Component
export default function ({formation}) {
    return (
        <div className={styles.body}>
            <div className={styles.pitch}>
                <div className={styles.pitchLines}>
                    <HalfPitch position={2}/>
                    <HalfPitch />
                </div>
                <div className={styles.playerBoard}>
                    <TeamSheet formation={formation}/>
                </div>
            </div>
        </div>
    )
}