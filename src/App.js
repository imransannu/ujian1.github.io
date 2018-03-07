import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Home from './components/Home';
import Welcome from './components/Welcome';
import './App.css';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			active: 0
		}
	}
	changeName = name => this.setState({name})
	changeActive = active => this.setState({active})
	render = () =>
	<div className="container">
	<div id="app">
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<Link to='/Home' 
						onClick={() => this.changeActive(0)} 
						className={`nav-link ${this.state.active === 0 ? 'active' : ''}`}
					>Home</Link>
				</li>
				<li className="nav-item">
					<Link to='/welcome'
						onClick={() => this.changeActive(1)} 
						className={`nav-link ${this.state.active === 1 ? 'active' : ''}`}
					>Welcome</Link>
				</li>
			</ul>
			<div id="display">
				<Route path='/' render={() => <Redirect to='/Home'/>}/>
				<Route path='/Home' render={() => <Home changeActive={this.changeActive.bind(this)} changeName={this.changeName.bind(this)}/>}/>
				<Route path='/welcome' render={() => <Welcome name={this.state.name}/>}/>				
			</div>
		</div>
	</div>
		
}