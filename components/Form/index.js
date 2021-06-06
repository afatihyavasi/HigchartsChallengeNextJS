import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getTopArtists } from '../../store/actions/topArtistActions';
import { getTopTrucks } from '../../store/actions/topTracksActions';
import { setForm } from '../../store/actions/formActions';
import styles from './index.module.css';

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const INITIAL_COUNTRY = useSelector((state) => state.formReducer.country);
    const INITIAL_TOP_NUMBER = useSelector(
        (state) => state.formReducer.topNumber
    );

    useEffect(() => {
        dispatch(
            getTopArtists({
                country: INITIAL_COUNTRY,
                topNumber: INITIAL_TOP_NUMBER,
            })
        );
        dispatch(
            getTopTrucks({
                country: INITIAL_COUNTRY,
                topNumber: INITIAL_TOP_NUMBER,
            })
        );
    }, []);

    const onSubmit = (data) => {
        dispatch(getTopArtists(data));
        dispatch(getTopTrucks(data));
        dispatch(setForm(data));
    };
    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputContainer}>
                    <input
                        {...register('country', {
                            required: true,
                            minLength: 3,
                        })}
                        name="country"
                        type="text"
                        placeholder="Country name"
                        defaultValue={INITIAL_COUNTRY}
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
                        defaultValue={INITIAL_TOP_NUMBER}
                        placeholder="Top Number"
                    />
                </div>


                {errors.topNumber && 'numbers in 0-50'}
                <button type='submit' className={styles.button}>Submit</button>
            </form>
        </section>
    );
};

export default Form;
