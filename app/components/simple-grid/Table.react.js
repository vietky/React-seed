var React = require('react');
var DataRow = require('../../FakeData/DataRow.js');

var Table = React.createClass({
    getInitialState: function(){
        return { rows: DataRow };
    },
    render: function(){
        var createRow = function (item) {
            return (
                <tr>
                    <td className="mdl-data-table__cell--non-numeric">{item.id}</td>
                    <td className="mdl-data-table__cell--non-numeric">{item.name}</td>
                </tr>
            );
        };
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--2-col-desktop"></div>
                <div className="mdl-cell mdl-cell--8-col-desktop">
                    <table className="mdl-data-table mdl-js-data-table">
                        <thead>
                            <tr>
                                <th className="mdl-data-table__cell--non-numeric">Id</th>
                                <th className="mdl-data-table__cell--non-numeric">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.rows.map(createRow) }
                        </tbody>
                    </table>
                </div>
                <div className="mdl-cell mdl-cell--2-col-desktop"></div>
            </div>
        );
    },
});

module.exports = Table;