import React  from "react";
import "./index.css";

export default function Calculator(props) {
  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">Total operations performed: {props.totalAction}</div>
      <div className="card">

        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input type="number" 
            className={"ml-3 mr-3 " + props.errorClass} 
            data-testid="app-input1" 
            autoComplete="off" 
            placeholder="Eg: 1"
            name="input1"
            value={props.input1}
            onChange={props.updateInput}
            />
            <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{props.operator}</label>
            <input type="number" 
            data-testid="app-input2" 
            autoComplete="off" 
            className={"ml-3 mr-3 " + props.errorClass} 
            placeholder="Eg: 2"
            value={props.input2}
            name="input2"
            onChange={props.updateInput}
            />
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button onClick={props.calculate} className="operationFont" type="submit" data-testid="addButton">+</button>
            <button onClick={props.calculate} className="operationFont" type="submit" data-testid="subtractButton">-</button>
            <button onClick={props.calculate} className="operationFont" type="submit" data-testid="multiplyButton">*</button>
            <button onClick={props.calculate} className="operationFont" type="submit" data-testid="divideButton">/</button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button onClick= {props.reset} type="reset" data-testid="resetButton" className="outline danger">Reset</button>
            <div className="layout-row justify-content-center align-items-center result-container">
              {
                props.showResult && 
                <div data-testid="result" className="result-value ma-0 slide-up-fade-in">Result: {props.result}</div>
              }
              
            </div>
          </div>
        </section>

      </div>
    </div>
  );

}