import React from 'react'
import { useState } from 'react'
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

export const Form = () => {
    
    const {data, setData, post} = useForm({
                english: "",
                japanese: "",
    })




    const SubmitHandle = (e) => {
        e.preventDefault();
        console.log(data)
        post("/vocabularies");

    }
    

    return (
        <div>
            <h1 className="fs-3 text-center">What's your new vocabulary?</h1>
            <form onSubmit={SubmitHandle}>
                <div className="form-group row">
                    English<input type="text" className="form-control-sm col mx-2" onChange={(e)=>setData("english", e.target.value)} required />
                    Japanese<input type="text" className="form-control-sm col mx-2" onChange={(e)=>setData("japanese", e.target.value)} required />
                    <button type="submit" className="btn btn-primary btn-sm col-2" >Add</button>
                </div>

            </form>
        </div>
    )
}