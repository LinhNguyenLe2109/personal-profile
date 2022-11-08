import React from 'react'

function Skill(props) {
    const style = +props.level ===1 ? 'bg-success' : +props.level === 0 ?'border-2 border border-primary' : 'bg-dark text-info';
  return (

    <div className={`${style} d-inline-block p-2 mx-2 my-2 rounded-3`}>{props.ability.skill}</div>
  )
}

export default Skill