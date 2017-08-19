import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';


class Calculator extends Component {

	state = {
		secondary: 0,
		operator: '',
		display: '0'
	}


	setDisplay(num) {
		var display;
		if(this.state.display === '0'){
			display = num
		} else {
			display = this.state.display + num
		}
		if(this.state.display.length < 7){
			this.setState({display})
		}
	}

	setOperator(operator) {
		if(!this.state.operator){
			this.setState({
				display: '0',
				temp: this.state.display,
				operator
			})
		}
	}

	calculate() {
		var answer;
		switch (this.state.operator) {
			case '/':
				answer = parseInt(this.state.display) / parseInt(this.state.temp)
				break;
			case '+':
				answer = parseInt(this.state.display) + parseInt(this.state.temp)
				break;

			case '-':
				answer = -(parseInt(this.state.display) - parseInt(this.state.temp))
				break;

			case 'x':
				answer = parseInt(this.state.display) * parseInt(this.state.temp)
				break;
			default:
				answer = "Cannot Calculate"
		}
		this.setState({display:answer})
	}

	clear() {
		this.setState({
			display: '0',
			operator: '',
			temp: 0,
		})
	}

	setPercentage() {
		this.setState({
			display: this.state.display/100
		})
	}

	setNegative(){
		this.setState(prevState => ({
			display: -(prevState.display)
		}))
	}

	render() {
		return (
				<div className="row">
					<div className="col-md-6 col-sm-4">
						<div className="answer">
							<h1>{this.state.display}</h1>
						</div>
					</div>
					<div className="calc-btns-container col-md-6 col-sm-8">
						<div className="calc-nums text-center">

							<div className="btn-numbers col-12">
								<button onClick={ ()=> this.clear()} className="btn btn-primary btn-nums">AC</button>
								<button onClick={ ()=> this.setNegative()} className="btn btn-primary btn-nums">+/-</button>
								<button onClick={ ()=> this.setPercentage()} className="btn btn-nums btn-primary">%</button>
								<button onClick={ ()=> this.setOperator('/')} className="btn btn-primary btn-nums">/</button>
							</div>

							<div className="col-12">
								<Button setDisplay={this.setDisplay.bind(this)} setNum={'7'} />
								<Button setDisplay={this.setDisplay.bind(this)} setNum={'8'} />
								<Button setDisplay={this.setDisplay.bind(this)} setNum={'9'} />
								<button onClick={ ()=> this.setOperator('x')} className="btn btn-primary btn-nums">x</button>
							</div>


							<div className="col-12">
								<Button setDisplay={ this.setDisplay.bind(this)} setNum={'4'} />
								<Button setDisplay={ this.setDisplay.bind(this)} setNum={'5'} />
								<Button setDisplay={ this.setDisplay.bind(this)} setNum={'6'} />
								<button onClick={ ()=>this.setOperator('-')} className="btn btn-primary btn-nums">-</button>
							</div>


							<div className="col-12">
								<Button setDisplay={this.setDisplay.bind(this)} setNum={'1'} />
								<Button setDisplay={this.setDisplay.bind(this)} setNum={'2'} />
								<Button setDisplay={this.setDisplay.bind(this)} setNum={'3'} />
								<button onClick={ ()=>this.setOperator('+')} className="btn btn-primary btn-nums">+</button>
							</div>

							<div className="col-12">
								<button className="btn btn-primary zero" onClick={()=> this.setDisplay('0')}> 0 </button>
								<Button setDisplay={this.setDisplay.bind(this)} setNum={'.'} />
								<button onClick={ ()=> this.calculate() } className="btn btn-primary btn-nums">=</button>
							</div>


						</div>
					</div>
				</div>
		)
	}
}

const Button = (props) => {
	return (
		<button
			onClick={ ()=> props.setDisplay(props.setNum) }
			className="btn btn-nums btn-primary">
			{props.setNum}</button>
	)
}


export default Calculator;
