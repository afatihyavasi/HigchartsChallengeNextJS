import { Provider } from 'react-redux';
import store from '../store/store';

import '../styles/globals.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
