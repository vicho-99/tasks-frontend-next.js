'use client'

import {
    createContext,
    useContext,
    useState
} from "react";

const context = createContext()

export const TaskProvider = (props) => {

    const [tasks, setTasks] = useState([]);

    return (

        <context.Provider value={{
            tasks,
            setTasks
        }} {...props} />

    )
}

export function TaskContext() {
    const c = useContext(context);
    if (!c)
        throw new Error('Task Context')
    return c;
};
