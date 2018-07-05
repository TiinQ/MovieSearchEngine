import React, {Component} from 'react';



class SearchBar extends Component{

constructor(props){
	super(props);
	this.state = {searchText:"", placeHolder :"Taper votre film..."};
}

render(){
	return (		
				<div className="row">
					<div className="col-md-8 input-group">
						<input onKeyUp={this.handleChange.bind(this)} type="text" className="form-control input-lg" onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
						<span className="input-group-btn">
							<button className="btn btn-secondary" onClick={this.handleOnClick.bind(this)}>Go</button>
						</span>
					</div>
				</div>
			)
		}

handleOnClick(e){
	this.props.callback(this.state.searchText);
}

handleChange(e) {

	this.setState({searchText:e.target.value});
				}

}

export default SearchBar;