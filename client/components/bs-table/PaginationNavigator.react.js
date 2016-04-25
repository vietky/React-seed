import React, { PropTypes } from 'react';

class PaginationNavigator extends React.Component{
    constructor(){
        super();
        this.state = {
            value: 0
        };
        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }
    _onChange(e){
        var value = parseInt(e.target.value);
        if (isNaN(value))
        {
            value = 1;
        }
        this.setState({
            value: value
        });
    }
    _onSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    }
    render(){
        return (
<div className="row">
    <form onSubmit={this._onSubmit}>
    Go to page <input type="text" onChange={this._onChange} />
    </form>
</div>
        );
    }
}

PaginationNavigator.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
export default PaginationNavigator;