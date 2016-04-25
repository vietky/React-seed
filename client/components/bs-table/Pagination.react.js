var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Pagination = React.createClass({
    propTypes: {
        rowsCount: PropTypes.number.isRequired,
        itemsPerPage: PropTypes.number.isRequired,
        currentPage: PropTypes.number.isRequired,
        onClick: PropTypes.func,
    },
    getDefaultProps: function(){
        return {
            pagerToDisplay: 5,
        };
    },
    shouldComponentUpdate: function(nextProps){
        return this.props.rowsCount !== nextProps.rowsCount || this.props.currentPage !== nextProps.currentPage;
    },
    _onChanged: function (pageNumber, e) {
        e.preventDefault();
        var numberOfPages = Math.ceil(this.props.rowsCount / this.props.itemsPerPage);
        var pageToNavigate = Math.max(1, Math.min(numberOfPages, pageNumber));
        this.props.onClick(pageToNavigate);
    },
    render: function () {
        var self = this;
        var numberOfPages = Math.ceil(this.props.rowsCount / this.props.itemsPerPage);
        var currentPage = this.props.currentPage;
        var createLink = function(pageNumber) {
            return (
                <li key={pageNumber} className="pages">
                    <a href='#' className={"page " + (pageNumber===currentPage?'current':'')} onClick={self._onChanged.bind(self, pageNumber)}>{pageNumber}</a>
                </li>
            );
        };
        var pagerToDisplay = Math.min(numberOfPages, this.props.pagerToDisplay);
        var start = Math.max(1, currentPage - Math.floor(pagerToDisplay / 2));
        var end = Math.min(numberOfPages, start + pagerToDisplay - 1);
        if (end === numberOfPages){
            start = Math.max(1, end - pagerToDisplay + 1);
        }

        var pages = [];
        for (var i=start;i<=end;i++){
            pages.push(createLink(i));
        }
        return (
            <div className="pagination">
            <ul className="paging">
                <li className="pages"><a href="#" className={"page first " + (currentPage===1?'disabled':'')} onClick={this._onChanged.bind(self, 1)}>First</a></li>
                <li className="pages"><a href="#" className={"page prev " + (currentPage===1?'disabled':'')} onClick={this._onChanged.bind(self, currentPage-1)}>Previous</a></li>
                {pages}
                <li className="pages"><a href="#" className={"page next " + (currentPage===numberOfPages?'disabled':'')} onClick={this._onChanged.bind(self, currentPage+1)}>Next</a></li>
                <li className="pages"><a href="#" className={"page last " + (currentPage===numberOfPages?'disabled':'')} onClick={this._onChanged.bind(self, numberOfPages)}>Last</a></li>
            </ul>
            </div>
        );
    }
});

module.exports = Pagination;