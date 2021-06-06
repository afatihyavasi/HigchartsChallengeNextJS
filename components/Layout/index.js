import Head from 'next/head';
const Index = ({ children }) => {
    return (
        <>
            <Head>
                <title>Highchart Challenge</title>
            </Head>
            <div className="container mx-auto py-10 px-5 ">{children}</div>
        </>
    );
};

export default Index;
