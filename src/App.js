import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthProvider } from "./firebase/Auth";
import PrivateRoute from "./PrivateRoute";

//authentication protection for loaded pages
const App = () => {

  return (
    <AuthProvider>
      <Router>
        <div>
        <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
