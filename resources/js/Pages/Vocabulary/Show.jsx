import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { usePage } from '@inertiajs/inertia-react';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Show = (props) => {
    const { vocabulary } = props; // 追加
    const examples = JSON.parse(vocabulary.sentences);
    const pronunciations = JSON.parse(vocabulary.pronunciations);
    const lexicalCategory = JSON.parse(vocabulary.lexicalCategory)

    const { flash } = usePage().props




    const handleDeletePost = (id) => {
        Inertia.delete(`/vocabularies/${id}`, {
            onBefore: () => confirm("Are you sure you want to delete this vocabulary??")
        })
    }


    function handleHome() {
        window.location.replace('/')
    }

    function foundData() {
        alert(flash.message)
    }

    return (
        <div>
            <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>
                {flash.message && (foundData())}
                <h2 className="text-base font-semibold bg-amber-300 text-2xl pl-3">{lexicalCategory.text}</h2>
                <h2 className="text-5xl italic font-bold pl-8 pt-8">{vocabulary.english}</h2>
                <h2 className="text-5xl font-bold pl-8 pt-7">{vocabulary.japanese}</h2>
                <Accordion style={{ marginTop: "20px" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography style={{ fontSize: 30 }}>English Definitions</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {examples.map((example) => {
                                console.log(example.definitions)
                                return (
                                    <div>
                                        <p className="pl-8 text-lg">• {example.definitions}</p>
                                    </div>
                                )
                            })}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ fontSize: 30 }}>Example sentenses</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {("examples" in examples[0]) ?
                                examples[0].examples.map((example) => {
                                    return (
                                        <div>
                                            <p className="pl-8 text-lg">• {example.text}</p>
                                        </div>
                                    )
                                }) : <div></div>
                            }
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography style={{ fontSize: 30 }}>Pronunciations</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p className="text-lg">{pronunciations[0].phoneticSpelling}</p>
                            <audio controls src={pronunciations[0].audioFile}></audio>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography style={{ fontSize: 30 }}>Synonyms</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {("synonyms" in examples[0]) ?
                                examples[0].synonyms.map((synonym) => {
                                    return (
                                        <div>
                                            <p className="pl-8 text-lg">• {synonym.text}</p>
                                        </div>
                                    )
                                }) : <div></div>
                            }

                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <DeleteIcon data-testid="DeleteIcon" className="ml-8 mr-4 hover:bg-purple-400 cursor-pointer" fontSize="large" onClick={() => handleDeletePost(vocabulary.id)} />

                <HomeIcon className="m-4 hover:bg-purple-400 cursor-pointer" fontSize="large" onClick={handleHome} />
            </Authenticated>
        </div>
    );


}

export default Show;
