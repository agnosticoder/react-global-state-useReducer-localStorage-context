/* eslint-disable react/jsx-props-no-spreading */
import '../styles/styles.scss';
import Layout from '../components/Layout';
import { ThemeProvider } from '../components/store/store';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            {/* eslint-disable-next-line react/jsx-boolean-value */}
            <ThemeProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </div>
    );
}

export default MyApp;
