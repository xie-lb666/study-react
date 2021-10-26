import './App.css';
import Basic from './component/BasicGrammar/index';
import List from './component/BasicGrammar/test1';
import Functional from './component/BasicGrammar/functional';
import Classcom from './component/BasicGrammar/classcom';
import Comment  from './component/WebSite/comment';

function App() {
  return (
    <div className="App">
     {/* <Basic name="hahha1" id="xhy"/> */}
     {/* <List/> */}
     {/* <Functional/> */}
     {/* <Classcom/>
     <Classcom/>
     <Classcom/> */}
     <Comment />
    </div>
  );
}

export default App;
