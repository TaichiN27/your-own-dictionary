import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Title } from '@/Components/title';
import { Form } from '@/Components/forms';
import { List } from '@/Components/list';
import { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';

const Show = (props) => {
    const { vocabulary } = props; // 追加
    const examples = JSON.parse(vocabulary.sentences);
    console.log(examples)

    
    
    
    const handleDeletePost = (id) => {
    Inertia.delete(`/vocabularies/${id}`, {
        onBefore: () => confirm("Are you sure you want to delete this vocabulary??")
    })
    }
    
    
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>

            <div className="App">
              <div className="container bg-light mt-5">
                <div >
                    <h2 className="text-5xl italic font-bold pl-8 pt-8">{ vocabulary.english }</h2>
                    <h2 className="text-5xl font-bold pl-8 pt-7">{ vocabulary.japanese }</h2>
                    <h3 className="pl-8">{ examples[0].examples[0].text }</h3>
                    <audio controls src= "https://audio.oxforddictionaries.com/en/mp3/apple__gb_1.mp3"></audio>
                    <p></p>
                    
                    <button className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md" onClick={() => handleDeletePost(vocabulary.id)}>delete</button>
                    
                        <Link href={'/'} >Home</Link>
                </div>
              </div>
            </div>            
        </Authenticated>
        );
}

export default Show;