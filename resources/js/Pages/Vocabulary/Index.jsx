import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Index = (props) => {
    const { vocabularies } = props; // 追加
    console.log(props); // 確認用に追加   
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>
            
            <div className="p-12 bg-primary">
                <h1>Blog Name</h1>
                {vocabularies.map((vocabulary)=> (
                    <div id={vocabulary.id}>
                        <h2>{ vocabulary.id }</h2>
                        <h2>{ vocabulary.english }</h2>
                        <p>{ vocabulary.japanese }</p>
                    </div>
                ))}
            </div>
            
        </Authenticated>
        );
}

export default Index;