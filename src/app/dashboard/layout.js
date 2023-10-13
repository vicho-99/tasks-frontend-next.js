'use client'

import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

export default function DashboardLayout({ children }) {

    return (

        <Layout style={{ height: '100%' }} >

            <Header>Header</Header>

            <Content>{children}</Content>

            <Footer>Footer</Footer>

        </Layout>

    )
}
