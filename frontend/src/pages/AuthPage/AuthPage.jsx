import React from "react";
import { useState } from "react";
import "./AuthPage.scss";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import axios from "axios";

// app.use("/api/auth");
const AuthPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  const registerHandler = async () => {
    try {
      await axios
        .post(
          "/api/auth/registration",
          { ...form },
          {
            headers: {
              "content-type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <React.Fragment>
          <div className="container">
            <div className="auth-page">
              <Route path="/login">
                <h3>Вхід до облікового запису</h3>
                <form
                  className="form form-login"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="email"
                        name="email"
                        className="validate"
                        onChange={changeHandler}
                      />
                      <label htmlFor="email">Електронна пошта</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="password"
                        name="password"
                        className="validate"
                        onChange={changeHandler}
                      />
                      <label htmlFor="email">Пароль</label>
                    </div>
                  </div>
                  <div className="row">
                    <button className="waves-effect btn btn-color">
                      Увійти
                    </button>
                    <Link to="/registration" className=" btn-outline btn-reg">
                      Немає облікового запису?
                    </Link>
                  </div>
                </form>
              </Route>
              <Route path="/registration">
                <h3>Створення облікового запису</h3>
                <form
                  className="form form-login"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="email"
                        name="email"
                        className="validate"
                        onChange={changeHandler}
                      />
                      <label htmlFor="email">Електронна пошта</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="password"
                        name="password"
                        className="validate"
                        onChange={changeHandler}
                      />
                      <label htmlFor="email">Пароль</label>
                    </div>
                  </div>
                  <div className="row">
                    <button
                      className="waves-effect btn btn-color"
                      onClick={registerHandler}
                    >
                      Зареєструватися
                    </button>
                    <Link to="/login" className=" btn-outline btn-reg">
                      Вже є обліковий запис?
                    </Link>
                  </div>
                </form>
              </Route>
            </div>
          </div>
        </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default AuthPage;
