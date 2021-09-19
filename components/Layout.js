import Head from 'next/head';
import Link from 'next/link';
import { useTheme, useDispatchTheme } from './store/store';
import styles from '../styles/modules/DarkMode.module.scss';

const Layout = ({ children }) => {
    const theme = useTheme();
    console.log({ theme });
    const dispatchTheme = useDispatchTheme();

    // const headerDark = theme.dark ? styles['header-dark'] : '';
    // const bodyDark = theme.dark ? styles['body-dark'] : '';

    const headerDark = theme.dark ? 'header-dark' : '';
    const bodyDark = theme.dark ? 'body-dark' : '';

    return (
        <div className={`body-div ${bodyDark}`}>
            <Head>
                <title>App Title will go here</title>
            </Head>
            <div className={`header ${headerDark}`}>
                <div className="nav-container">
                    <ul className="nav">
                        <li>
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/playground">
                                <a className="nav-link">Playground</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <h1>App Name</h1>
            </div>
            <button onClick={() => dispatchTheme({ type: 'toggle' })} type="button">
                Toggle Theme
            </button>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
