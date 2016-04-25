import { Input } from 'react-bootstrap';
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import BasePopoutComponent from '../controls/BasePopoutComponent.react.js';
import ClickAnywhereOutside from '../controls/ClickAnywhereOutside.react.js';

class ColumnSelector extends BasePopoutComponent {
    constructor(props){
        super(props, {
            columns: props.columns
        });
        this._onChecked = this._onChecked.bind(this);
        this._save = this._save.bind(this);
    }
    _save(){
        this._close();
        this.props.onDone(this.state.columns);
    }
    _onChecked(index){
        var columns = this.state.columns;
        columns[index].selected = !columns[index].selected;
        this.setState({
            columns: columns,
        });
    }
    render(){
        var self = this;
        var isOpen = this.state.isOpen;
        var createColumnSelector = function (item, index)
        {
            return (
                <div className="form-group" key={index} onClick={self._onChecked.bind(self, index)} >
                    <input type="checkbox" id={"chk-"+index} checked={item.selected} onChange={()=>{}}/>
                    <label for={"chk-"+index} className="ic-input ic-checkbox"></label>
                    <label for={"chk-"+index}>{item.name}</label>
                </div>
            );
        };
        return (
<ClickAnywhereOutside className={classnames({"extra-columns scrolling": true, "open": isOpen})} onPageClick={this._close}>
    <i className="ic-table-extra zmdi zmdi-filter-list dropdown-toggle" onClick={this._toggleDropdown} />
    <div className="dropdown-menu animated fadeInDown pull-right">
        <div className="block-title">
            <button className="btn btn-success" onClick={this._save}>Done</button>
            <button className="btn btn-default" onClick={this._close}>Cancel</button>
        </div>
        <div className="inner">
            {this.state.columns.map(createColumnSelector)}
        </div>
    </div>
</ClickAnywhereOutside>
        );
    }
};

ColumnSelector.propTypes = {
    columns: PropTypes.array.isRequired,
    onDone: PropTypes.func.isRequired
};

module.exports = ColumnSelector;