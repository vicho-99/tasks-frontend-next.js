'use client'

import {
    Layout
} from 'antd';

const {
    Content
} = Layout;

import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer'

export default function DashboardLayout({ children }) {

    return (

        <Layout style={styles.layout} >

            <Header />

            <Content
                style={styles.content}
            >{children}</Content>

            <Footer />

        </Layout>

    )
}

const styles = {
    content: {
        padding: 16,
        marginTop: 38,
        height: '100%',
        background: 'white'
    },
    layout: {
        height: '100%'
    },

}