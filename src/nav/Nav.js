import React from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className={styles.navContainer}>
      <Link className={styles.logo} to="/fishv3/">
        Fincounter
      </Link>
    </div>
  );
}

export default Nav;
