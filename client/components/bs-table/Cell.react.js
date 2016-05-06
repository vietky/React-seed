import React, {PropTypes} from 'react';
import _ from 'lodash';

const Cell = (props) => {
    let { children, attachedCtrl } = props;
    const rest = _.omit(props, ['children', 'attachedCtrl']);
    return (
        <div {...rest}>
            {children}&nbsp;{attachedCtrl}
        </div>
    );
};

Cell.propTypes = {
    attachedCtrl: PropTypes.node
}

module.exports = Cell;