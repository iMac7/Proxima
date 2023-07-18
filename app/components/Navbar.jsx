"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Draggable from "react-draggable";
import styles from "../../public/css/navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [path, setPath] = useState("");

  if (typeof window !== "undefined") {
    useEffect(() => {
      setPath(window.location.pathname);
    }, [window.location.pathname]);
  }

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
          href={"/contact"}
          className={`${styles.link} ${
            checkPath("contact") ? styles.active : ""
          }`}
        >
          Contact
        </Link>

        <Link
          href={"/about"}
          className={`${styles.link} ${
            checkPath("about") ? styles.active : ""
          }`}
        >
          About
        </Link>

        <Link
          href={"/waitlist"}
          className={`${styles.link} ${
            checkPath("waitlist") ? styles.active : ""
          }`}
        >
          Waitlist
        </Link>
      </ul>

      <Draggable>
        <button
          className={`${styles.closebtn} ${!open ? styles.closed : ""} `}
          onClick={handleClose}
          onTouchStart={handleClose}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM8.96965 8.96967C9.26254 8.67678 9.73742 8.67678 10.0303 8.96967L12 10.9394L13.9696 8.96969C14.2625 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0303L13.0606 12L15.0303 13.9697C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73744 15.3232 9.26256 15.3232 8.96967 15.0303C8.67678 14.7374 8.67678 14.2626 8.96967 13.9697L10.9393 12L8.96965 10.0303C8.67676 9.73744 8.67676 9.26256 8.96965 8.96967Z"
                fill="#1C274C"
              />
            </svg>
          ) : (
            "+"
          )}
        </button>
      </Draggable>
    </nav>
  );
}
