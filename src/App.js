import Card from "./component/Card";
import Statistics from "./component/Statistics";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="row">
          <div className="col-3" style={{marginLeft:450}}>
            <Link to="" type="button" class="btn btn-primary btn-sm">
              Countries
            </Link>
          </div>
          <div className="col-3" style={{marginLeft:-100}}>
            <Link to="statistics" type="button" className="btn btn-primary btn-sm">
              Most Languages
            </Link>
          </div>
        </div>
        <Route path="/Statistics" component={Statistics} exact />
        <Route path="/" component={Card} exact />
        <div></div>
        
      </div>
     
    </Router>
  );
}

export default App;
