import Loader from 'react-loader-spinner';
const Spinner = () => {
    return (
        <div className={'flex justify-center content-center h-96'}>
            <Loader
                type="Ball"
                color="#000000"
                height={50}
                width={50}
                timeout={5000}
            />
        </div>
    );
};

export default Spinner;
