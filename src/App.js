import "./App.scss";
import { Switch, Route } from "react-router-dom";
// import AboutPage from "./Pages/AboutPage";
import PortfliosPage from "./Pages/PortfoliosPage";
// import BlogsPage from "./Pages/BlogsPage";
// import ContactPage from "./Pages/ContactPage";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  

  return (
    <div className="App">
        <Header/>
      <div className="main-content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
             
            <Route path="/portfolios" exact>
              <PortfliosPage />
            </Route>
            {/*<Route path="/blogs" exact>
              <BlogsPage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route> */}
          </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
