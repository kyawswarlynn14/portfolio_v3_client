"use client";

import { useUpdateLayoutMutation } from '@/store/layout/layoutApi';
import { setServiceInfo } from '@/store/layout/layoutSlice';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import InputWithLabel from '../layouts/InputWithLabel';
import TextareaWithLabel from '../layouts/TextareaWithLabel';

function ServiceInfo({ serviceInfo }) {
    const dispatch = useDispatch();
    const [values, setValues ] = useState({
        title: serviceInfo?.title,
        description: serviceInfo?.description,
    });
    const [updateLayout, {isLoading, isSuccess, error}] = useUpdateLayoutMutation();

    useEffect(() => {
        if(isSuccess) {
            toast.success("Updated successfully!");
            dispatch(setServiceInfo(values));
        }
        if(error) {
            toast.success(error.data?.message || "Update failed!");
            console.log("update service info err-->", error);
        }
    }, [isSuccess, error])

    const handleInput = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        await updateLayout({
            type: "service_info",
            data: values,
        })
    }

  return (
    <form id='service-info' onSubmit={handleSubmit} className='w-full px-8 py-4 border border-cyan-300 rounded-xl shadow-xl'>
        <h3 className='text-center text-lg font-medium'>Service Info</h3>

        <InputWithLabel 
            type="text"
            id="title"
            name="title"
            label="Title"
            required
            onChange={handleInput}
            value={values.title}
        />

        <TextareaWithLabel 
            type="text"
            id="description"
            name="description"
            label="Description"
            required
            onChange={handleInput}
            value={values.description}
        />

        <div className='w-full flex items-center justify-center my-2'>
            <button 
                type='submit' 
                disabled={isLoading}
                className='bg-cyan-300 py-2 px-4 font-semibold text-sm rounded-lg hover:scale-105'
            >
                {isLoading ? "Updating..." : "Update"}
            </button>
        </div>
    </form>
  )
}

export default ServiceInfo;