const Artist = ({ data }) => {
    console.log(data);
    return <div></div>;
};

export async function getServerSideProps(context) {
    const { slug } = context.query;
    const res = await fetch(
        `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${slug.replace(
            '-',
            ' '
        )}`
    );

    const data = await res.json();
    return { props: { data } };
}
export default Artist;
