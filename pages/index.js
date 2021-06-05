import Layout from '../components/Layout';
import Form from '../components/Form';
import TopArtist from '../components/TopArtist';
import TopTracks from '../components/TopTracks';
import Header from '../components/Header';

export default function Home() {
    return (
        <Layout>
            <Header title={'📈\u00A0\u00A0HIGHCHART CHALLENGE'} />
            <Form />
            <TopTracks />
            <TopArtist />

        </Layout>
    );
}

//TODO:Error handling for inputs (Style and func)
//TODO:No data found componenti tasarla
