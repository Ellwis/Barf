
import Chart from "react-apexcharts";

const LastWeekCustomersChart = () => {
    const options = {
        xaxis: {
            categories: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنح شنبه", "جمعه"]
        }
    };
    const series = [
        {
            name: "تعداد درخواست ها",
            data: [30, 40, 25, 50, 49, 21, 70]
        },

    ];

    return <Chart options={options} series={series} type="bar" height={200} />;
};
export default LastWeekCustomersChart;
