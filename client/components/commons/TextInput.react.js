import  React from 'react';
import  { Input } from 'react-bootstrap';
import ElementValidator from '../validator/ElementValidator.react';

let PropTypes = React.PropTypes;

export const TextInput = React.createClass({
    propTypes: {
      inputId : PropTypes.string,
    	inputName : PropTypes.string,
      errorKey:  PropTypes.string,
      validationRules: PropTypes.array,
    	refObj: PropTypes.object,
    	fieldName: PropTypes.string,
    	placeholder: PropTypes.string
    },
    getInitialState: function(){
        return {
            value: this.props.refObj[this.props.fieldName]
        };
    },
    _onChange: function(e)
    {
      this.setState({
        value: e.target.value
      });
      let _validationRules = this.props.validationRules;
      if(_validationRules && _validationRules.length > 0)
      {
        let elementValidator = new ElementValidator(this.props.placeholder, e.target.value, this.props.errorKey, _validationRules);
        if(elementValidator.validate())
        {
          this.props.refObj[this.props.fieldName] = e.target.value;
        }
      }
    },
 	render: function(){
    let cssClass = this.props.className ? this.props.className + " form-control" : "form-control";
 		return (
        	<Input type="text" id={this.props.inputId}
            value={this.state.value}
            className={cssClass}  name={this.props.fieldName}
            placeholder={this.props.placeholder}
            onChange={this._onChange} />
        );
    }
});
