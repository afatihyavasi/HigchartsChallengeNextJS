import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import Spinner from '../Spinner';
import slugify from 'slugify';
import NoData from '../NoData';

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
}

const TopArtist = () => {
    const isLoading = useSelector((state) => state.topArtistReducer.isLoading);
    const value = useSelector((state) => state.topArtistReducer?.data);
    const error = useSelector((state) => state.topArtistReducer?.error);
    const country = useSelector((state) => state.formReducer?.country);
    const topNumber = useSelector((state) => state.formReducer?.topNumber);
    const router = useRouter();

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
                borderWidth: 1,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.f}',
                },
                point: {
                    events: {
                        click: function () {
                            router.push({
                                pathname: 'artist/[slug]',
                                query: {
                                    slug: slugify(this.category, {
                                        lower: true,
                                        remove: /[*+~.()'"!:@]/g,
                                    }),
                                },
                            });
                        },
                    },
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
                cursor: 'pointer',
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
            plotOptions: {
                series: {
                    borderWidth: 1,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.f}',
                    },
                    point: {
                        events: {
                            click: function () {
                                router.push({
                                    pathname: 'artist/[slug]',
                                    query: {
                                        slug: slugify(this.category, {
                                            lower: true,
                                            remove: /[*+~.()'"!:@]/g,
                                        }),
                                    },
                                });
                            },
                        },
                    },
                },
            },
            series: [
                {
                    colorByPoint: true,
                    cursor: 'pointer',
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
                <NoData errorMessage={error} />
            ) : (
                <div>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                </div>
            )}
        </div>
    );
};

export default TopArtist;
