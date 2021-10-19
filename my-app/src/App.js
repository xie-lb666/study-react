import './App.css';

const name = "xhy";
const element =  <h1 id="1">Hello, {name}!  {sum(1,2)}  "=====" </h1>;
function sum(a,b){
  return a+b;
}

function App() {
  return (
    <div className="App">
     {element}
    </div>
  );
}

export default App;
