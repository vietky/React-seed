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
    _goToPage: function (pageNumber) {
        this.props.onChanged(pageNumber);
    },
    render: function () {
        var self = this;
        var currentPage = this.props.currentPage;
        var createLink = function(pageNumber) {
            return (
                <li className={pageNumber===currentPage?'active':''}>
                    <a href='#' key={pageNumber} onClick={self._goToPage.bind(self, pageNumber)}>{pageNumber}</a>
                </li>
            );
        };
        var pages = [];
        for (var i=1;i<=this.props.numberOfPages;i++){
            pages.push(createLink(i));
        }
        return (
            <nav>
                <ul className="pagination">
                    <li><a href="#">&laquo;</a></li>
                    {pages}
                    <li><a href="#">&raquo;</a></li>
                </ul>
            </nav>
        );
    }
});

module.exports = Pagination;