import { NavLink } from "react-router-dom";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";

import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className="home-page">
      <div className="intro">
        <p className="welcome">
          Welcome to the
          <span className="heading">Frontend Quiz!</span>
        </p>

        <p className="text">Pick a subject to get started</p>
      </div>

      <ul className={styles.list}>
        <li>
          <NavLink to="html">
            <span className={styles.iconBox}>
              <IoLogoHtml5 className="icon-1" />
              html{" "}
            </span>{" "}
          </NavLink>
        </li>

        <li>
          <NavLink to="css">
            <span className={styles.iconBox}>
              <IoLogoCss3 className="icon-2" />
              css
            </span>{" "}
          </NavLink>
        </li>

        <li>
          <NavLink to="javascript">
            <span className={styles.iconBox}>
              <IoLogoJavascript className="icon-3" />
              javascript{" "}
            </span>{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="react">
            <span className={styles.iconBox}>
              <IoLogoReact className="icon-4" />
              React
            </span>{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
