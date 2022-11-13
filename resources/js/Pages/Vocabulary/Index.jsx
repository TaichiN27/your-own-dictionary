import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Title } from '@/Components/title';
import { Form } from '@/Components/forms';
import { List } from '@/Components/list';
import { Link } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react';

const Index = (props) => {
    const { vocabularies } = props;

    console.log(props.auth)

    const { flash } = usePage().props

    function alerting() {
        alert(flash.message)
    }



    const paginationLinks =
        vocabularies.links.map((link) => {
            if (link.label == "&laquo; Previous") {
                return <Link href={link.url} className="text-base  text-center mx-3">Previous page</Link>
            } else if (link.label == "Next &raquo;") {
                return <Link href={link.url} className="text-base  text-center mx-3">Next page</Link>
            } else {
                return <Link href={link.url} className="text-lg  text-center mx-1">{link.label}</Link>
            }
        });


    return (
        <Authenticated auth={props.auth} header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight ">
                Index
            </h2>
        }>

            <div className="App bg-[#ff4500]">
                <Title />
                <div className="container my-5 fw-bold">
                    <p className="fw-bold text-center text-lg text-white">I often read books written in English and try to expand my knowledge of the book's content as well as understand the meanings of new words I encounter and how to improve my English. When I first started, I used to write down words on a piece of paper, but I always lost that paper somewhere. How useless, I thought. So next I used the note-taking function on my smartphone, but it was unorganized and difficult to use. So I created this site, which has the ability to write down unfamiliar words in a more organized environment.</p>
                </div>
                <div className="container bg-[#ff4500] mt-5">
                    <div className="alert alert-primary pb-0">
                        {flash.message && (alerting())}
                        <Form auth={props.auth} />
                        <List vocabularies={vocabularies} />
                    </div>
                </div>
                <div className='paginate text-center mb-3'>
                    {paginationLinks}
                </div>
            </div>
        </Authenticated>
    );
}

export default Index;
