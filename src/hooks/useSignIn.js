import { useState } from "react"
import { signIn } from "@/src/services/auth";
import errorHandling from "../utils/errorHandling";
import useLoading from "./useLoading";

export default function useSignIn() {

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const { showLoading, hideLoading } = useLoading();

    async function submitSignIn(event) {

        event.preventDefault();

        showLoading();

        try {
            await signIn({ form });
            window.location.href = "/dashboard/tasks"
        } catch (error) {
            errorHandling(error);
        }

        hideLoading();

    }

    return {
        form,
        setForm,
        submitSignIn
    }
}