 import React from 'react'

function CompB(props){
  return <div>
  <h1>Component B</h1>
  <pre>{JSON.stringify(props)}</pre>
  <h5>property:{props.prop1}</h5>
  <h5>property:{props.prop2}</h5>
  </div>
}
export default CompB