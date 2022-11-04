import React from 'react'
import { useState } from 'react'
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

export const Form = ({auth}) => {


    const {data, setData, post} = useForm({
                english: "",
                japanese: "",
                user_id: auth.user.id
    })




    const SubmitHandle = (e) => {
        e.preventDefault();
        console.log(data)
        post("/vocabularies");
        var textForm1 = document.getElementById("form1");
        textForm1.value = '';
        var textForm2 = document.getElementById("form2");
        textForm2.value = '';
        console.log(data)

    }


    return (
        <div>
            <h1 className="fs-3 text-center">What's your new vocabulary?</h1>
            <form onSubmit={SubmitHandle}>
                <div className="form-group row">
                    English<input type="text" className="form-control-sm col mx-2" onChange={(e)=>setData("english", e.target.value.toLowerCase())} id="form1" required />→
                    {auth.user.nationality}<input type="text" className="form-control-sm col mx-2" onChange={(e)=>setData("japanese", e.target.value)} id="form2" required />
                    <button type="submit" className="btn btn-primary btn-sm col-2" >Add</button>
                </div>

            </form>
        </div>
    )
}
