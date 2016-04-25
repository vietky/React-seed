import React, { PropTypes } from 'react';

class FilterControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedValue: (this.props.initialSelectedValue ? this.props.initialSelectedValue : this.props.data[0])
        };
        this._onSelectAnItem = this._onSelectAnItem.bind(this);
    }
    _onSelectAnItem(e){
        var item = this.props.data[e.target.value];
        this.setState({
            selectedValue: item
        });
        this.props.onSelected(item);
    }
    render(){
        let createOption = (item, index) => {
            return (
                <option value={index} key={index}>{item.label}</option>
            );
        };
        return (
<select className="form-control" onChange={this._onSelectAnItem}>
    {
        this.props.data.map(createOption)
    }
</select>
        )
    }
}

FilterControl.propTypes = {
    initialSelectedValue: PropTypes.object,
    data: PropTypes.array.isRequired,
    onSelected: PropTypes.func.isRequired,
}
export default FilterControl;