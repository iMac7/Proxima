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

for (let i = 0; i < 5; i++) {
  faqs[i] = {
    question: "What is Proxima",
    answer:
      "Proxima is an AI kenyan based company that builds virtual conversational assistants for different organistaions, brands and groups",
  };
}

export default function Features() {
  return (
    <div className={styles.outer}>
      <h1>Features we offer</h1>

      <section className={styles.cards}>
        {cardData.map((card) => (
          <div className={styles.card}>
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
        {faqs.map((faq) => (
          <div className={styles.faq}>
            <p>{faq.question}</p>
            <p>{faq.answer}</p>
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
