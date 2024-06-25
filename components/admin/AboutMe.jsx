"use client";
import React, { useEffect, useState } from 'react'
import InputWithLabel from '../layouts/InputWithLabel';
import { useUpdateLayoutMutation } from '@/store/layout/layoutApi';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setAboutMe } from '@/store/layout/layoutSlice';
import TextareaWithLabel from '../layouts/TextareaWithLabel';

function AboutMe({ aboutMe }) {
    const dispatch = useDispatch();
    const [values, setValues ] = useState({
        name: aboutMe?.name,
        description: aboutMe?.description,
        role: aboutMe?.role,
        github: aboutMe?.github,
        linkedIn: aboutMe?.linkedIn,
        facebook: aboutMe?.facebook,
        telegram: aboutMe?.telegram,
    });
    const [updateLayout, {isLoading, isSuccess, error}] = useUpdateLayoutMutation();

    useEffect(() => {
        if(isSuccess) {
            toast.success("Updated successfully!");
            dispatch(setAboutMe(values));
        }
        if(error) {
            toast.success(error.data?.message || "Update failed!");
            console.log("update about_me err-->", error);
        }
    }, [isSuccess, error])

    const handleInput = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        await updateLayout({
            type: "about_me",
            data: values,
        })
    }

  return (
    <form id='about-me' onSubmit={handleSubmit} className='w-full px-8 py-4 border border-cyan-300 rounded-xl shadow-xl'>
        <h3 className='text-center text-lg font-medium'>About Me</h3>

        <InputWithLabel 
            type="text"
            id="name"
            name="name"
            label="Name"
            required
            onChange={handleInput}
            value={values.name}
        />

        <InputWithLabel 
            type="text"
            id="role"
            name="role"
            label="Role"
            required
            onChange={handleInput}
            value={values.role}
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

        <InputWithLabel 
            type="text"
            id="github"
            name="github"
            label="Github"
            onChange={handleInput}
            value={values.github}
        />

        <InputWithLabel 
            type="text"
            id="linkedIn"
            name="linkedIn"
            label="LinkedIn"
            onChange={handleInput}
            value={values.linkedIn}
        />

        <InputWithLabel 
            type="text"
            id="facebook"
            name="facebook"
            label="Facebook"
            required
            onChange={handleInput}
            value={values.facebook}
        />

        <InputWithLabel 
            type="text"
            id="telegram"
            name="telegram"
            label="Telegram"
            required
            onChange={handleInput}
            value={values.telegram}
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

export default AboutMe