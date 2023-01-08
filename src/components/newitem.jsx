import React, { Component } from 'react';

class Item extends Component {
    state = { 
        count: 0
    };

    handleIncrement = () => {
        console.log("Increment clicked", this);
    }

    render() { 
        return (
            <div>
                <h1>Hello, Yerim</h1>
                <form>
                    <label>Add a new item:</label>
                    <div className="row">
                        <div className="col-md-2">
                            {/* <label htmlFor="inputName">Item Name</label> */}
                            <input type="text" className="form-control" placeholder="ex. Groceries" />
                        </div>
                        <div className="col-md-2">
                            {/* <label htmlFor="inputCost">Cost</label> */}
                            <input type="text" className="form-control" placeholder="ex. 60.78" />
                        </div>
                        <div className="col-md-2">
                            {/* <label htmlFor="inputDate">Date</label> */}
                            <input type="text" className="form-control" placeholder="ex. 03/15/2023" />
                        </div>
                        <div className="col-md-2">
                            {/* <label htmlFor="selectCategory">Category</label> */}
                            <select className="form-select">
                                <option value="None">None</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Item;