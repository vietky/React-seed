var React = require('react');
var Table = require('./Table.react.js');
var Column = require('./Column.react.js');
var Cell = require('./Cell.react.js');
var FakeData = require('../FakeData/PeopleList.js');

var Main = React.createClass({
    render: function () {
        var data = FakeData;
        var currentPage = this.props.params.page || 1;
        return (
            <Table rowsCount={data.length}
                currentPage={currentPage}
                itemsPerPage={10}
                responsive
                striped
                bordered
                condensed
                hover>
                <Column header={<Cell>Id</Cell>}
                    cell={function(rowIndex){
                        return <Cell>{data[rowIndex].id}</Cell>;
                    }} />
                <Column header={<Cell>Name</Cell>}
                    cell={function(rowIndex){
                        return <Cell>{data[rowIndex].name}</Cell>;
                    }} />
                <Column header={<Cell>Email</Cell>}
                    cell={function(rowIndex){
                        return <Cell>{data[rowIndex].email}</Cell>;
                    }} />
                <Column header={<Cell>Avatar</Cell>}
                    cell={
                        <Cell><img src='http://cdn.playbuzz.com/cdn/7a7a5814-ed79-410c-b748-db6a24f73f0b/4d71c010-f930-4334-ba62-79d87a7ddef4.jpg' />     </Cell>
                    } />
            </Table>
        );
    }
});

module.exports = Main;