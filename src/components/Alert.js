import React from 'react'
// import PropTypes from 'prop-types'

export default function Alert(props) {
    const capitalise=(word)=>{
     const lower=word.toLowerCase();
     return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    //All The JSX will be converted into javascript calls
    <div className="my-1" style={{height:"50px"}} >
    { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>}
     </div>
  )
}
