import React, { useState } from "react";
import CharacterMod from './CharacterMod.module.css'

export const Character = ({name, sounds, soundNames}) => {

    const [audio] = useState(new Audio())

    const handleAudioPlay = (e) => {
        audio.src = e.target.value
        audio.play()
    }

    return(
        <div className={CharacterMod.SoundsCon}>
            <div className={CharacterMod.NameCon}>
                <h2>{name}</h2>
            </div>
            <div className={CharacterMod.Sounds}>
                {
                    sounds.map( (sound, index) => {
                        return <button className={CharacterMod.SoundsBtn} value={sound} key={index} onClick={handleAudioPlay}>
                            {soundNames[index]}
                        </button>
                    })
                }
                {sounds.length === 0 && <p> No hay audio disponible para <span>{name}</span></p>}
            </div>
        </div>
    )
}
