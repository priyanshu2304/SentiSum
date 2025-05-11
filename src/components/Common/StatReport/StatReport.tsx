import "./StatReport.css";
import Card from "../../Card/Card";
const data = [
  {
    tag: "Game Crashed",
    volume: 8102,
    change: "6%",
    trend: "up",
    severity: "critical",
  },
  {
    tag: "Game Aborted",
    volume: 6259,
    change: "4%",
    trend: "up",
    severity: "high",
  },
  {
    tag: "Request Refund",
    volume: 6015,
    change: "3%",
    trend: "down",
    severity: "medium",
  },
  {
    tag: "I Didn't Abort",
    volume: 3409,
    change: "7%",
    trend: "up",
    severity: "critical",
  },
  {
    tag: "App Crashed",
    volume: 3248,
    change: "1%",
    trend: "up",
    severity: "low",
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "critical":
      return "#fdecea"; // light red
    case "high":
      return "#fff4e5"; // light orange
    case "medium":
      return "#f1fbe7"; // light green
    case "low":
    default:
      return "#f5f5f5"; // light grey
  }
};

const StatReport = () => {
  return (
    <Card>
      <div className="stat-report-container">
        <div className="header">
          <h2>Stat report</h2>
        </div>
        <div className="stat-table">
          <div className="table-header">
            <span className="col tag">Sentisum Tag</span>
            <span className="col volume">Volume</span>
            <span className="col change">% Change</span>
          </div>
          {data.map((item, index) => (
            <div
              key={index}
              className="table-row"
              style={{ backgroundColor: getSeverityColor(item.severity) }}
            >
              <span className="col tag">{item.tag}</span>
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

export default StatReport;
