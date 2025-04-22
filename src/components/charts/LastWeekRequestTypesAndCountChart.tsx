
import Chart from "react-apexcharts";

const LastWeekRequestTypesAndCountChart = () => {
    const series = [44, 55, 41, 17];

    const options = {
        labels: ["ژل", "بوتاکس", "فیلر", "لیزر"]
    };

    return <Chart options={options} series={series} type="donut" height={200}  />;
};
export default LastWeekRequestTypesAndCountChart;
