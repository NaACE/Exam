import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";

/* Страницы */
import Home from "./component/Home/Home";
import Library from "./component/Library/Library";
import Top from "./component/Top/Top";
import Virus from "./component/Virus/Virus";
import Identification from "./component/Identification/Identification";

/* <!-- Bootstrap --> */
import "./main/bootstrap-reboot.min.css";
import "./main/bootstrap-grid.min.css";

/* <!-- Шрифты --> */
import "./main/fonts.css";

// <-- Стили сайта -->
import "./Main.css";

function App() {
  return (
    <>
      <Header username="Name" />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/top" component={Top} />
          <Route exact path="/virus" component={Virus} />
          <Route exact path="/identification" component={Identification} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
