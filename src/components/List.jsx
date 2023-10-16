import React, { useEffect, useState } from 'react';
import { Button, List, Skeleton, Tag, Select } from 'antd';
import { Badge, Space } from 'antd';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import DropBoxEditStatus from './DropBoxEditStatus';

const typeTag = {
    pending: 'warning',
    'in progress': 'processing',
    completed: 'success',
    cancelled: 'default',
}



export default function ItemList({
    data
}) {

    return (

        <List

            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
                <List.Item

                    actions={[<DropBoxEditStatus />, <Button type="text" danger size='small' shape="circle" icon={<DeleteOutlined />} />]}
                >

                    <List.Item.Meta

                        avatar={<Tag style={{ width: 72, textAlign: 'center' }} color={typeTag[item.status]}>{item.status}</Tag>}

                        title={

                            <Space direction="vertical" size={"small"} >

                                <span style={{ fontSize: 12, fontWeight: 400 }}  > {item.dueDate} - <strong>{item.name}</strong>  <br />
                                    <span style={{ fontWeight: 400, fontSize: 12 }} >{item.description}</span>
                                </span>

                            </Space>
                        }

                    />

                    {/*     <div>{item.description}</div> */}
                </List.Item>
            )}
        />
    );
};
