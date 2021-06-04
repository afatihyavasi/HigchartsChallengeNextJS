import Loader from "react-loader-spinner";
const Spinner = () => {
    return (
        <div>
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={5000}
            />
        </div>
    );
};

export default Spinner;
