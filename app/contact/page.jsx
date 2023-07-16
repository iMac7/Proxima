"use client";
import { useState } from "react";
import styles from "../../public/css/contacts.module.css";

export default function Contacts({ position, setPosition }) {
  const [copiedItem, setCopiedItem] = useState(null);

  const copySvg = (
    <svg className={styles.svg} viewBox="0 0 24 24" fill="none">
      <path
        fill="rgb(10, 227, 238)"
        d="M19.53 8L14 2.47C13.8595 2.32931 13.6688 2.25018 13.47 2.25H11C10.2707 2.25 9.57118 2.53973 9.05546 3.05546C8.53973 3.57118 8.25 4.27065 8.25 5V6.25H7C6.27065 6.25 5.57118 6.53973 5.05546 7.05546C4.53973 7.57118 4.25 8.27065 4.25 9V19C4.25 19.7293 4.53973 20.4288 5.05546 20.9445C5.57118 21.4603 6.27065 21.75 7 21.75H14C14.7293 21.75 15.4288 21.4603 15.9445 20.9445C16.4603 20.4288 16.75 19.7293 16.75 19V17.75H17C17.7293 17.75 18.4288 17.4603 18.9445 16.9445C19.4603 16.4288 19.75 15.7293 19.75 15V8.5C19.7421 8.3116 19.6636 8.13309 19.53 8ZM14.25 4.81L17.19 7.75H14.25V4.81ZM15.25 19C15.25 19.3315 15.1183 19.6495 14.8839 19.8839C14.6495 20.1183 14.3315 20.25 14 20.25H7C6.66848 20.25 6.35054 20.1183 6.11612 19.8839C5.8817 19.6495 5.75 19.3315 5.75 19V9C5.75 8.66848 5.8817 8.35054 6.11612 8.11612C6.35054 7.8817 6.66848 7.75 7 7.75H8.25V15C8.25 15.7293 8.53973 16.4288 9.05546 16.9445C9.57118 17.4603 10.2707 17.75 11 17.75H15.25V19ZM17 16.25H11C10.6685 16.25 10.3505 16.1183 10.1161 15.8839C9.8817 15.6495 9.75 15.3315 9.75 15V5C9.75 4.66848 9.8817 4.35054 10.1161 4.11612C10.3505 3.8817 10.6685 3.75 11 3.75H12.75V8.5C12.7526 8.69811 12.8324 8.88737 12.9725 9.02747C13.1126 9.16756 13.3019 9.24741 13.5 9.25H18.25V15C18.25 15.3315 18.1183 15.6495 17.8839 15.8839C17.6495 16.1183 17.3315 16.25 17 16.25Z"
      />
    </svg>
  );

  const links = [
    {
      name: "Phone / WhatsApp",
      icon: (
        <svg className={styles.svg} viewBox="-4 0 20 20" version="1.1">
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="white"
            fillRule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-384.000000, -7159.000000)"
              fill="#000000"
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  fill="white"
                  d="M338,7002 C338,7001.448 337.552,7001 337,7001 L331,7001 C330.448,7001 330,7001.448 330,7002 L330,7016 C330,7016.552 330.448,7017 331,7017 L337,7017 C337.552,7017 338,7016.552 338,7016 L338,7002 Z M340,7001 L340,7017 C340,7018.105 339.105,7019 338,7019 L330,7019 C328.895,7019 328,7018.105 328,7017 L328,7001 C328,6999.895 328.895,6999 330,6999 L338,6999 C339.105,6999 340,6999.895 340,7001 L340,7001 Z M335.021,7014 C335.021,7014.552 334.573,7015 334.021,7015 C333.469,7015 333.021,7014.552 333.021,7014 C333.021,7013.448 333.469,7013 334.021,7013 C334.573,7013 335.021,7013.448 335.021,7014 L335.021,7014 Z"
                  id="phone-[#225]"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      ),
      linkText: "+254796342709",
    },
    {
      name: "E-mail",
      icon: (
        <svg className={styles.svg} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      linkText: "administrator@proximaai.co",
    },
    {
      name: "Location",
      icon: (
        <svg
          className={styles.svg}
          viewBox="0 0 64 64"
          enable-background="new 0 0 64 64"
        >
          <path
            fill="#ffffff"
            d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
          C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
          C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
          />
        </svg>
      ),
      linkText: "Modern Hospital, Juja",
    },
  ];

  function handleCopy(text, index) {
    navigator.clipboard.writeText(text).then(() => setCopiedItem(index));
    setTimeout(() => {
      setCopiedItem(null);
    }, 1000);
  }

  return (
    <div
      className={styles.outer}
      style={{ top: position }}
      onClick={setPosition}
    >
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.header}>CONTACT US</h2>

        {links.map((link, index) => (
          <div className={styles.contact} key={index}>
            {link.icon}

            <div className={styles.mid}>
              <span>{link.name}</span>
              <input type="text" value={link.linkText} readOnly />
            </div>

            <button onClick={() => handleCopy(link.linkText, index)}>
              {copiedItem !== null && index === copiedItem ? "Copied" : copySvg}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
