import Card from "../../Card/Card";

const data = [
  {
    tag: "🇺🇸 United States",
    volume: 8102,
    change: "6%",
    trend: "up",
  },
  {
    tag: "🇮🇳 India",
    volume: 6259,
    change: "4%",
    trend: "up",
  },
  {
    tag: "🇧🇷 Brazil",
    volume: 6015,
    change: "3%",
    trend: "down",
  },
  {
    tag: "🇩🇪 Germany",
    volume: 3409,
    change: "7%",
    trend: "up",
  },
  {
    tag: "🇯🇵 Japan",
    volume: 3248,
    change: "1%",
    trend: "up",
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "down":
      return "#fdecea"; // light red
    case "up":
      return "#f1fbe7"; // light green
    default:
      return "#f5f5f5"; // light grey
  }
};

const GamingSupport = () => {
  return (
    <Card>
      <div className="gaming-report-container">
        <div className="header">
          <h2>Gaming Support</h2>
        </div>
        <div className="gaming-table">
          <div className="table-header">
            <span className="col tag">Country</span>
            <span className="col volume">Volume</span>
            <span className="col change">Absolute Change</span>
          </div>
          {data.map((item, index) => (
            <div
              key={index}
              className="table-row"
              style={{ backgroundColor: getSeverityColor(item.trend) }}
            >
              <span className={`col tag tag-${item.trend}`}>{item.tag}</span>
              <span className="col volume">{item.volume.toLocaleString()}</span>
              <span className="col change">
                <span
                  className={`trend-icon ${
                    item.trend === "up" ? "up" : "down"
                  }`}
                >
                  {item.trend === "up" ? "🔺" : "🔻"}
                </span>
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default GamingSupport;
