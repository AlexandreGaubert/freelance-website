import React, { Component } from "react"

 export default class Menu extends Component {
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
         <span style={styles.navLink}>
           PRÉSENTATION
         </span>
         <span style={styles.navLink}>
           PORTFOLIO
         </span>
         <span style={styles.navLink}>
           CONTACT
         </span>
       </div>
     )
   }
 }

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    margin: '2vh'
  },
  navLink: {
    width: '20%',
    border: '1px solid black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '.5em'
  }
}
