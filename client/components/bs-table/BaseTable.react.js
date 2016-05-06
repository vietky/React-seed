import React from 'react';
import { PropTypes, Children } from 'react';
import assert from 'invariant';

import RowContent from './RowContent.react.js';
import Pagination from './Pagination.react.js';
import ColumnSelector from './ColumnSelector.react.js';

class BaseTable extends React.Component{
    constructor(props){
        super(props);
        this.state = this._calculateState(props);
        this._createHeader = this._createHeader.bind(this);
        this._createRow = this._createRow.bind(this);
        this._extractContent = this._extractContent.bind(this);
        this._goToPage = this._goToPage.bind(this);
        this._toggleColumn = this._toggleColumn.bind(this);
    }
    _goToPage(pageNumber){
        this.setState({
           currentPage: pageNumber 
        });
    }
    _toggleColumn(item){
        item.selected = !item.selected;
        var columns = this.state.columns;
        columns[item.index] = item;

        this.setState({
            columns: columns,
        });
    }
    _calculateState(props) {
        var availableColumns = [];
        var headers = [];
        var cells = [];
        var index = 0;
        Children.forEach(props.children, function (child) {
            if (child === null) {
                return;
            }
            assert(child.type.__TableColumn__, 'Wrong usage. Children should be <Column />');
            var header = typeof(child.props.header) === 'function' ? child.props.header() : child.props.header;
            availableColumns.push({
                index: index++,
                name: header.props.children,
                selected: child.props.displayed,
            });
            headers.push(child.props.header);
            cells.push(child.props.cell);
        });

        return {
            currentPage: Number(props.currentPage),
            headers: headers,
            cells: cells,
            columns: availableColumns,
        };
    }
    _extractContent(start, end){
        var self = this;
        var data = [];
        for (var i=start;i<end;i++)
        {
            var item = {};
            for (var j=0;j<this.state.cells.length;j++)
            {
                if (j < self.state.columns.length && !self.state.columns[j].selected) continue;
                item[j] = {};
                if (typeof this.state.cells[j] === 'function')
                {
                    item[j].value = this.state.cells[j](i);
                }
                else
                {
                    item[j].value = this.state.cells[j];
                }
            }
            data.push(item);
        }
        return data;
    }
    _createHeader(cell, index){
        if (index < this.state.columns.length && !this.state.columns[index].selected) return;
        var header = typeof(cell) === 'function' ? cell() : cell;
        return (
            <div key={index} className="table-col">{header}</div>
        );
    }
    _createRow(item, index){
        return (
            <RowContent key={index} content={item} />
        );
    }
    render(){
        throw "Can't render Base Table"
    }
}

BaseTable.propTypes = {
    rowsCount: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
};

BaseTable.defaultProps = {
    itemsPerPage: 10
};

export default BaseTable;