import styles from "../../public/css/features.module.css";
import svg from "../../public/images/svg.js";

const cardData = [];

for (let i = 0; i < 6; i++) {
  cardData[i] = {
    svg: svg,
    title: "Reports",
    text: "ProximaAI generates tenant reports on chat and community issues.",
  };
}

export default function Features() {
  return (
    <div className={styles.outer}>
      <section className={styles.cards}>
        {cardData.map((card) => (
          <div className={styles.card}>
            <div className={styles.header}>
              {card.svg}
              <p>{card.title}</p>
            </div>
            <p>{card.text}</p>
            <button>LEARN MORE</button>
          </div>
        ))}
      </section>

      <section className={styles.faq}></section>

      <section className={styles.questions}></section>
    </div>
  );
}
