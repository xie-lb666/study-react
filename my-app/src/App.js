import './App.css';
import Basic from './component/BasicGrammar/index';
import List from './component/BasicGrammar/test1';
import Functional from './component/BasicGrammar/functional';
import Classcom from './component/BasicGrammar/classcom';
// import Comment  from './component/WebSite/comment';
import State from './component/state/state';
import Clock from './component/state/Clock';
import Event from './component/event/Event';
import Ifcom from './component/ifcom/Ifcom';

function App() {
  return (
    <div className="App">
     {/* <Basic name="hahha1" id="xhy"/> */}
     {/* <List/> */}
     {/* <Functional/> */}
     {/* <Classcom/>
     <Classcom/>
     <Classcom/> */}
     {/* <Comment /> */}
     {/* <State/> */}
     {/* <Clock state="hhh"/> */}
     {/* <Event/> */}
     <Ifcom/>
    </div>
  );
}

export default App;
