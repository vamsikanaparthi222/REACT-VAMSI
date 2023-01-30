import React from 'react'
import CompB from './compB';

function CompA(){
    let a =100
    let b=200
    return <div>
    <h1>Component A</h1> <hr/>
    <CompB prop1={a} prop2={b}/>
    </div>
}
export default CompA;