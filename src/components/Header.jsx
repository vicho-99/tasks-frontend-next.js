import { Layout, Menu, Flex, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Header } = Layout;
import { Avatar } from 'antd';
import Logo from './Logo';
import { Typography } from 'antd';

const { Title } = Typography;

export default function MyHeader() {
    return (


        <Header style={{ padding: 16, height: 50, borderBottom: '1px solid rgb(230,230,230)', background: 'white', position: 'fixed', top: 0, width: '100%', zIndex: 1 }}   >

            <Flex style={boxStyle} justify='space-between' align='center'  >


                <Logo height={32} width={32} />


                <Title style={{ margin: 0 }} level={4}>Tasks app</Title>


                <Avatar icon={<UserOutlined />} />


            </Flex>
        </Header>
    )
}

const boxStyle = {

    height: '100%',

};