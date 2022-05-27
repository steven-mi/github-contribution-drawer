import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {getArray} from "./utils";
import Chart from "../components/chart";
import GettingStarted from "../components/getting_started";

const Home: NextPage = () => {
    return (
        <div>
            <GettingStarted/>
            <Chart/>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#"
                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 md:py-4 md:text-lg md:px-10"> Generate
                        Script</a>
                </div>
            </div>
        </div>
    )
}

export default Home
