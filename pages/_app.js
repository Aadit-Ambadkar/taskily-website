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
      <Nav names={['Home', 'New Task', 'All Tasks']} links={['/', '/new', '/all']}></Nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
