'use client';

import CustomTable from '@/components/layouts/CustomTable';
import Loader from '@/components/loaders/Loader'
import { useDeleteServiceMutation, useGetAllServicesQuery } from '@/store/service/serviceApi'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ServiceForm from './ServiceForm';
import DeleteTable from '@/components/layouts/DeleteTable';
import toast from 'react-hot-toast';

function Services() {
  const { services } = useSelector(state => state.service);
  const { isLoading, refetch } = useGetAllServicesQuery();
  const [deleteService, {isLoading: deleting, isSuccess, error}] = useDeleteServiceMutation();

  useEffect(() => {
		if (isSuccess) {
			toast.success("Deleted successfully!");
			refetch();
		}
		if (error) {
			let errorMessage = error?.data?.message ?? error?.error;
			toast.error(errorMessage ?? "Something went wrong!");
			console.log("delete service err -->", error);
		}
	}, [isSuccess, error]);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "no", headerName: "No", flex: 0.1 },
    { field: "title", headerName: "Title", flex: 0.3 },
    { field: "content", headerName: "Content", flex: 0.5 },
    {
      field: "image",
      headerName: "Image",
      flex: 0.3,
      renderCell: (params) => {
        return (
          <img src={params?.row?.image} alt="service photo" className='w-auto h-32 py-2' />
        )
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      flex: 0.2,
      renderCell: (params) => {
        return (
          <ServiceForm 
            refetchFunc={refetch}
            isUpdate={true} 
            itemToUpdate={services.find(i => i._id === params?.row.id)}
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
            deleteHandler={() => deleteService(params?.row?.id)}
            isLoading={deleting}
          />
        )
      },
    },
  ];

  const rows = [];
  {
    services?.length > 0 &&
      services.forEach((item, index) => {
        rows.push({
          id: item?._id,
          no: index + 1,
          title: item?.title,
          content: item?.content,
          image: item?.image,
        });
      });
  }

  return (
    <div className='w-full h-full p-4 '>
      <div className='flex justify-between items-center my-4'>
        <div className='flex items-end gap-1'>
          <h1 className='font-semibold text-4xl tracking-wider'>Services</h1>
          <span className='py-1 px-3 text-sm font-bold text-gray-500 border border-gray-800 rounded-full'>{services?.length ?? '0'}</span>
        </div>
        
        <ServiceForm refetchFunc={refetch} isUpdate={false} />
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

export default Services