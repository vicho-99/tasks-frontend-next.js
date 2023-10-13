'use client'

import { LoadingContext } from "../context/loading";

export default function useLoading() {

    const { loading, setLoading } = LoadingContext();

    function showLoading() {
        setLoading(true)
    }

    function hideLoading() {
        setLoading(false)
    }

    return {
        loading,
        showLoading,
        hideLoading
    }
}