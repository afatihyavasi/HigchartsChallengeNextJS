import styles from './index.module.css';
const Header = ({ title }) => {
    return (
        <header>
            <h1 className={styles.header}>{title}</h1>
        </header>
    );
};

export default Header;
