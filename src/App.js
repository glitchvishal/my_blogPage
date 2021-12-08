
import './App.css';
import NavBar from './component/NavBar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Single from './Pages/Single';
import Write from './Pages/Write';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import SinglePost from './component/SinglePost';

const App = () => {

  const user = false;

  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      {/* <Route exact path="/about" component={Write}/> */}
      <Route exact path="/register"> {user ? <Home/> : <Register/>} </Route> 
      <Route exact path="/write"> {user ? <Write/> : <Register/>} </Route> 
      <Route exact path="/login"> {user ? <Home/> : <Login/>} </Route> 
      <Route path="/post" component={Single}></Route>
            
          
      </Switch>
    </BrowserRouter>
  );
}

export default App;
