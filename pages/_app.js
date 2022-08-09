import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Taskily Website</title>
        <meta name="description" content="Organize Your Day!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav names={['New Task', 'All Tasks', 'Clear All Tasks']} links={['/new', '/all', '/clear']}></Nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
