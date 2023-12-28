import React from 'react'

export default function Footer(props) {
    let myStyle = {
        color: props.mode === "dark" ? "white" : "#091417",
        backgroundColor: props.mode === "dark" ? "rgba(33,37,41,1)" : "rgba(248,249,250,1)",
        // textAlign:"center",
        height:"50px",
        display:'flex',
        alignItems:"center",
        justifyContent:"center"

    
      };
  return (
    <div  style={myStyle}>
      <strong>&copy;Mahamudul Hassan Barshan || 2023</strong>
    </div>
  )
}
