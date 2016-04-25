import React from 'react';
import { PropTypes, ReactChildren } from 'react';
import { Table as RBTable } from 'react-bootstrap';

import BaseTable from './BaseTable.react.js';
import Pagination from './Pagination.react.js';
import ColumnSelector from './ColumnSelector.react.js';
import PaginationNavigator from './PaginationNavigator.react.js';

class StaticTable extends BaseTable {
    constructor(props){
        super(props);
        this._goToPage = this._goToPage.bind(this);
        this._selectDone = this._selectDone.bind(this);
    }
    _goToPage(pageNumber){
        this.props.onPageChanged(pageNumber);
    }
    _selectDone(columns){
        this.setState({
           columns: columns
        });
    }
    render() {
        var self = this;
        var itemsPerPage = this.props.itemsPerPage;
        var numberOfPages = Math.ceil(this.props.rowsCount / itemsPerPage);
        var start = 0;
        var end = Math.min(this.props.rowsCount, start + itemsPerPage);
        if (this.props.currentPage === numberOfPages)
        {
            end = this.props.rowsCount % itemsPerPage;
        }
        var data = this._extractContent(start, end);
        
        var columnVisibleCount = 0;
        for (var i in this.state.columns)
        {
            columnVisibleCount += this.state.columns[i].selected;
        }
        return (
<div className="content table-layout">
<div className={"table-display grid-" + columnVisibleCount}>
    <div className="table-row table-title">
        {
            this.state.headers.map(this._createHeader)
        }
        <ColumnSelector columns={this.state.columns} onDone={this._selectDone} />
    </div>
</div>
<div className="clearfix"></div>
<div className="inner">
    <div className={"table-display grid-" + columnVisibleCount}>
        {
            data.map(this._createRow)
        }
    </div>
</div>
        {/*<PaginationNavigator onSubmit={this._goToPage} />*/}
        <Pagination
            rowsCount={this.props.rowsCount}
            itemsPerPage={this.props.itemsPerPage}
            currentPage={this.props.currentPage}
            onClick={this._goToPage} />
</div>
        );
    }
};

StaticTable.propTypes = {
    rowsCount: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    onPageChanged: PropTypes.func,
};

module.exports = StaticTable;