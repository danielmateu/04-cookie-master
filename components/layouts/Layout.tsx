

import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../ui"


export const Layout:FC = ({ children }) => {
    return (
        <>
            <Head>

            </Head>

            <nav>
                <Navbar/>
            </nav>

            <main style={{ padding: '2em 2em' }}>
                {children}
            </main>
        </>
    )
}