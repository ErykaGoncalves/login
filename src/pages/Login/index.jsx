import { useState } from "react";
import "../../utils/dark"
import "./styles.css";
import "../../components/Global/index"
import "../../components/Dark/index"
import animacao from "../../assets/img/anima.svg"



import Global from "../../components/Global/index"


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <Global />
      <div className="container-base">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title"> Bem vindo </span>
              <div className="wrap-input">
                <input
                  className={email !== "" ? "has-val input" : "input"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="focus-input" data-placeholder="Password"></span>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn">Login</button>
              </div>

              <div className="text-center">
                <span className="txt1">Não possui conta? </span>
                <a className="txt2" href="#">
                  Criar conta
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="container-animacao">
          <img src={animacao} className="foto-animacao" />
        </div>
      </div>
    </div>
  );
}

export default App;
