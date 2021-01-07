import  React  from "react";

import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Mobile Store</h1>
     <HeaderContainer />
     <HomeContainer />

    </div>
  );
}

export default App;
