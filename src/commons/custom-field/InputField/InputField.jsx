import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
}

function InputField(props) {
    const {
        field, form, 

        label, type, placeholder
    } = props;

    const {name, value, onChange, onBlur} = field;
    const {errors, values , touched} = form;
    const showError = errors[name] && touched[name];
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                className= {showError ? 'form-control is-invalid' : 'form-control'} 
                id={name} 
                placeholder={placeholder} 
                {...field}

                invalid={showError}
                />
            {showError && <span className = "error-message">{errors[name]}</span>}
        </div>
    );
}

export default InputField;