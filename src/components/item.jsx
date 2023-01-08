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
                    <div class="row">
                        <div class="col-md-2">
                            <label for="inputName">Item Name</label>
                            <input type="text" class="form-control" placeholder="Groceries" />
                        </div>
                        <div class="col-md-1">
                            <label for="inputCost">Cost</label>
                            <input type="text" class="form-control" placeholder="60.78" />
                        </div>
                        <div class="col-md-2">
                            <label for="inputDate">Date</label>
                            <input type="text" class="form-control" placeholder="03/15/2023" />
                        </div>
                    </div>
                </form>
                <div class="col-sm-3">
                    <select class="selectpicker" data-width="fit">
                        <option>Food</option>
                        <option>Transportation</option>
                        {/* <option style="background: #5cb85c; color: #fff;">Relish</option> */}
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
            </div>
        );
    }
}
 
export default Item;