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
import Text from './component/from/Text';
import Prop from './component/bilibili/props';
import Refss from './component/bilibili/ref';

function App() {
  const p = {name:'谢华勇',sex:'男',age:18};
  console.log({...p});
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
     {/* <Ifcom/> */}
     {/* <Text/> */}
     {/* <Prop name="谢华勇" {...p}/> */}
     <Refss/>
    </div>
  );
}

export default App;
