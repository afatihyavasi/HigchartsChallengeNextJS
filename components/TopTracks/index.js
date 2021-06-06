import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
}

const TopTracks = () => {
    const isLoading = useSelector((state) => state?.topTracksReducer?.isLoading);
    const error = useSelector((state) => state?.topTracksReducer?.error);
    const value = useSelector((state) => state?.topTracksReducer?.data);
    const country = useSelector((state) => state?.formReducer?.country);
    const topNumber = useSelector((state) => state?.formReducer?.topNumber);

    const [options, setOptions] = useState({
        chart: {
            type: 'column',
        },
        title: {
            text: `Top ${topNumber} tracks in ${country.toUpperCase()}`,
        },
        accessibility: {
            announceNewData: {
                enabled: true,
            },
        },
        xAxis: {
            categories: value.map((item) => item.name),
        },
        yAxis: {
            title: {
                text: 'Total listeners',
            },
        },
        legend: {
            enabled: false,
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.f}',
                },
            },
        },
        tooltip: {
            pointFormat:
                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.f}</b> of total<br/>',
        },
        series: [
            {
                colorByPoint: true,
                data: value.map((item) => {
                    return { name: item.name, y: Number(item.listeners) };
                }),
            },
        ],
    });

    useEffect(() => {
        window.Highcharts = Highcharts;
        setOptions({
            ...options,
            title: {
                text: `Top ${topNumber} tracks in ${country.toUpperCase()}`,
            },
            xAxis: {
                categories: value.map((item) => item.name),
            },
            series: [
                {
                    colorByPoint: true,
                    data: value.map((item) => {
                        return { name: item.name, y: Number(item.listeners) };
                    }),
                },
            ],
        });
    }, [value]);

    return (
        <div>
            {isLoading ? (
                <Spinner />
            ) : error ? null : (
                <HighchartsReact highcharts={Highcharts} options={options} />
            )}
        </div>
    );
};

export default TopTracks;
