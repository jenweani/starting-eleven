import { useState } from 'react'
import styles from '../styles/TeamSheet.module.css'
import '../styles/TeamSheet.module.css'
import fourfourtwo from '../styles/formations/F442.module.css'
import fourthreethree from '../styles/formations/F433.module.css'

export default function ({formation}){
    // set the formation to default 433 formation
    //const [formation, setFormation] = useState(fourthreethree)

    // switch the formation on the teamsheet
    //function switchFormation(){
    //    if (formation==fourfourtwo) setFormation(fourthreethree)
    //    else setFormation(fourfourtwo)
    //}

    return (
        <div className={formation.teamsheet}>
            
            <div id={formation.first} className={styles.player}></div>
            <div id={formation.second} className={styles.player}></div>
            <div id={formation.third} className={styles.player}></div>
            <div id={formation.fourth} className={styles.player}></div>
            <div id={formation.fifth} className={styles.player}></div>
            <div id={formation.sixth} className={styles.player}></div>
            <div id={formation.seventh} className={styles.player}></div>
            <div id={formation.eight} className={styles.player}></div>
            <div id={formation.ninth} className={styles.player}></div>
            <div id={formation.tenth} className={styles.player}></div>
            <div id={formation.eleventh} className={styles.player}></div>
        </div>
    )
}