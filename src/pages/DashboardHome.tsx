import DateSelector from "../components/Common/DateSelector/DateSelector";
import StatisticCard from "../components/Common/StatisticCard/StatisticCard";
import StatReport from "../components/Common/StatReport/StatReport";
import GamingSupport from "../components/Common/GamingSupport/GamingSupport";
import "../assets/styles/common.css";
const DashboardHome = () => {
  return (
    <>
      <DateSelector />
      <StatisticCard />
      <div className="d-flex-responsive gap-5 mt-5 mob-margin-bottom-50">
        <StatReport />
        <GamingSupport />
      </div>
    </>
  );
};

export default DashboardHome;
