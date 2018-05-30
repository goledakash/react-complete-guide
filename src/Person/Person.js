import React from 'react';

const person = (props) => {
  return (
    <div className = "Person">
      <p onClick={props.click}> I am {props.name} and my age is {props.age} from nested component</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default person;
