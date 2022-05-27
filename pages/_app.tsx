import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from '../components/layout'
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function MyApp({Component, pageProps}: AppProps) {
    return <Layout>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
    </Layout>
}

export default MyApp
