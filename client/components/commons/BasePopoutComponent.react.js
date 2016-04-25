import React, { PropTypes } from 'react';
import object_assign from 'object-assign';

const mergePopoutState = (currentState) => {
    return object_assign({}, currentState, {
        isOpen: false
    });
}

class BasePopoutComponent extends React.Component {
    constructor(props, currentState){
        super(props);
        this.state = mergePopoutState(currentState);
        this._toggleDropdown = this._toggleDropdown.bind(this);
        this._close = this._close.bind(this);
    }
    _close(){
        this.setState({
            isOpen: false,
        });
    }
    _toggleDropdown(){
        var isOpen = this.state.isOpen;
        this.setState({
            isOpen: !isOpen,
        });
    }
    render(){
        throw "Can't render this component";
    }
};

export default BasePopoutComponent;