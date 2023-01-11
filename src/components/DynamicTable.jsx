import React, { useState } from 'react';
import TableRows from "./TableRows"
import Sum from './Sum';

function DynamicTable(){
    const [rowsData, setRowsData] = useState([]);
 
    const addTableRows = ()=>{
        const rowsInput={
            itemName:'',
            cost:'',
            date:'',
            category:''
        } 
        setRowsData([...rowsData, rowsInput])
    }

    const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
    }
 
    const handleChange = (index, evnt)=>{
        const { name, value } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[index][name] = value;
        setRowsData(rowsInput);
        // if (name === "cost") {
        //     console.log(value);
        //     sum += parseFloat(value);
        //     console.log("sum", sum);
        // }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-8">

                <table className="table">
                    <thead>
                      <tr>
                          <th>Item</th>
                          <th>Cost</th>
                          <th>Date</th>
                          <th>Category</th>
                          <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                      </tr>
                    </thead>
                    <tbody>
                        <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                   </tbody> 
                </table>
                </div>
                    <div className="col-sm-4">
                </div>
                <div>
                    <Sum rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                </div>
            </div>
        </div>
    )

}
export default DynamicTable