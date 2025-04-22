
import Chart from "react-apexcharts";
import React from "react";

const AllActivitiesChart = () => {
    const [state] = React.useState({
        series: [{
            name: "درخواست",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148 , 0 , 0 ,0 ,0]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },

            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان',  'آذر' , 'دی' , 'بهمن' , 'اسفند'],
            }
        },


    });

    // @ts-ignore
    return <Chart options={state.options} series={state.series} type="area" height={200} />
};
export default AllActivitiesChart;
