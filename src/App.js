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
      <footer className="footer">
        <div className="text-muted" style={{"paddingBottom": "0px", "margin-bottom": "0"}}>
          Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;