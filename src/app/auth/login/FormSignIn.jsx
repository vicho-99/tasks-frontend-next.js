import { Button, Checkbox, Input } from 'antd';
import { Col, Row } from 'antd';
import MailOutlined from '@ant-design/icons/MailOutlined'
import LockOutlined from '@ant-design/icons/LockOutlined'
import { onChangeInputValue } from '@/src/utils/onChange';
import useSignIn from '@/src/hooks/useSignIn';

const { Password } = Input;

export default function FormSignIn() {

    const {
        form,
        setForm,
        submitSignIn
    } = useSignIn()

    return (

        <form onSubmit={submitSignIn} >

            <Row gutter={[0, 24]}  >

                <Col span={24}>

                    <Input
                        placeholder='Email'
                        onChange={(event) => onChangeInputValue({ event, form, setForm })}
                        value={form.email}
                        name='email'
                        type='email'
                        size='large'
                        prefix={<MailOutlined />}
                        required
                    />

                </Col>

                <Col span={24}>

                    <Password
                        value={form.password}
                        onChange={(event) => onChangeInputValue({ event, form, setForm })}
                        placeholder='Password'
                        size='large'
                        name="password"
                        prefix={<LockOutlined />}
                        required
                    />

                </Col>

                <Col span={24}>
                    <Checkbox>
                        Remember me
                    </Checkbox>
                </Col>

                <Col span={24}>

                    <Button
                        block
                        type="primary"
                        size='large'
                        htmlType="submit">
                        Sign In
                    </Button>

                </Col>

            </Row>

        </form>

    )

}