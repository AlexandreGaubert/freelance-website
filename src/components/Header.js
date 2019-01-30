import React, { Component } from "react"
import Menu from './Menu'
import ContactButton from './ContactButton'

 export default class Header extends Component {
   static defaultProps = {

   }
   state = {

   }
   constructor(props) {
     super(props)

   }
   render() {
     return(
       <div style={styles.container}>
          <span style={styles.topHeader}>
            <img style={styles.profilePic} src={require("../images/profile.png")}/>
            <span style={styles.contact}>
              <ContactButton/>
            </span>
          </span>
          <Menu/>
       </div>
     )
   }
 }




const styles = {
  container: {
  },
  profilePic: {
    height: '100%'
  },
  topHeader: {
    width: '100%',
    height: '20vh',
    display: 'flex'
  },
  contact: {
    display: 'flex',
    width: '-webkit-fill-available',
    alignItems: 'center'
  }
}
