import "./App.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Portfolios from "./Pages/Portfolio";
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();


  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route path="/" exact component={Home} />
            <Route path="/portfolios" exact component={Portfolios} />
          </Switch>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
