import Card from "./components/card.jsx";
import Pg1main from "./components/pg1main.jsx";
import "./App.css"

function App() {

  

  return (
    <div >
      <div className="page-1">
        <div className="hidden-card">
    <Card/>
    </div>
    <div className="side-cont">
   <Pg1main/>
   
   </div>
   </div>
   
    </div>
  )


  
}

export default App
