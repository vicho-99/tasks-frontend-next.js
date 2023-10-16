import React from 'react';
import { DownOutlined, EditOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';


const typeTag = {
    pending: 'warning',
    'in progress': 'processing',
    completed: 'success',
    cancelled: 'default',
}



const items = [
    {
        key: '1',
        label: 'pending',
    },
    {
        key: '2',
        label: 'In Progress', 
    },
    {
        key: '3',
        label: 'Completed',
      
    },
    {
        key: '4',
        label: 'Cancelled',
    },
];
export default function DropBoxEditStatus() {
    return (
        <Dropdown
            menu={{
                items,
            }}
        >
            <Button type="text" size='small' shape="circle" icon={<EditOutlined />} />


        </Dropdown>
    )
}
