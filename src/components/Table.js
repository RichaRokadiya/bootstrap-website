import React from "react";
// import axios from "axios";

const Table = (props) => {
    return (
        <table class="table">
            <tbody>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.email}</td>
                    <td>{props.status}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;