import { useSelector } from 'react-redux';
import Link from 'next/link'
import Spinner from '../Spinner';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
}

const TopArtist = () => {
    const isLoading = useSelector((state) => state.topArtistReducer.isLoading);
    const value = useSelector((state) => state.topArtistReducer?.data);
    const error = useSelector((state) => state.topArtistReducer?.error);
    const country = useSelector((state) => state.formReducer?.country);
    const topNumber = useSelector((state) => state.formReducer?.topNumber);

    const [options, setOptions] = useState({
        chart: {
            type: 'column',
        },
        title: {
            text: `Top ${topNumber} artist in ${country.toUpperCase()}`,
        },
        accessibility: {
            announceNewData: {
                enabled: true,
            },
        },
        xAxis: {
            categories: value.map((item) => ( <Link href={`/${item.name}`}>
                <a>{item.name}</a>
            </Link>)),
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
                cursor:'pointer',
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
                text: `Top ${topNumber} artist in ${country.toUpperCase()}`,
            },
            xAxis: {
                categories: value.map((item) => item.name),
            },
            series: [
                {
                    colorByPoint: true,
                    cursor:'pointer',
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
            ) : error ? (
                <div>{error}</div>
            ) : (
                <HighchartsReact highcharts={Highcharts} options={options} />
            )}
        </div>
    );
};

export default TopArtist;
