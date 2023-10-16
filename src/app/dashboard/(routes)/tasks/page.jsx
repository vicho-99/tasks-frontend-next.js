/* import MyCalendar from "@/src/components/Calendar" */
'use client'

import React from 'react';
import { Button, Tabs } from 'antd';
import TableList from '@/src/components/List';
import useTask from '@/src/hooks/useTask';
const onChange = (key) => {
    console.log(key);
};



export default function Tasks() {

    const { tasks } = useTask();


    const items = [
        {
            key: '1',
            label: 'Home',
            children: <TableList data={tasks} />,
        },
        {
            key: '2',
            label: 'Calendar',
            children: 'Content of Tab Pane 2',
        },
    ];



    return (


        <Tabs style={{ height: '100%', overflow: 'auto' }} defaultActiveKey="1" items={items} onChange={onChange} tabBarExtraContent={{
            right: <Button size='small' type="primary">NEW TASK</Button>
        }} />
    )
}


