import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Title } from '@/Components/title';
import { Form } from '@/Components/forms';
import { List } from '@/Components/list';
import { useState } from 'react'

const Index = (props) => {
    const { vocabularies } = props; // 追加
    console.log(props); // 確認用に追加  
    
    
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>

            <div className="App">
              <Title />
              <div className="container my-5 bg-info fw-bold">
                <p className="fw-bold text-center">I often read books written in English and try to expand my knowledge of the book's content as well as understand the meanings of new words I encounter and how to improve my English. When I first started, I used to write down words on a piece of paper, but I always lost that paper somewhere. How useless, I thought. So next I used the note-taking function on my smartphone, but it was unorganized and difficult to use. So I created this site, which has the ability to write down unfamiliar words in a more organized environment.</p>
              </div>
              <div className="container bg-light mt-5">
                <div className="alert alert-primary pb-0">
                    <Form />
                    <List vocabularies={vocabularies}/>
                </div>
              </div>
            </div>            
        </Authenticated>
        );
}

export default Index;