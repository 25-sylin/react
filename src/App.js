import "./App.css";
import { Bookdata } from "./data";

function App() {
  return (
    <div>
    <h2>Most Selling Book</h2>
    <div className="container">
   
        {Bookdata.map((beta) => (
          <p key={beta.id}>
           
            <img className="bookimg" src={beta.img} alt='image'/>
            <p>Book name : {beta.name}</p>
            <p>Book Price : {beta.price}</p>
          </p>
        ))}
    
    </div>
    </div>
  );
}

export default App;
