import React from 'react'
import './TextFieldBox.css'
import { TextField } from '@material-ui/core'

function TextFieldBox(props) {
  return (
   <div className="form">
    <TextField label={props.label} variant="outlined" style={{width:'100%'}} />
   </div>
  )
}

export default TextFieldBox