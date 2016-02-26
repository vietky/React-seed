var React = require('react');
var Table = require('./Table.react.js');
var Column = require('./Column.react.js');
var FakeData = require('../FakeData/PeopleList.js');

var Main = React.createClass({
    render: function () {
        var currentPage = this.props.params.page || 1;
        return (
            <Table data={FakeData}
                currentPage={currentPage}
                itemsPerPage={10}
                responsive
                striped
                bordered
                condensed
                hover>
                <Column header="Id" keyField="id" />
                <Column header="Name" keyField="name" />
                <Column header="Email" keyField="email" />
            </Table>
        );
    }
});

module.exports = Main;