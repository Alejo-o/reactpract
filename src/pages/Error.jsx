import { Link } from "react-router-dom";
import styles from "../components/Error.module.css";

export const Error = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          src="https://res.cloudinary.com/dcut7k58h/image/upload/v1754169167/Captura_de_pantalla_2025-08-02_161217_f0kvv6.png"
          alt="404 Not Found"
          className={styles.image}
        />
        <h1 className={styles.title}>I have bad news for you</h1>
        <p className={styles.description}>
          The page you are looking for might be removed or is temporarily unavailable
        </p>
            <Link to="/" className={styles.button}>
      Back to homepage
    </Link>
      </div>
    </div>
  );
};