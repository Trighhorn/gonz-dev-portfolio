import "../style/app.scss";
import Contact from "./pages/contact";
import Homepage from "./pages/homepage";
import Portfolio from "./portfolio/portfolio";
import Navbar from './navigation/navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
