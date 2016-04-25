var React = require('react');
var PropTypes = React.PropTypes;

const Cell = ({children, attachedCtrl}) => {
    return (
        <div>
            {children}&nbsp;{attachedCtrl}
        </div>
    );
};

Cell.propTypes = {
    attachedCtrl: PropTypes.node
}

module.exports = Cell;