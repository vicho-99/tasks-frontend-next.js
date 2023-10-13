'use client'

import Loading from "./Loading"

export default function Main({ children }) {

    return (

        <main style={{ height: '100%' }} >

            <Loading />

            {children}

        </main>



    )
}