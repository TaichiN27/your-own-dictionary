import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Title } from '@/Components/title';
import { Form } from '@/Components/forms';
import { List } from '@/Components/list';
import { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react';

const Show = (props) => {
    const { vocabulary } = props; // 追加
    const examples = JSON.parse(vocabulary.sentences);
    const pronunciations = JSON.parse(vocabulary.pronunciations);
    console.log(examples)

    console.log(vocabulary)
    console.log(pronunciations)
    
    const { flash } = usePage().props




    const handleDeletePost = (id) => {
        Inertia.delete(`/vocabularies/${id}`, {
            onBefore: () => confirm("Are you sure you want to delete this vocabulary??")
        })
    }
    
    function foundData() {
        alert(flash.message)
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
                        {flash.message && (foundData())}
                        <h2 className="text-5xl italic font-bold pl-8 pt-8">{ vocabulary.english }</h2>
                        <h2 className="text-5xl font-bold pl-8 pt-7">{ vocabulary.japanese }</h2>
                        <h2 className="text3xl font-bold">English Definitions</h2>
                    {examples.map((example) =>{
                        console.log(example.definitions)
                    return(
                        <div>
                                <p className="pl-8">{example.definitions}</p>
                        </div>   
                        )
                    } )}
                    
                    <h2 className="text3xl font-bold">Example sentenses</h2>
                    
                    {examples[0].examples.map((example) =>{
                        console.log(example.text)
                    return(
                        <div>
                                <p className="pl-8">{example.text}</p>
                        </div>   
                        )
                    } )}
                    <h2 className="text3xl font-bold">Pronunciations</h2>
                                <audio controls src= {pronunciations[0].audioFile}></audio>  
                                <p>{pronunciations[0].phoneticSpelling}</p>
                    
                    <h2 className="text3xl font-bold">Synonyms</h2>
                    {examples[0].synonyms.map((synonym) =>{
                        console.log(synonym.text)
                    return(
                        <div>
                                <p className="pl-8">{synonym.text}</p>
                        </div>   
                        )
                    } )}
                    
                    <button className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md" onClick={() => handleDeletePost(vocabulary.id)}>delete</button>
                    
                        <Link href={'/'} >Home</Link>
                </div>
              </div>
            </div>            
        </Authenticated>
    );
}

export default Show;
