'use client'

import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';
import Logo from '@/src/components/Logo';
import { Tabs } from 'antd';

export default function Login() {

    const items = [
        {
            key: '1',
            label: 'LOGIN',
            children: <FormSignIn />,
        },
        {
            key: '2',
            label: 'REGISTER',
            children: <FormSignUp />,
        },
    ];

    return (

        <div style={styles.mainContainer}>

            <div
                className='container'
                style={styles.formCenter}>

                <div>

                    <div style={styles.headerAuth} >

                        <Logo
                            height={65}
                            width={65}
                        />

                        <h2>TASK APP</h2>

                    </div>

                    <div style={styles.formBox} >

                        <Tabs
                            centered
                            size='large'
                            defaultActiveKey="1"
                            items={items}
                        />

                    </div>

                </div>

            </div>

        </div>

    )
}

const styles = {
    mainContainer: {
        background: 'rgb(245,245,245)',
        height: '100%',
        display: 'flex'
    },
    formCenter: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerAuth: {
        display: 'flex',
        marginBottom: 24,
        gap: 16,
        justifyContent: 'center'
    },
    formBox: {
        background: 'white',
        maxWidth: 420,
        padding: 32,
        borderRadius: 8
    }
}