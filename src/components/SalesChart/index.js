import React from "react";
import Chart from "react-apexcharts";

function SalesChart({ data, categories }) {
    const state = {
        series: [{
            name: "Sales",
            data: data
        }],
        options: {
            chart: {
                height: 350,
                type: "bar",
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: "top", // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                },
                offsetY: -20,
                style: {
                    fontSize: "12px",
                    colors: ["#304758"]
                }
            },
            xaxis: {
                categories: categories,
                position: "top",
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: "gradient",
                        gradient: {
                            colorFrom: "#D8E3F0",
                            colorTo: "#BED1E6",
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                title: {
                    text: "Sales",
                    offsetX: 10,
                },
                labels: {
                    show: true,
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            },
            title: {
                text: "Sales by month for:",
                floating: false,
                offsetY: 0,
                align: "center",
                style: {
                    color: "#444"
                }
            }
        },
    };

    return (
        <Chart
            height="400"
            options={state.options}
            series={state.series}
            type="bar"
        />
    );
};

export default SalesChart;
