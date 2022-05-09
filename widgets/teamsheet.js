import styles from '../styles/TeamSheet.module.css'
import Player from './player'
import {useState} from 'react'

export default function ({formation, shirtColor, gkShirtColor}){

    return (
        <div className={formation.teamsheet}>
            
            <div id={formation.first} className={styles.playerContainer}>
                <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.second} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.third} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.fourth} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.fifth} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.sixth} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.seventh} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.eight} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.ninth} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.tenth} className={styles.playerContainer}>
            <Player shirtColor={shirtColor}/>
            </div>
            <div id={formation.eleventh} className={styles.playerContainer}>
            <Player shirtColor={gkShirtColor}/>
            </div>
        </div>
    )
}