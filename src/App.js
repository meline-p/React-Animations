import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Liste from "./Pages/Liste/Liste";
import Scroll from "./Pages/Scroll/Scroll";
import StateAnim from "./Pages/StateAnim/StateAnim";
import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  return (
    <Router>
      <div className="global-container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Liste} />
          <Route path="/stateanim" component={StateAnim} />
          <Route path="/scroll" component={Scroll} />
        </Switch>
      </div>
    </Router>
  );
}
