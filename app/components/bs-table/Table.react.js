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
        data: PropTypes.array.isRequired,
        itemsPerPage: PropTypes.number.isRequired
    },
    getInitialState: function () {
        return this._calculateState(this.props);
    },
    _calculateState: function (props) {
        var headers = [];
        var contents = [];
        ReactChildren.forEach(props.children, function (child) {
            if (child === null) {
                return;
            }
            assert(child.type.__TableColumn__, 'Wrong usage. Children should be <Column />');
            headers.push({
                header: child.props.header,
                keyField: child.props.keyField,
            });
        });

        return {
            currentPage: Number(this.props.currentPage),
            headers: headers
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
        var numberOfPages = Math.ceil(this.props.data.length / itemsPerPage);
        var start = (currentPage - 1) * itemsPerPage;
        var end = start + itemsPerPage;
        var data = this.props.data.slice(start, end);
        return (
            <div>
            <Pagination
                numberOfPages={numberOfPages}
                currentPage={currentPage}
                onChanged={this._goToPage} />
            <RBTable {...this.props}>
                <Header columns={this.state.headers} />
                <Content data={data} columns={this.state.headers} />
            </RBTable>
            </div>
        );
    }
});

module.exports = Table;