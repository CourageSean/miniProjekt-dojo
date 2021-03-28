

import Navbar from "./components/Navbar"
import Home from "./components/Home"

const App = () => {
  const title ="Welcome Sean"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Home/>
        
      </div>
     
    </div>
  );
}

export default App;
