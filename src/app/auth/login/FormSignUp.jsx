import { Button , Input } from 'antd';
import { Col, Row } from 'antd';

import MailOutlined from '@ant-design/icons/MailOutlined'
import LockOutlined from '@ant-design/icons/LockOutlined'

export default function FormSignUp() {
    return (

        <Row gutter={[0, 24]}  >


            <Col span={24}>
                <Input placeholder='First name' size='large' required />
            </Col>


            <Col span={24}>
                <Input placeholder='Last name' size='large' required />
            </Col>


            <Col span={24}>
                <Input placeholder='Email' type='email' size='large' prefix={<MailOutlined />} required />
            </Col>

            <Col span={24}>
                <Input.Password placeholder='Password' size='large' prefix={<LockOutlined />} required />
            </Col>


            <Col span={24}>

                <Button block type="primary" size='large' htmlType="submit">
                    Sign In
                </Button>

            </Col>

        </Row>
    )

}