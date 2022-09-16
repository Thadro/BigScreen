import gsap from "gsap";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export default function LoginForm() {
  useEffect(() => {
    gsap.set("form", { opacity: 0, top: 20 });
    gsap.to("form", { opacity: 1, top: 0, delay: 0.4, duration: 0.4 });
  }, []);

  const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.elements);
    navigate("/admin");
  };

  return (
    <form className={styles.form + " card"} onSubmit={onSubmit}>
      <h1>Connexion</h1>
      <label>Email</label>
      <input />
      <label>Mot de passe</label>
      <input />

      <button className="btn">Se connecter</button>

      <Link to="/">Mot de passe oublié ?</Link>
      <Link to="/">Pas encore membre ? S'inscrire</Link>
    </form>
  );
}
