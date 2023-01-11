import React, { Component } from 'react';

class NewItem extends Component {
    state = { 
        name: '',
        cost: '',
        date: '',
        category: ''
    };

    handleAddItem = (e) => {
        e.preventDefault();
        const name = this.state.name;
        const cost = this.state.cost;
        const date = this.state.date;
        const category = this.state.category;
        this.setState({
            name: '',
            cost: '',
            date: '',
            category: '',
        });
        console.log("Add clicked", this);
        console.log(name, cost, date, category);
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleCostChange = (e) => {
        this.setState({
            cost: e.target.value
        });
    }

    handleDateChange = (e) => {
        this.setState({
            date: e.target.value
        });
    }

    handleCategoryChange = (e) => {
        this.setState({
            category: e.target.value
        });
    }

    render() { 
        return (
            <div>
                <form>
                    <label>Add a new item:</label>
                    <div className="row">
                        <div className="col-md-2">
                            {/* <label htmlFor="inputName">Item Name</label> */}
                            <input type="text" className="form-control" placeholder="ex. Groceries" onChange={this.handleNameChange} value={this.state.name} />
                        </div>
                        <div className="col-md-2">
                            <input type="text" className="form-control" placeholder="ex. 60.78" onChange={this.handleCostChange} value={this.state.cost} />
                        </div>
                        <div className="col-md-2">
                            <input type="text" className="form-control" placeholder="ex. 03/15/2023" onChange={this.handleDateChange} value={this.state.date} />
                        </div>
                        <div className="col-md-2">
                            <select className="form-select" onChange={this.handleCategoryChange} value={this.state.category} >
                                <option value="None">None</option>
                                <option value="Food">Food</option>
                                <option value="Transport">Transport</option>
                                <option value="Shopping">Shopping</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <button type="submit" onClick={this.handleAddItem} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default NewItem;