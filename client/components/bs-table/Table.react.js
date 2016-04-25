import React from 'react';
import { PropTypes, ReactChildren } from 'react';
import { Table as RBTable } from 'react-bootstrap';

import BaseTable from './BaseTable.react.js';
import Pagination from './Pagination.react.js';
import ColumnSelector from './ColumnSelector.react.js';
import ItemsPerPageSelector from './ItemsPerPageSelector.react.js';

/* <Table /> usage is no longer maintained */
class Table extends BaseTable {
    constructor(props){
        super(props);
    }
    render() {
        var self = this;
        var itemsPerPage = this.props.itemsPerPage;
        var start = (this.state.currentPage - 1) * itemsPerPage;
        var end = Math.min(this.props.rowsCount, start + itemsPerPage);

        var data = this._extractContent(start, end);

        return (
<div className="row">
    <div className="row">
        <ItemsPerPageSelector onChange={this.props.onItemsPerPageChanged} />
        <p>&nbsp;</p>
        <ColumnSelector columns={this.state.columns}
            toggleColumn={this._toggleColumn} />
    </div>
    <RBTable {...this.props}>
        <thead>
            <tr>
            {
                this.state.headers.map(this._createHeader)
            }
            </tr>
        </thead>
        <tbody>
        {
            data.map(this._createRow)
        }
        </tbody>
    </RBTable>
    <Pagination
        rowsCount={this.props.rowsCount}
        itemsPerPage={this.props.itemsPerPage}
        currentPage={this.state.currentPage}
        onClick={this._goToPage} />
</div>
        );
    }
};

module.exports = Table;