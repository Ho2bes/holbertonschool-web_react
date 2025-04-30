import "./App.css";
import { Fragment } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

function App() {
  return (
    <Fragment>
      <div className="root-notifications">
        <Notifications />
      </div>
      <Header />
      <div className="App-body">
        <Login />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
