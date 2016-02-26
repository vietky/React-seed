var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Pagination = React.createClass({
    propTypes: {
        numberOfPages: PropTypes.number.isRequired,
        currentPage: PropTypes.number.isRequired,
        onChanged: PropTypes.func,
    },
    getDefaultProps: function(){
        return {
            pagerToDisplay: 5,
        };
    },
    shouldComponentUpdate: function(nextProps){
        return this.props.currentPage !== nextProps.currentPage;
    },
    _onChanged: function (pageNumber, e) {
        e.preventDefault();
        var pageToNavigate = Math.max(1, Math.min(this.props.numberOfPages, pageNumber));
        this.props.onChanged(pageToNavigate);
    },
    render: function () {
        var self = this;
        var currentPage = this.props.currentPage;
        var createLink = function(pageNumber) {
            return (
                <li className={pageNumber===currentPage?'active':''}>
                    <a href='#' key={pageNumber} onClick={self._onChanged.bind(self, pageNumber)}>{pageNumber}</a>
                </li>
            );
        };
        var pages = [];
        var pagerToDisplay = Math.min(this.props.numberOfPages, this.props.pagerToDisplay);
        var start = Math.max(1, currentPage - Math.floor(pagerToDisplay / 2));
        var end = Math.min(this.props.numberOfPages, start + pagerToDisplay - 1);
        if (end === this.props.numberOfPages){
            start = Math.max(1, end - pagerToDisplay + 1);
        }

        for (var i=start;i<=end;i++){
            pages.push(createLink(i));
        }
        return (
            <nav>
                <ul className="pagination">
                    <li><a href="#" className={currentPage===1?'disabled':''} onClick={this._onChanged.bind(self, 1)}>&laquo;</a></li>
                    <li><a href="#" className={currentPage===1?'disabled':''} onClick={this._onChanged.bind(self, currentPage-1)}>&larr;</a></li>
                    {pages}
                    <li><a href="#" className={currentPage===this.props.numberOfPages?'disabled':''} onClick={this._onChanged.bind(self, currentPage+1)}>&rarr;</a></li>
                    <li><a href="#" className={currentPage===this.props.numberOfPages?'disabled':''} onClick={this._onChanged.bind(self, this.props.numberOfPages)}>&raquo;</a></li>
                </ul>
            </nav>
        );
    }
});

module.exports = Pagination;