import React from 'react'
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-react';



export const List = ({ vocabularies }) => {
    const tableBorder = {
       borderCollapse: "collapse", /* テーブルの罫線を重ねて1本に見せる */
       border: "2px solid green"   /* テーブルの外側の枠線(2pxで緑色の実線) */
    }
    /* ▼セル共通の装飾 */
    const insideTable = {
       border: "1px solid green"  /* テーブルの内側の罫線(1pxで緑色の実線) */
    }
    /* ▼見出しセルの装飾 */
    const boxColor = {
       backgroundColor: "#ccffcc",  /* 背景色(淡い緑色) */
       padding: "0.3em"             /* 内側の余白(0.3文字分) */
    }
    /* ▼リンクの上にマウスが載った際の装飾(背景色だけ指定) */
    const hover = { BackgroundColor: "#fcfcaa" }
    
    
    const links = {
           display: "block",       /* リンクをブロックレベル化して表示 */
           padding: "0.6em 1em"   /* 内側の余白量を上下に0.6文字分＆左右に1文字分にする */
        }
    //let d = new Date(Date.parse(list.created));

    //let f = d.getMonth() + "/" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes();
    

    console.log(vocabularies)
    return (
        <div className="list bg-white my-5">
            <table className="table" style={tableBorder}>
                <thead className="table-dark">
                    <tr>
                        <th scope="col-2">No.</th>
                        <th scope="col-4">English</th>
                        <th scope="col-6">Japanese</th>
                        <th scope="col-8">Time</th>
                    </tr>
                </thead>
                    <tbody>
                        {vocabularies.map((vocabulary) =>
                                <tr key={vocabulary.id}>
                                 <th scope="row" style={insideTable,boxColor}>{vocabulary.id}</th>
                                    <td style={insideTable}><Link href={`/vocabularies/${vocabulary.id}`} style={hover,links}>{vocabulary.english}</Link></td>
                                    <td style={insideTable}><Link href={`/vocabularies/${vocabulary.id}`} style={hover, links}>{vocabulary.japanese}</Link></td>
                                    <td style={insideTable}><Link href={`/vocabularies/${vocabulary.id}`} style={hover, links}>{vocabulary.created_at}</Link></td>
                                </tr>
                            )}
                    </tbody>
            </table>
        </div>
    )
}