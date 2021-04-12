import "./App.css";
import Nav from "./componenet/Nav"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Home  from "./componenet/Folder/Home";
import About from "./componenet/Folder/About";
import  Blog  from "./componenet/Folder/Blog";
import Contact from "./componenet/Folder/Contact";
import Login from "./componenet/Folder/Login"


function App() {
  return (
    <>
      <Router>
        <Nav />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;