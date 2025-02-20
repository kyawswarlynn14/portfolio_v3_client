'use client';

import CustomTable from '@/components/layouts/CustomTable';
import Loader from '@/components/loaders/Loader'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DeleteTable from '@/components/layouts/DeleteTable';
import toast from 'react-hot-toast';
import { useDeleteVisitorLogMutation, useGetAllVisitorLogsQuery } from '@/store/visitorLog/visitorLogApi';
import VisitorDetail from './VisitorDetail';
import { formatYangonTime } from '@/utils/services';

function Visitors() {
    const { aboutMe } = useSelector(state => state.layout);
    const [visitors, setVisitors] = useState([]);
    const { isLoading, refetch, data, isSuccess, error } = useGetAllVisitorLogsQuery();
    const [deleteVisitorLog, { isLoading: deleting, isSuccess: deleteSuccess, error: deleteError }] = useDeleteVisitorLogMutation();

    useEffect(() => {
        if(isSuccess && data) {
            setVisitors(data?.data);
        }
        if(!isSuccess && error) {
            let errorMessage = error?.data?.message || error?.error;
            toast.error(errorMessage || "Something went wrong!")
        }
    }, [data, isSuccess, error]);

    useEffect(() => {
        if (deleteSuccess) {
            toast.success("Deleted successfully!");
            refetch();
        }
        if (deleteError) {
            let deleteErrorMessage = deleteError?.data?.message ?? deleteError?.error;
            toast.error(deleteErrorMessage ?? "Something went wrong!");
            console.log("delete message err -->", error);
        }
    }, [deleteSuccess, deleteError]);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "no", headerName: "No", flex: 0.1 },
        { field: "date", headerName: "Date", flex: 0.4 },
        { field: "device", headerName: "Device", flex: 0.3 },
        { field: "os", headerName: "OS", flex: 0.3 },
        { field: "browser", headerName: "Browser", flex: 0.4 },
        {
            field: "detail",
            headerName: "Detail",
            flex: 0.2,
            renderCell: (params) => {
                return (
                    <VisitorDetail
                        visitor={visitors.find(i => i._id === params?.row.id)}
                    />
                )
            },
        },
        {
            field: "delete",
            headerName: "Delete",
            flex: 0.2,
            renderCell: (params) => {
                return (
                    <DeleteTable
                        message={"Are you sure to delete this?"}
                        deleteHandler={() => deleteVisitorLog(params?.row?.id)}
                        isLoading={deleting}
                    />
                )
            },
        },
    ];

    const rows = [];
    {
        visitors?.length > 0 &&
            visitors.forEach((item, index) => {
                rows.push({
                    id: item?._id,
                    no: index + 1,
                    date: formatYangonTime(item?.timestamp),
                    device: item?.device,
                    os: item?.os,
                    browser: item?.browser,
                });
            });
    }

    return (
        <div className='w-full h-full p-4 '>
            <div className='flex justify-between items-center my-4'>
                <div className='flex items-end gap-1'>
                    <h1 className='font-semibold text-4xl tracking-wider'>Visitors</h1>
                    <span className='py-1 px-3 text-sm font-bold text-gray-500 border border-gray-800 rounded-full'>{visitors?.length ?? '0'}</span>
                </div>
                <p className='font-semibold'>Total Views - {aboutMe?.view_count}</p>
            </div>

            {isLoading ? (
                <Loader fullScreen={false} />
            ) : (
                <CustomTable
                    initialState={{
                        columns: {
                            columnVisibilityModel: {
                                id: false,
                            },
                        },
                    }}
                    columns={columns}
                    rows={rows}
                />
            )}
        </div>
    )
}

export default Visitors;