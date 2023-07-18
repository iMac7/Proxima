"use client";
import { useEffect } from "react";
import styles from "../public/css/home.module.css";

export default function Home() {
  const mysvg = (
    <svg
      className={styles.svg}
      version="1.0"
      width="195.000000pt"
      height="258.000000pt"
      viewBox="0 0 195.000000 258.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,258.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          className="path"
          d="M840 2479 c-206 -20 -386 -90 -500 -196 -99 -91 -149 -199 -187 -397
  -15 -74 -18 -148 -18 -392 l0 -300 42 -90 c39 -85 42 -96 58 -265 l18 -176 99
  -129 c55 -71 103 -136 107 -145 3 -9 44 -64 91 -121 56 -70 104 -118 141 -142
  l56 -36 228 0 229 0 60 40 c63 42 80 62 325 390 l108 146 18 179 c18 174 20
  183 58 260 l40 80 5 242 c10 534 -63 772 -283 918 -103 68 -254 115 -427 134
  -108 12 -144 12 -268 0z m-130 -201 c0 -28 78 -629 82 -633 2 -3 44 -10 94
  -17 74 -11 105 -11 181 0 92 14 93 14 98 46 5 29 75 599 75 611 0 24 196 -24
  311 -77 l86 -39 6 -377 6 -377 33 -132 32 -131 -36 -74 c-20 -40 -86 -156
  -147 -257 -60 -101 -120 -209 -132 -240 -17 -43 -79 -144 -116 -190 -2 -3 -18
  10 -36 27 l-33 32 -237 0 -236 0 -36 -32 c-21 -18 -40 -27 -43 -22 -72 103
  -90 133 -97 154 -13 43 -54 118 -155 286 -53 89 -114 195 -135 237 l-39 75 33
  137 33 138 5 373 6 373 88 40 c131 61 309 100 309 69z m-8 -1905 l30 37 243 0
  243 0 30 -37 29 -36 50 71 c28 39 53 68 57 65 3 -3 6 -29 6 -56 0 -50 -9 -71
  -77 -180 l-23 -37 -38 17 c-20 9 -77 20 -127 24 -49 5 -112 11 -138 15 -31 4
  -53 2 -60 -5 -6 -6 -47 -11 -94 -11 -65 0 -93 -5 -124 -20 -22 -12 -44 -18
  -49 -15 -4 3 -29 41 -54 85 -34 57 -46 90 -46 119 0 76 9 76 63 -1 l50 -71 29
  36z"
        />
        <path
          className="path"
          d="M396 1307 c-15 -57 -7 -88 39 -140 l45 -52 131 -26 131 -26 25 39
  c14 21 24 40 21 43 -4 4 -179 88 -315 150 -71 33 -71 33 -77 12z"
        />
        <path
          className="path"
          d="M1356 1239 c-104 -49 -191 -91 -194 -93 -9 -10 40 -76 56 -76 9 0 70
  10 135 22 l118 22 44 52 c37 43 45 59 44 91 -1 79 4 80 -203 -18z"
        />
      </g>
    </svg>
  );

  function getScrollPercentage() {
    const paths = document.querySelectorAll(".path");

    let scrollPercentage =
      (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);

    for (const path of paths) {
      path.style.strokeWidth = 10 * scrollPercentage;
      path.style.fill = `rgb(
        ${255 * (1.2 - scrollPercentage)},
        ${255 * (1.2 - scrollPercentage)},
        ${255 * (1.2 - scrollPercentage)}
       )`;
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", getScrollPercentage);
  }, []);

  return (
    <div className={styles.home}>
      {mysvg}

      <section className={`${styles.hero} ${styles.section}`}>
        <h2>Connecting Brands to their Customers Through Virtual Agents</h2>

        <p>
          Proxima leverages on modern practices to not only improve interaction,
          but to also simplify and smoothen it.
        </p>

        <button>Try for free</button>
      </section>

      <section className={`${styles.why} ${styles.section}`}>
        <h2>Why choose us</h2>

        <p>Using powerful Virtual Assistants to grow your business</p>

        <ul>
          <li>
            Improved communication and engament between customers and the
            business
          </li>
          <li>Quick issue resolution and improved customer experience.</li>
          <li>
            Robust customer support system providing timely resolution of
            queries and issues.
          </li>
        </ul>
      </section>

      <section className={`${styles.features} ${styles.section}`}>
        <div className={styles.card}>
          <h3>Reports</h3>
          <p></p>
          <button>Learn More &gt;</button>
        </div>
        <div className="card"></div>
        <div className="card"></div>
      </section>
    </div>
  );
}
