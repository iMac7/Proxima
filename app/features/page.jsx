"use client";
import { useState } from "react";
import styles from "../../public/css/features.module.css";
import svg from "../../public/images/svg.js";

const cardData = [];

for (let i = 0; i < 7; i++) {
  cardData[i] = {
    svg: svg,
    title: "Reports",
    text: "ProximaAI generates tenant reports on chat and community issues.",
  };
}

const faqs = [];

for (let i = 0; i < 3; i++) {
  faqs[i] = {
    question: "What is Proxima",
    answer:
      "Proxima is an AI kenyan based company that builds virtual conversational assistants for different organistaions, brands and groups",
  };
}

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleClick(index) {
    if (index === activeIndex) setActiveIndex(null);
    else setActiveIndex(index);
  }

  return (
    <div className={styles.outer}>
      <h1>Features we offer</h1>

      <section className={styles.cards}>
        {cardData.map((card, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.header}>
              {card.svg}
              <h4>{card.title.toUpperCase()}</h4>
            </div>
            <p>{card.text}</p>
            <button>LEARN MORE &gt;</button>
          </div>
        ))}
      </section>

      <section className={styles.faqs}>
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div className={styles.faq} key={index}>
            <div className={styles.header} onClick={() => handleClick(index)}>
              <p>{faq.question}</p>
              <p>{index === activeIndex ? "-" : "+"}</p>
            </div>
            <p
              className={`${styles.answer} ${
                index === activeIndex ? styles.active : ""
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </section>

      <section className={styles.questions}>
        <h2>Still have questions?</h2>
        <p>Feel free to contact us</p>
        <button>CONTACT US</button>
      </section>
    </div>
  );
}
