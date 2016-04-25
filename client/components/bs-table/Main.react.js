import React from 'react';
import appConfig from '../../app.config.js';
import { Link } from 'react-router';
import StaticTable from '../commons/bs-table/StaticTable.react.js';
import Column from '../commons/bs-table/Column.react.js';
import Cell from '../commons/bs-table/Cell.react.js';
import IconFlipper from '../commons/controls/IconFlipper.react.js';
import SearchBox from '../commons/controls/SearchBox.react.js';
import FilterControl from '../commons/controls/FilterControl.react.js';
import ContentTitle from '../layout/ContentTitle.react.js';
import ItemsPerPageSelector from '../commons/bs-table/ItemsPerPageSelector.react.js';
import SimplePopout from '../commons/controls/SimplePopout.react.js';

import object_assign from 'object-assign';
import { TableStates } from '../../constants/BsTableConstants.js';
import BsTableStore from '../../stores/BsTable/TableStore.js';
import BsParamsStore from '../../stores/BsTable/ParamsStore.js';
import BsTableActions from '../../actions/BsTable/BsTableActions.js';

function getState() {
    return {
        table: BsTableStore.getTable(),
        searchFilters: BsParamsStore.getSearchFilters(),
        params: BsParamsStore.getParams()
    };
}

function getSortParam(params, colName, idx) {
    var asc = idx === 0 ? true : false;
    return object_assign({}, params, {
        sortBy: {
            colName: colName,
            asc: asc
        }
    });
}

class Main extends React.Component {
    constructor() {
        super();
        this.state = getState();
        this._onStateChanged = this._onStateChanged.bind(this);
//        this._onFilterChanged = this._onFilterChanged.bind(this);
        this._pageChanged = this._pageChanged.bind(this);
        this._search = this._search.bind(this);
        this._sortById = this._sortById.bind(this);
        this._sortByName = this._sortByName.bind(this);
        this._sortByEmail = this._sortByEmail.bind(this);
        this._changeItemsPerPage = this._changeItemsPerPage.bind(this);
    }
    _search(item) {
        var newParams = object_assign({}, this.state.params, {
            state: TableStates.SEARCHING,
            searchTerm: item.searchTerm,
        });
        BsTableActions.changeParams(newParams);
    }
    _onFilterChanged(idx, item){
        var filterColumns = this.state.params.filterColumns;
        filterColumns[idx] = item;
        var newParams = object_assign({}, this.state.params, {
            state: TableStates.SEARCHING,
            filterColumns: filterColumns,
        });
        BsTableActions.changeParams(newParams);
    }
    _pageChanged(pageNumber) {
        var newParams = object_assign({}, this.state.params, {
            currentPage: pageNumber
        });
        BsTableActions.changeParams(newParams);
    }
    _sortById(idx) {
        BsTableActions.changeParams(getSortParam(this.state.params, "id", idx));
    }
    _sortByName(idx) {
        BsTableActions.changeParams(getSortParam(this.state.params, "name", idx));
    }
    _sortByEmail(idx) {
        BsTableActions.changeParams(getSortParam(this.state.params, "email", idx));
    }
    _changeItemsPerPage(value){
        var newParams = object_assign({}, this.state.params, {
            currentPage: 1,
            itemsPerPage: value
        });
        BsTableActions.changeParams(newParams);
    }
    componentDidMount() {
        BsTableStore.addChangeListener(this._onStateChanged);
        BsParamsStore.addChangeListener(this._onStateChanged);
        BsTableActions.changeParams(this.state.params);
    }
    componentWillUnmount() {
        BsTableStore.removeChangeListener(this._onStateChanged);
        BsParamsStore.removeChangeListener(this._onStateChanged);
    }
    _onStateChanged() {
        this.setState(getState());
    }
    render() {
            var self = this;
    return (
<div className="main-content">
    <div className="inner">
        <ContentTitle title="BsTable" />
        <div className="filter-wrapper">
            <div className="row">
                <SearchBox columns={this.state.searchFilters} onSubmit={this._search} />
                <div className="col-sm-3 col-xs-12 form-group">
                    <FilterControl data={this.state.searchFilters}
                        initialSelectedValue={self.state.params.filterColumns[0]}
                        onSelected={self._onFilterChanged.bind(self, 0)} />
                </div>
                <div className="col-sm-3 col-xs-12 form-group">
                    <FilterControl data={this.state.searchFilters}
                        initialSelectedValue={self.state.params.filterColumns[0]}
                        onSelected={self._onFilterChanged.bind(self, 1)} />
                </div>
                <div className="col-sm-3 col-xs-12 form-group">
                    <FilterControl data={this.state.searchFilters}
                        initialSelectedValue={self.state.params.filterColumns[0]}
                        onSelected={self._onFilterChanged.bind(self, 2)} />
                </div>
            </div>
        </div>
        <div className="content-wrapper">
            <div className="content-control">
                <ItemsPerPageSelector currentItemsPerPage={this.state.params.itemsPerPage}
                    onChange={this._changeItemsPerPage} />
                <SimplePopout className="item-control btn-export-wrap pull-right"
                    containerCls="btn btn-default-active dropdown-toggle"
                    innerContainer={
                        <span>
                            <i className="ic-img ic-export before"></i> Export <i className="zmdi zmdi-chevron-down after"></i>
                        </span>
                    }
                    items={[
                        <a href="" title="">Export to CSV</a>,
                        <a href="" title="">Export to XML</a>,
                        <a href="" title="">Export to PDF</a>
                    ]} />
                <SimplePopout className="item-control btn-create-wrap pull-right"
                    containerCls="btn btn-primary dropdown-toggle"
                    innerContainer={
                        <span>
                        <i className="zmdi zmdi-plus before"></i> Create account <i className="zmdi zmdi-chevron-down after"></i>
                        </span>
                    }
                    items={[
                        <a href="form-create.html" title="Partner">Partner</a>,
                        <a href="form-create.html" title="Publisher">Publisher</a>,
                        <a href="form-create.html" title="Library">Library</a>,
                        <a href="form-create.html" title="Reseller">Reseller</a>,
                        <a href="form-create.html" title="Franchisee">Franchisee</a>
                    ]} />
            </div>
            <StaticTable rowsCount={this.state.table.totalRowsCount}
                currentPage={this.state.params.currentPage}
                onPageChanged={this._pageChanged}
                itemsPerPage={this.state.params.itemsPerPage}
                responsive
                striped
                hover>
                <Column header={<Cell attachedCtrl={<IconFlipper classNames={['fa-sort-up', 'fa-sort-down']} onClick={this._sortById} />}>Id</Cell>}
                    cell={function(rowIndex){
                        return <Cell>{self.state.table.rows[rowIndex].id}</Cell>;
                    }} />
                <Column header={<Cell attachedCtrl={<IconFlipper classNames={['fa-sort-up', 'fa-sort-down']} onClick={this._sortByName} />}>Name</Cell>}
                    cell={function(rowIndex){
                        return <Cell><Link to='/account'>{self.state.table.rows[rowIndex].name}</Link></Cell>;
                    }} />
                <Column header={<Cell attachedCtrl={<IconFlipper classNames={['fa-sort-up', 'fa-sort-down']} onClick={this._sortByEmail} />}>Email</Cell>}
                    cell={function(rowIndex){
                        return <Cell>{self.state.table.rows[rowIndex].email}</Cell>;
                    }} />
            </StaticTable>
        </div>
    </div>
</div>
        );
    }
};

export default Main;