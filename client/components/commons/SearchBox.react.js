import React, { PropTypes } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class SearchBox extends React.Component {
    constructor(props){
        super();
        this.state = {
            column: props.columns[0],
            searchTerm: '',
        };
        this._onSearchChanged = this._onSearchChanged.bind(this);
        this._submit = this._submit.bind(this);
    }
    _submit(e){
        e.preventDefault();
        var searchTerm = this.state.searchTerm;
        this.props.onSubmit({
            column: this.state.column,
            searchTerm: searchTerm
        });
    }
    _onSearchChanged(e){
        this.setState({
            searchTerm: e.target.value
        });
    }
    render(){
        return (
<form onSubmit={this._submit}>
    <div className="col-sm-6 col-xs-12 form-group form-search">
        <input type="text" name="containt-text" placeholder="containt-text" className="form-control" value={this.state.searchTerm} onChange={this._onSearchChanged}></input>
        <input type="submit" name="containt-text-submit" id="containt-text-submit" placeholder="containt-text" className="form-control"></input>
        <label for="containt-text-submit"></label>
    </div>
</form>
        )
    }
}

SearchBox.propTypes = {
    columns: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default SearchBox;