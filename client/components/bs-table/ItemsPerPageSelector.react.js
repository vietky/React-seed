import React, { PropTypes } from 'react';
import BasePopoutComponent from '../controls/BasePopoutComponent.react.js';
import ClickAnywhereOutside from '../controls/ClickAnywhereOutside.react.js';
import classnames from 'classnames';

const getInitialState = (props) => {
    var itemsPerPageList = [5, 10, 20, 50, 100];
    var i;
    for (i=0;i<itemsPerPageList.length;i++)
    {
        if (itemsPerPageList[i] === props.currentItemsPerPage)
        {
            break;
        }
    }
    if (i === itemsPerPageList.length)
    {
        itemsPerPageList.push(props.currentItemsPerPage);
    }
    return {
        itemsPerPageList: itemsPerPageList,
        selectedValue: props.currentItemsPerPage
    };
};

class ItemsPerPageSelector extends BasePopoutComponent {
    constructor(props){
        super(props, getInitialState(props));

        this._onChange = this._onChange.bind(this);
        this._toggle = this._toggle.bind(this);
        this._pageClick = this._pageClick.bind(this);
    }
    _onChange(value){
        this.setState({
            selectedValue: value
        });
        this.props.onChange(value);
    }
    _toggle(){
        var isOpen = this.state.isOpen;
        this.setState({
            isOpen: !isOpen
        });
    }
    _pageClick(){
        this.setState({
            isOpen: false
        });
    }
    render(){
        var self = this;
        var isOpen = this.state.isOpen;
        var createSubmenu = function(item, index){
            return (                
                <div key={index} className="form-group" onClick={self._onChange.bind(self, item)}>
                    <input type="radio" name="radio-item-per-page" id={"per-page-" + item} value={item}
                            onChange={()=>{}}
                            checked={self.state.selectedValue === item} ></input>
                    <label className="ic-input ic-checkbox"></label>
                    <label for={"per-page-" + item}>{item} items</label>
                </div>
            );
        };
        return (
<ClickAnywhereOutside className={classnames({"item-control btn-post-per-page-wrap pull-left": true, "open": isOpen})} onPageClick={self._close}>
    <button type="button" className="btn btn-none dropdown-toggle" onClick={self._toggleDropdown}>
        <span></span><span>{this.state.selectedValue}</span> items per page<i className="zmdi zmdi-chevron-down after"></i>
    </button>
    <div className="dropdown-menu animated fadeInDown pull-left">
        <div className="inner">
            {
                this.state.itemsPerPageList.map(createSubmenu)
            }
        </div>
    </div>
</ClickAnywhereOutside>
        )
    }
}

ItemsPerPageSelector.propTypes = {
    currentItemsPerPage: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default ItemsPerPageSelector