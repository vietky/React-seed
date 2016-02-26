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
                        <Cell><img src='http://vignette2.wikia.nocookie.net/yugioh/images/3/33/GoodHero-JP-Anime-GX-NC.png/revision/20140907022250' />     </Cell>
                    } />
            </Table>
        );
    }
});

module.exports = Main;