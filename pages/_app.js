import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/NavBar';
import useSystemTheme from 'react-use-system-theme';


function MyApp({ Component, pageProps }) {
  const systemTheme = useSystemTheme();

  return (
    <div>
      <Head>
        <title>Taskily Website</title>
        <meta name="description" content="Organize Your Day!" />
        {
          systemTheme !== 'dark' && (
            <>
              <link rel="icon" href="/taskily-ico.svg" />
            </>
          )
        }
        {
          systemTheme === 'dark' && (
            <>
              <link rel="icon" href="/taskily-ico-dark.svg" />
            </>
          )
        }
      </Head>
      <Nav names={['New Task', 'All Tasks', 'Clear All Tasks']} links={['/new', '/all', '/clear']}></Nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
