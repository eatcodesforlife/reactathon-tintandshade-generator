import React, { useState } from 'react'
import Values from 'values.js'
import Color from './Color'


function App() {

  const [ color, setColor ] = useState('')
  const [ error, setError ] = useState(false)
  const [ list, setList ] = useState(new Values('#2d87c8').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()

    try{
      let colors = new Values(color).all(10)
      setError(false)
      setList(colors)
    }
    catch(err){
      setError(true)
      console.log(err)
    }
  }

  return (
    <>
      <section className='container'>
        <h2>tint and shade generator</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={color} 
            placeholder='#2d87c8'
            className={`${error ? "error": null}`}
            onChange={(e) => setColor(e.target.value)}/>
          <button type="submit" className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((color, index) => {
            return <Color {...color} key={index} index={index} hex={color.hex}/>
          })
        }
      </section>
    </>
  );
}

export default App;
