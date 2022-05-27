import Head from 'next/head'
import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return (
        <>
            <Head>
                <title>GitHub Contribution Drawer</title>
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}