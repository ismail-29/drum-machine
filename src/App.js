import React, { useState } from 'react';
import './App.css';

const drumPadsData = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Kick-n\'-Hat',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

export default function App() {
  const [display, setDisplay] = useState('');

  const handleKeyPress = (event) => {
    const keyPressed = event.key.toUpperCase();
    const drumPad = drumPadsData.find((pad) => pad.keyTrigger === keyPressed);
    if (drumPad) {
      playSound(drumPad);
      setDisplay(drumPad.id);
    }
  };

  const handleClick = (drumPad) => {
    playSound(drumPad);
    setDisplay(drumPad.id);
  };

  const playSound = (drumPad) => {
    const audio = document.getElementById(drumPad.keyTrigger);
    // audio.currentTime = 0;
    audio.play();
  };

  

  return (
    <div id="drum-machine" tabIndex="0" onKeyPress={handleKeyPress}>
      <div id="display">{display}</div>
      {drumPadsData.map((drumPad) => (
        <div
          key={drumPad.id}
          id={drumPad.id}
          className="drum-pad"
          onClick={() => handleClick(drumPad)}
        >
          <audio
            src={drumPad.url}
            className="clip"
            id={drumPad.keyTrigger}
          ></audio>
          {drumPad.keyTrigger}
        </div>
      ))}
    </div>
  );
}
