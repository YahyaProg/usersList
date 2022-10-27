import { useSelector } from "react-redux";
import { Button, Result } from "antd";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { Home, Register, EditPersons, Login } from "../pages/index";
import { Footer } from "../components";

const PersonsList = () => {
  const { isLogin } = useSelector((state) => state.LofinInfo);
  console.log(isLogin);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          {isLogin === false ? <Login /> : <Redirect to="/home" />}
        </Route>
        <Route exact path="/home">
          {isLogin === true ? <Home /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/register">
          {isLogin === false ? <Register /> : <Redirect to="/home" />}
        </Route>
        <Route exact path="/edit/:id">
          <EditPersons />
        </Route>
        <Route exact path="*">
          <div className="container h-100vh d-flex err-font-size">
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={
                <Link to="/register">
                  <Button className="errPage-btn " type="primary">
                    برگشت به خانه
                  </Button>
                </Link>
              }
            />
          </div>
        </Route>
      </Switch>

      {isLogin === true && <Footer />}
    </div>
  );
};

export default PersonsList;
