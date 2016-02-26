var React = require('react');
var ReactChildren = React.Children;
var PropTypes = React.PropTypes;
var ReactBootstrap = require('react-bootstrap');
var RBTable = ReactBootstrap.Table;
var assert = require('invariant');

var Header = require('./Header.react.js');
var Content = require('./Content.react.js');
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
        ReactChildren.forEach(props.children, function (child) {
            if (child === null) {
                return;
            }
            assert(child.type.__TableColumn__, 'Wrong usage. Children should be <Column />');
            headers.push(child.props.header);
            cells.push(child.props.cell);
        });

        return {
            currentPage: Number(this.props.currentPage),
            headers: headers,
            cells: cells,
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
                if (typeof this.state.cells[j] === 'function'){
                    item[j] = this.state.cells[j](i);
                }
                else
                {
                    item[j] = this.state.cells[j];
                }
            }
            data.push(item);
        }
        return (
            <div>
            <Pagination
                numberOfPages={numberOfPages}
                currentPage={currentPage}
                onClick={this._goToPage} />
            <RBTable {...this.props}>
                <Header columns={this.state.headers} />
                <Content data={data} />
            </RBTable>
            </div>
        );
    }
});

module.exports = Table;