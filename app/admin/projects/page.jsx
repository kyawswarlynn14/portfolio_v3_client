'use client';

import CustomTable from '@/components/layouts/CustomTable';
import Loader from '@/components/loaders/Loader'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import DeleteTable from '@/components/layouts/DeleteTable';
import toast from 'react-hot-toast';
import { useDeleteProjectMutation, useGetAllProjectsQuery } from '@/store/project/projectApi';
import ProjectForm from './ProjectForm';

function Projects() {
  const { projects } = useSelector(state => state.project);
  const { isLoading, refetch } = useGetAllProjectsQuery();
  const [deleteProject, {isLoading: deleting, isSuccess, error}] = useDeleteProjectMutation();

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
    { field: "description", headerName: "Description", flex: 0.4 },
    { field: "role", headerName: "Role", flex: 0.4 },
    { field: "demo_link", headerName: "Demo Link", flex: 0.3 },
    { field: "code_link", headerName: "Code Link", flex: 0.3 },
    { field: "tag", headerName: "Tag", flex: 0.3 },
    {
      field: "image",
      headerName: "Image",
      flex: 0.3,
      renderCell: (params) => {
        return (
          <img src={params?.row?.image} alt="certificate photo" className='w-auto h-32 py-2' />
        )
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      flex: 0.2,
      renderCell: (params) => {
        return (
          <ProjectForm 
            refetchFunc={refetch}
            isUpdate={true} 
            itemToUpdate={projects.find(i => i._id === params?.row.id)}
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
            deleteHandler={() => deleteProject(params?.row?.id)}
            isLoading={deleting}
          />
        )
      },
    },
  ];

  const rows = [];
  {
    projects?.length > 0 &&
      projects.forEach((item, index) => {
        rows.push({
          id: item?._id,
          no: index + 1,
          title: item?.title,
          description: item?.description,
          role: item?.role,
          tag: item?.tag,
          code_link: item?.code_link,
          demo_link: item?.demo_link,
          image: item?.image,
        });
      });
  }

  return (
    <div className='w-full h-full p-4 '>
      <div className='flex justify-between items-center my-4'>
        <div className='flex items-end gap-1'>
          <h1 className='font-semibold text-4xl tracking-wider'>Projects</h1>
          <span className='py-1 px-3 text-sm font-bold text-gray-500 border border-gray-800 rounded-full'>{projects?.length ?? '0'}</span>
        </div>
        
        <ProjectForm refetchFunc={refetch} isUpdate={false} />
      </div>

      {isLoading ? (
        <Loader fullScreen={false} />
      ) : (
        <CustomTable 
          initialState={{
            columns: {
              columnVisibilityModel: {
                id: false,
                description: false,
                role: false,
                tag: false,
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

export default Projects;