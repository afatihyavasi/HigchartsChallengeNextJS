import styles from './index.module.css';
const NoData = ({ errorMessage }) => {
    return (
        <div className={styles.noData}>
            <h2 className={styles.text}>{errorMessage}</h2>
        </div>
    );
};

export default NoData;
