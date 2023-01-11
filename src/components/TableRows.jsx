function TableRows({rowsData, deleteTableRows, handleChange}) {

    return(
        rowsData.map((data, index)=>{
            const {itemName, cost, date, category}= data;
            return(
                <tr key={index}>
                <td>
                    <input type="text" value={itemName} onChange={(evnt)=>(handleChange(index, evnt))} name="itemName" className="form-control"/>
                </td>
                <td>
                    <input type="text" value={cost}  onChange={(evnt)=>(handleChange(index, evnt))} name="cost" className="form-control"/> 
                </td>
                <td>
                    <input type="text" value={date}  onChange={(evnt)=>(handleChange(index, evnt))} name="date" className="form-control" /> 
                </td>
                <td>
                    <select value={category} onChange={(evnt)=>(handleChange(index, evnt))} name="category" className="form-select w-auto" >
                        <option value="None">None</option>
                        <option value="Food">Food</option>
                        <option value="Transport">Transportation</option>
                        <option value="Shopping">Shopping</option>
                    </select>
                </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>
            )
        })
    )
}

export default TableRows;