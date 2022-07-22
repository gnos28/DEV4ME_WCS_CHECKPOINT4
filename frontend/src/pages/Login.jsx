import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import pathContext from "../contexts/pathContext";
import userContext from "../contexts/userContext";
import userAPI from "../services/userAPI";
import "../styles/Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState({});
  const { user, setUser } = useContext(userContext);
  const { setPaths } = useContext(pathContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      userAPI
        .post("/auth/login", { email, password })
        .then((res) => {
          toast.success("Vous êtes connecté !");
          localStorage.setItem("user", JSON.stringify(res.data));
          setUser(res.data);
          setPaths([{ display: "admin", route: "/admin" }]);
          navigate("/admin");
        })
        .catch(() =>
          toast.warning("Votre email ou votre mot de passe est faux")
        );
    }
    if (email && !password) {
      toast.warning("Merci de renseigner votre mot de passe");
    }
    if (!email && password) {
      toast.warning("Merci de renseigner votre email");
    }
  };

  const handleDisconnect = () => {
    userAPI
      .get("/auth/logout")
      .then(() => {
        localStorage.clear();
        setUser({});
        navigate("/");
        toast.warning("Vous êtes déconnecté !");
      })
      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div className="loginContainer">
      {user && Object.entries(user).length ? (
        <div>
          <p>connecté en tant que : {user.email}</p>
          <button type="submit" onClick={handleDisconnect}>
            Déconnexion
          </button>
        </div>
      ) : (
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="user"
              name="user"
              className="Input-text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="input" className="Input-label">
              Login
            </label>
          </div>

          <div>
            <input
              type="text"
              id="pass"
              name="pass"
              className="Input-text"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label htmlFor="input" className="Input-label">
              Password
            </label>
          </div>

          <button type="submit">Connexion</button>
        </form>
      )}
    </div>
  );
}
