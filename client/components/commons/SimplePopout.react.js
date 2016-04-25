import React, { PropTypes } from 'react';
import BasePopoutComponent from './BasePopoutComponent.react.js';
import ClickAnywhereOutside from './ClickAnywhereOutside.react.js';
import classnames from 'classnames';

class SimplePopout extends BasePopoutComponent {
    constructor(props){
        super(props, {});
    }
    render(){
        var outerClsObj = ({
            "open": this.state.isOpen
        });
        outerClsObj[this.props.className] = true;

        return (
<ClickAnywhereOutside {...this.props} className={classnames(outerClsObj)} onPageClick={this._close}>
    <div className={this.props.containerCls} onClick={this._toggleDropdown}>
        {this.props.innerContainer}
    </div>
    <ul className="dropdown-menu animated fadeInDown pull-right">
        {
            this.props.items.map((item, index) => {
                return <li key={index}>{item}</li>;
            })
        }
    </ul>
</ClickAnywhereOutside>
        );
    }
}

SimplePopout.propTypes = {
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
    innerContainer: PropTypes.node,
    containerCls: PropTypes.string.isRequired,
};

export default SimplePopout;