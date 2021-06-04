import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getTopArtists } from '../../store/actions/topArtistActions';
import {getTopTrucks} from '../../store/actions/topTracksActions'

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopArtists({ country: 'Turkey', topNumber: '10' }));
        dispatch(getTopTrucks({ country: 'Turkey', topNumber: '10' }));
    }, []);

    const onSubmit = (data) => {
        dispatch(getTopArtists(data));
        dispatch(getTopTrucks(data))
    };
    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('country', {
                        required: true,
                        minLength: 3,
                    })}
                    name="country"
                    type="text"
                    placeholder="Country name"
                    defaultValue={'Turkey'}
                    className={'input'}
                />

                <input
                    {...register('topNumber', {
                        required: true,
                        min: 1,
                        max: 50,
                    })}
                    name="topNumber"
                    className={'input'}
                    type="number"
                    defaultValue={10}
                    placeholder="Top Number"
                />

                {errors.topNumber && 'numbers in 0-50'}
                <input type="submit" />
            </form>
        </section>
    );
};

export default Form;
