import React, { PropTypes } from 'react'
    
class IconFlipper extends React.Component {
    constructor(){
        super();
        this.state = {
            selected: 0
        }
        this._toggle = this._toggle.bind(this);
    }
    _toggle(e){
        e.preventDefault();
        let selected = (this.state.selected + 1) % (this.props.classNames.length);
        this.setState({
            selected: selected
        });
        this.props.onClick(selected);
    }
    render(){
        return (
<a href="#" onClick={this._toggle}>
    <i className={"fa " + (this.props.classNames[this.state.selected])}></i>
</a>
        )
    }
}

IconFlipper.propTypes = {
    classNames: PropTypes.array.isRequired,
    onClick: PropTypes.func
}

export default IconFlipper