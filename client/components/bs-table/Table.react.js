var React = require('react');
var ReactChildren = React.Children;
var PropTypes = React.PropTypes;
var ReactBootstrap = require('react-bootstrap');
var RBTable = ReactBootstrap.Table;
var assert = require('invariant');

var RowContent = require('./RowContent.react.js');
var Pagination = require('./Pagination.react.js');

var Table = React.createClass({
    propTypes: {
        rowsCount: PropTypes.number.isRequired,
        itemsPerPage: PropTypes.number.isRequired
    },
    getInitialState: function () {
        return this._calculateState(this.props);
    },
    _calculateState: function (props) {
        var headers = [];
        var cells = [];
        var editors = [];
        ReactChildren.forEach(props.children, function (child) {
            if (child === null) {
                return;
            }
            assert(child.type.__TableColumn__, 'Wrong usage. Children should be <Column />');
            headers.push(child.props.header);
            cells.push(child.props.cell);
            editors.push(child.props.editor);
        });

        return {
            currentPage: Number(this.props.currentPage),
            headers: headers,
            cells: cells,
            editors: editors
        };
    },
    _goToPage: function (pageNumber){
        this.setState({
           currentPage: pageNumber 
        });
    },
    render: function () {
        var currentPage = this.state.currentPage;
        var itemsPerPage = this.props.itemsPerPage;
        var numberOfPages = Math.ceil(this.props.rowsCount / itemsPerPage);
        var start = (currentPage - 1) * itemsPerPage;
        var end = start + itemsPerPage;
        if (end > this.props.rowsCount)
        {
            end = this.props.rowsCount;
        }
        var data = [];
        for (var i=start;i<end;i++)
        {
            var item = {};
            for (var j=0;j<this.state.cells.length;j++)
            {
                item[j] = {};
                if (typeof this.state.editors[j] === 'function')
                {
                    item[j].editor = this.state.editors[j](i);
                }
                else
                {
                    item[j].editor = this.state.editors[j];
                }

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
        
        var createHeader = function (cell, index) {
            return (
                <th key={index}>{cell}</th>
            );
        };
        
        var createRow = function (item, index){
            return (
                <RowContent key={index} content={item} />
            );
        };
        return (
            <div>
            <Pagination
                numberOfPages={numberOfPages}
                currentPage={currentPage}
                onClick={this._goToPage} />
            <RBTable {...this.props}>
                <thead>
                    <tr>
                    {
                        this.state.headers.map(createHeader)
                    }
                    </tr>
                </thead>
                <tbody>
                {
                    data.map(createRow)
                }
                </tbody>
            </RBTable>
            </div>
        );
    }
});

module.exports = Table;