import { useSelector } from 'react-redux';
import Spinner from '../Spinner'

const TopArtist = () => {
    const isLoading = useSelector((state) => state.topArtistReducer.isLoading);
    const data = useSelector((state) => state.topArtistReducer?.data);

    return (
        <div>
            {isLoading ? (
                <Spinner/>
            ) : (
                data.map((item) => <h5>{item.name}</h5>)
            )}
        </div>
    );
};

export default TopArtist;
