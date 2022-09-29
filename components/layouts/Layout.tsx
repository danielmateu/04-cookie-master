
import { FC } from "react"

import Head from "next/head"
import { Navbar } from "../ui"


/* Defining the props that the component will receive. */
interface Props { 
    children?:any
}

export const Layout:FC<Props> = ({ children }) => {
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