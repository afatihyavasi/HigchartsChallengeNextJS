import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import styles from './index.module.css';
const Artist = ({ data }) => {
    return (
        <Layout>
            {data.artists ? (
                data.artists[0].strArtist === 'Tarkan' ? (
                    <Link href={'https://youtu.be/AsL8sViwGgo?t=84'}>
                        <a className={styles.aacayipsin}>
                            Ah yanar döner aacayipsin &#8594;
                        </a>
                    </Link>
                ) : (
                    <>
                        <Header title={data.artists[0].strArtist} />
                        <figure className={styles.image}>
                            <Image
                                src={data.artists[0].strArtistThumb}
                                alt={`${data.artists[0].strArtistThumb} thumb`}
                                width={600}
                                height={400}
                                objectFit={'fill'}
                                className={'rounded-md'}
                            />
                        </figure>
                        <section>
                            <p className={styles.biography}>
                                {data.artists[0].strBiographyEN}
                            </p>
                        </section>
                    </>
                )
            ) : (
                <div>Nothing here ...</div>
            )}
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const { slug } = context.query;
    const res = await fetch(
        `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${slug.replace(
            /-/g,
            '%20'
        )}`
    );
    const data = await res.json();
    return { props: { data } };
}
export default Artist;
