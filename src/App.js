import React from 'react'
import classes from './App.module.scss'
import Card from './components/Card/Card'

function App() {
  return (
    <div className={classes.App}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Ты сегодня покормил кота?</h1>
          </div>
        </div>

        <div className="row">
          <div className="col d-flex justify-content-center">
            <Card />
          </div>
          <div className="col d-flex justify-content-center">
            <Card />
          </div>
          <div className="col d-flex justify-content-center">
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
