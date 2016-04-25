import React, { PropTypes } from 'react';

class ClickAnywhereOutside extends React.Component{
    constructor(){
        super();
        this.state = {
            componentClicked: false,
        };
        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseUp = this._onMouseUp.bind(this);
        this._pageClick = this._pageClick.bind(this);
    }
    componentDidMount(){
        window.addEventListener('mousedown', this._pageClick, false);
    }
    componentWillUnmount(){
        window.removeEventListener('mousedown', this._pageClick, false);        
    }
    _pageClick(){
        if (this.state.componentClicked === true) return;
        this.props.onPageClick();
    }
    _onMouseDown(){
        this.setState({
            componentClicked: true
        });
    }
    _onMouseUp(){
        this.setState({
            componentClicked: false
        });
    }
    render(){
        var self = this;
        return (
<div {...this.props} onMouseDown={self._onMouseDown} onMouseUp={self._onMouseUp}>
    {this.props.children}
</div>
        )
    }
}

ClickAnywhereOutside.propTypes = {
    onPageClick: PropTypes.func.isRequired
};

export default ClickAnywhereOutside