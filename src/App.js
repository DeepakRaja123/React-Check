import React  from 'react';
import './App.css';
import 'h8k-components';
import Calculator from '././components/calculator/index.js';

const title = "Calculator";

class App extends React.Component {
  state ={
    input1: '',
    input2: '',    
    result : '',
    totalAction : 0,
    showResult : false,
    operator : '+',
    errorClass : ''
  }

  calculate = (e) => {
      if(this.state.input1 === '' || this.state.input2 === ''){
        
        this.setState({
          errorClass : 'error'
        })
        return 
      }
      let operator = '+'
      let result = {
      'addButton': function(a, b) { operator = '+';return parseFloat(a) + parseFloat(b) },
      'subtractButton': function(a, b) {operator = '-'; return a - b },
      'multiplyButton': function(a, b) { operator = '*'; return a * b },
      'divideButton': function(a, b) { operator = '/'; return (a / b).toFixed(2) },
    }
    let a = result[e.target.dataset.testid](this.state.input1, this.state.input2)
    this.setState({
      result : a,
      totalAction : this.state.totalAction + 1,
      operator : operator,
      showResult : true
    })
  }

  updateInput = (e) => {
      this.setState({
        [e.target.name] : e.target.value,
        errorClass : ''
      })    
  }
  reset = () => {
    this.setState({
      input1 : '',
      input2 : '',
      operator : '+',
      showResult: false
    })
  }
  render() {
    return (
      <div>
        <h8k-navbar header={title} />
        <Calculator 
        add={this.addMethod}
        input1 = {this.state.input1}
        input2 = {this.state.input2}
        calculate = {this.calculate}
        updateInput = {this.updateInput}
        result = {this.state.result}
        reset = {this.reset}
        totalAction = {this.state.totalAction}
        operator = {this.state.operator}
        showResult = {this.state.showResult}
        errorClass = {this.state.errorClass}
        />
      </div>
    );
  }
}

export default App;
