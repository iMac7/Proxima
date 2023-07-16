"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../public/css/navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname]);

  function checkPath(url) {
    if (path && path === "/" + url) return true;
    else return false;
  }

  function handleClose(e) {
    e.stopPropagation();
    setOpen(!open);
  }

  return (
    <nav
      className={`${styles.nav} ${!open ? styles.invisible : ""}`}
      onClick={handleClose}
    >
      <ul
        className={`${styles.ul} ${!open ? styles.closed : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Link
          href={"/"}
          className={`${styles.link} ${checkPath("") ? styles.active : ""}`}
        >
          Home
        </Link>
        <Link
          href={"/features"}
          className={`${styles.link} ${
            checkPath("features") ? styles.active : ""
          }`}
        >
          Features
        </Link>
        <Link
          href={"/"}
          className={`${styles.link} ${
            checkPath("about") ? styles.active : ""
          }`}
        >
          About
        </Link>
        <Link
          href={"/contact"}
          className={`${styles.link} ${
            checkPath("contact") ? styles.active : ""
          }`}
        >
          Contact
        </Link>
        <Link
          href={"/"}
          className={`${styles.link} ${
            checkPath("waitlist") ? styles.active : ""
          }`}
        >
          Waitlist
        </Link>
      </ul>

      <button className={styles.closebtn} onClick={handleClose}>
        {open ? "X" : "+"}
      </button>
    </nav>
  );
}
