import {useSelector} from 'react-redux'
import Spinner from '../Spinner'

const TopTracks = () => {
    const isLoading = useSelector(state => state.topTracksReducer.isLoading);
    const data = useSelector(state=> state.topTracksReducer?.data);

    return (
        <div>
            {isLoading ? (
                <Spinner/>
            ) : (
                data.map((item) => <h5>{item.name}</h5>)
            )}
        </div>
    );
}

export default TopTracks
