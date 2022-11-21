import { useState } from 'react';

export default function About({ res }) {
    return (
        <div>
            <ul>
                {
                    res.map(r => (
                        <li key={r.id} className="bg-slate-300 mb-2 text-center" >{r.name}</li>
                    ))
                }

            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    let res = await data.json();
    return {
        props: { res }
    }
}