import React from 'react';
import "./DrumMachine.css";

const heaterKit = {
  name: 'Heater Kit',
  audioClips: [
    {
      label: 'Q',
      id: 'Heater-1',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      label: 'W',
      id: 'Heater-2',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      label: 'E',
      id: 'Heater-3',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      label: 'A',
      id: 'Heater-4',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      label: 'S',
      id: 'Clap',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      label: 'D',
      id: 'Open-HH',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      label: 'Z',
      id: "Kick-n'-Hat",
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      label: 'X',
      id: 'Kick',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      label: 'C',
      id: 'Closed-HH',
      audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ]
}

class DrumMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: heaterKit.name,
      audioClips: heaterKit.audioClips,
      display: ''
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleKeyOut = this.handleKeyOut.bind(this)
  }

  changeButtons() {
    this.setState({
      name: heaterKit.name,
      audioClips: heaterKit.audioClips,
      display: heaterKit.name
    })
  }

  playAudio(e) {
    e.target.querySelector('audio').currentTime = 0
    e.target.querySelector('audio').play()
    this.setState({
      name: this.state.name,
      audioClips: this.state.audioClips,
      display: e.target.id
    })
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
    document.addEventListener('keyup', this.handleKeyOut)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
    document.removeEventListener('keyup', this.handleKeyOut)
  }

  handleKeyPress(event) {
    const selected = this.state.audioClips.find(
      a => a.label === String.fromCharCode(event.keyCode)
    )
    console.log()
    if (selected !== undefined) {
      document.getElementById(event.key.toUpperCase()).currentTime = 0
      document.getElementById(event.key.toUpperCase()).play()
      var button = document.getElementById(selected.id)
      button.classList.add('drum-pad-active')
      this.setState({
        name: this.state.name,
        audioClips: this.state.audioClips,
        display: selected.id
      })
    }
  }

  handleKeyOut(event) {
    const selected = this.state.audioClips.find(
      a => a.label === String.fromCharCode(event.keyCode)
    )
    if (selected !== undefined) {
      var button = document.getElementById(selected.id)
      button.classList.remove('drum-pad-active')
    }
  }

  render() {
    const buttons = this.state.audioClips.map(a => (
      <button
        key={a.id}
        className="drum-pad"
        id={a.id}
        onClick={event => this.playAudio(event)}
      >
        <audio src={a.audio} className="clip" id={a.label}></audio>
        {a.label}
      </button>
    ))

    return (
      <div id="drum-machine">
        <span id="buttons-grid">{buttons}</span>
        {/* <Display
          displayed={this.state.display}
          changeButtons={this.changeButtons.bind(this)}
        /> */}
      </div>
    )
  }
}

export default DrumMachine
