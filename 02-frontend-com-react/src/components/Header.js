import React from 'react'

export default function Header(props){
  const {title, children} = props;
  return(
    <header>
      <h3>{title}</h3>  
      {children}
    </header>
  )
}