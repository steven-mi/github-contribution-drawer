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
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                            <div>
                                <h2 className="text-3xl font-extrabold text-gray-900">Contribution Drawer</h2>npm
                            </div>
                            <div className="mt-12 lg:mt-0 lg:col-span-2">
                                <dl className="space-y-12">
                                    <div>
                                        <Chart/>
                                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                                <a href="#"
                                                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 md:py-4 md:text-lg md:px-10"> Generate
                                                    Script</a>
                                            </div>
                                        </div>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
