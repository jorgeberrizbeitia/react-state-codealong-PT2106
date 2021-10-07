import React from 'react'

const simpleData = "Hello"
const someObj = { name: "Jorge" }
const someArr = [<p>1</p>, <p>2</p>, <p>3</p>, <p>4</p>]
                
const someData = [ { name: "Sina"}, { name: "Leo" } ]
// With the map we can recreate this [ <p>Sina</p>, <p>Leo</p> ]  

function List() {
  return (
    <div>
      <h1>{ someData.map(eachElem => <p>{eachElem.name}!</p>) }</h1>
      
    </div>
  )
}

export default List
