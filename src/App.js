import React from 'react'
import MyNavbar from './components/MyNavbar'
import Items from './components/Items'
import './scss/App.css'

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <Items />
          </div>
          <div className="col-2">
            shopping cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
