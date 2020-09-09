import React from 'react';

var Theader = (props) => {
    return (
        <thead>
            <tr><th>name</th>
                <th>job</th></tr>

        </thead>
    )
}

var Tbody = (props) => {
    const arr = props.characterData.map((data, index) => {
        return (
            <tr key={index}>
                <td>{data.name}</td>
                <td>{data.job}</td>
                <td>
                    <button onClick = {() => props.removeData(index)}>delete</button>
                </td>
            </tr>)
    })
    return (
        <tbody>
            {arr}
        </tbody>
    )
}

var Table  = (props) => {
        const { character } = props

        return (
            <table>
                <Theader />
                <Tbody characterData={character} removeData = {props.removeData}/>
            </table>
        )
}



export default Table