import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Title } from '@/Components/title';
import { Form } from '@/Components/forms';
import { List } from '@/Components/list';
import { useState } from 'react'

const Show = (props) => {
    const { vocabulary } = props; // 追加
    console.log(props)
    
    
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>

            <div className="App">
              <div className="container bg-light mt-5">
                <div className="alert alert-primary pb-0">
                    <h2>{ vocabulary.english }</h2>
                </div>
              </div>
            </div>            
        </Authenticated>
        );
}

export default Show;