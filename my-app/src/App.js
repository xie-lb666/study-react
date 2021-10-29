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
import ToDoList from './component/ToList/todolist';
import About from './pages/About/About';
import Home from './pages/Home/Home';

import {NavLink,Route,Switch,Redirect} from 'react-router-dom';

function App() {
  const p = {name:'谢华勇',sex:'男',age:18};
  // console.log({...p});
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
     {/* <Refss/> */}
     {/* <ToDoList/> */}
     <div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
                <NavLink 
                to="/about" 
                className="list-group-item">About</NavLink>
						  	<NavLink 
                to="/home"
                className="list-group-item" >Home</NavLink>
            </div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
                <Redirect to="/about"/>
              </Switch>
							</div>
						</div>
					</div>
				</div>
    </div>
  );
}

export default App;
