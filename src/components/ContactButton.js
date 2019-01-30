import React from 'react';

import './ContactButton.css'

export default class ContactButton extends React.Component {
  state = {
    hover: false
  }
  onMouseEnter() {
    this.setState({hover: true});
  }
  onMouseLeave() {
    this.setState({hover: false});
  }
  render() {
    console.log(this.state.hover);
    return (
      <span
        onMouseOver={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
        style={styles.contactBtn}
        className="contactButton"
      >
         <i style={styles.icon} className="fas fa-phone"/>
         <div className={this.state.hover ? 'textExp' : 'text'}>06.62.64.80.53</div>
      </span>
    )
  }
}

const styles = {
  contactBtn: {
    fontSize: '2em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: '45px',
    overflowX: 'hidden'
  },
  icon: {
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: '45px',
    padding: '.4em'
  }
}
