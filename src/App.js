import React from 'react';
import classes from './App.module.scss'

import Header from "./components/header"
import Body from "./components/body"

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Body />
    </div>
  )
}

export default App;
