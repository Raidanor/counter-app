import React, { Component } from 'react';


class Counter extends Component {
    
    // constructor()
    // {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    render()
    {
        // console.log("props", this.props);
        
        return(
            <div>
            {this.props.children}
            <span className= {this.getBgClasses()}>{this.formatCount()}</span>
            <button 
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className="btn btn-secondary btn-sm">
                Increment
                
            </button>

            <button 
            onClick ={ () => this.props.onDelete(this.props.counter.id)}  
            className=" btn btn-danger btn-sm m-2">
                DELETE
            </button>

            </div>
        )
    }

    getBgClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount()
    {
        const { value: count } = this.props.counter;
        return count === 0 ? count: count;
    }


}
 
export default Counter;