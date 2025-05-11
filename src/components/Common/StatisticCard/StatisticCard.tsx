import styles from "./StatisticCard.module.css";
const cards = [
  {
    tag: "Meal Kit Support",
    label: "Volume",
    value: "18,851",
    change: "↑ 555",
    changeType: "up",
    bg: "purple",
  },
  {
    tag: "Meal Kit Support",
    label: "% Of Tickets",
    value: "100%",
    change: "↑ 0",
    changeType: "same",
    bg: "purple",
  },
  {
    tag: "Meal Kit Survey",
    label: "Sentiment",
    value: "93%",
    change: "↑ 3",
    changeType: "up",
    bg: "blue",
  },
  {
    tag: "Gaming Support",
    label: "Volume",
    value: "58,873",
    change: "↑ 1213",
    changeType: "up",
    bg: "green",
  },
];

const StatisticCard = () => {
  return (
    <div className={styles.statCard}>
      <div className={styles.header}>
        <h2>Statistic Card</h2>
        <p>TEST</p>
      </div>

      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <div key={index} className={`${styles.card} ${styles[card.bg]}`}>
            <div className={styles.tag}>{card.tag}</div>
            <p className={styles.label}>{card.label}</p>
            <p className={styles.value}>
              {card.value}
              <span className={`${styles.change} ${styles[card.changeType]}`}>
                {card.change}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticCard;
