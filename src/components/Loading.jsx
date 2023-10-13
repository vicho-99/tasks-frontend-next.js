import useLoading from "../hooks/useLoading"
import { Space, Spin } from 'antd';

export default function Loading() {

    const { loading } = useLoading();

    return (
        <dialog open={loading} className="dialog-loading">
            <Space size="large">
                <span>Loading....</span>
                <Spin />
            </Space>

        </dialog>
    )
}