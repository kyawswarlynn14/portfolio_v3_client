'use client';

import CustomTable from '@/components/layouts/CustomTable';
import Loader from '@/components/loaders/Loader'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import DeleteTable from '@/components/layouts/DeleteTable';
import toast from 'react-hot-toast';
import { useDeleteMessageMutation, useGetAllMessagesQuery } from '@/store/message/messageApi';
import MessageDetail from './MessageDetail';

function Messages() {
  const { messages } = useSelector(state => state.message);
  const { isLoading, refetch } = useGetAllMessagesQuery();
  const [deleteMessage, {isLoading: deleting, isSuccess, error}] = useDeleteMessageMutation();

  useEffect(() => {
		if (isSuccess) {
			toast.success("Deleted successfully!");
			refetch();
		}
		if (error) {
			let errorMessage = error?.data?.message ?? error?.error;
			toast.error(errorMessage ?? "Something went wrong!");
			console.log("delete message err -->", error);
		}
	}, [isSuccess, error]);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "no", headerName: "No", flex: 0.1 },
    { field: "name", headerName: "Name", flex: 0.3 },
    { field: "email", headerName: "Email", flex: 0.4 },
    { field: "company_name", headerName: "Company Name", flex: 0.3 },
    {
      field: "detail",
      headerName: "Detail",
      flex: 0.2,
      renderCell: (params) => {
        return (
          <MessageDetail 
            message={messages.find(i => i._id === params?.row.id)}
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
            deleteHandler={() => deleteMessage(params?.row?.id)}
            isLoading={deleting}
          />
        )
      },
    },
  ];

  const rows = [];
  {
    messages?.length > 0 &&
      messages.forEach((item, index) => {
        rows.push({
          id: item?._id,
          no: index + 1,
          name: item?.name,
          email: item?.email,
          company_name: item?.company_name,
        });
      });
  }

  return (
    <div className='w-full h-full p-4 '>
      <div className='flex justify-between items-center my-4'>
        <div className='flex items-end gap-1'>
          <h1 className='font-semibold text-4xl tracking-wider'>Messages</h1>
          <span className='py-1 px-3 text-sm font-bold text-gray-500 border border-gray-800 rounded-full'>{messages?.length ?? '0'}</span>
        </div>
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

export default Messages;