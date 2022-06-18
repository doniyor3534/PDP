import React, { useState } from 'react';

const G60 = () => {
    const [g60] = useState([
        {
            id: 0,
            name: 'Doniyorbek Tursunov',
            ball: "100%"
        },
        {
            id: 1,
            name: 'Doniyorbek Tursunov2222',
            ball: "90%"
        },
        {
            id: 2,
            name: 'Doniyorbek Tursunov3333',
            ball: "80%"
        },
        {
            id: 3,
            name: 'Doniyorbek Tursunov4444',
            ball: "70%"
        },
        {
            id: 4,
            name: 'Doniyorbek Tursunov4444',
            ball: "70%"
        },
        {
            id: 5,
            name: 'Doniyorbek Tursunov4444',
            ball: "70%"
        },
        {
            id: 6,
            name: 'Doniyorbek Tursunov4444',
            ball: "70%"
        },
        {
            id: 7,
            name: 'Doniyorbek Tursunov4444',
            ball: "70%"
        },
        {
            id: 8,
            name: 'Doniyorbek Tursunov4444',
            ball: "70%"
        },
    ])
    return (
        <div className="meningguruhimtab"> 
        <h1>Mening guruhim G-60</h1>
            <table className='table table-darkgrey table-striped'>
                <thead>
                    <tr>
                        <th> №</th>
                        <th>Ism Familya</th>
                        <th> Test ball</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        g60.map((val, i) => (
                            <tr key={val.id}>
                                <th>{i +1}</th>
                                <td>{val.name}</td>
                                <td>{val.ball}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default G60;
