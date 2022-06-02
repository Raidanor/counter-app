import NavBar from "./components/navbar"
import React, { Component } from 'react';
import Counters from './components/counters';

class App extends Component
{
  state = 
    { 
        counters:
        [
            { id:0, value:0 },
            { id:1, value:10 },
            { id:2, value:20 },
            { id:3, value:30 },
            { id:4, value:40 },
        ]
    }

    constructor()
    {
      super();
      console.log("App - Constructor");
      //this.state = this.props.something;
    }

    componentDidMount()
    {
      console.log("App Mounted");  
    }

    handleDelete = (counterID) =>
    {
        console.log("event handler called", counterID);
        const counters = this.state.counters.filter(c => c.id !==counterID);
        this.setState({counters});
    }

    handleReset = ()=> 
    {
        const counters = this.state.counters.map(c => 
            {
                c.value = 0;
                return c;
            });
        this.setState({counters});;
    }

    handleIncrement = counter =>
    {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        
        counters[index] = {...counter};
        counters[index].value++;

        this.setState({counters});
        console.log(counter.value);
    }

  render()
  { 
    console.log("App rendered");  
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length} />
        <main className="container">
          <Counters 
            counters = {this.state.counters}
            onReset={this.handleReset}
            onIncrement = {this.handleIncrement}
            onDelete = {this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
  
}

export default App;
