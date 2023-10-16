'use client'

import { useEffect, useState } from "react";
import { TaskContext } from "../context/task";
import errorHandling from "../utils/errorHandling";
import { getTasks } from "../services/task";

export default function useTask() {

    const { tasks, setTasks } = TaskContext();

    const [form, setForm] = useState({
        name: '',
        description: '',
        dueData: '',
    });

    useEffect(() => {

        (async () => {

            try {

                const { data } = await getTasks();
                setTasks(data);

            } catch (error) {
                errorHandling(error)
            }

        })();

    }, [])

    async function createTask() {

    }

    return {
        tasks,
        setTasks,

    }
}