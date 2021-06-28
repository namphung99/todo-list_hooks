import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'

SelectedField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    options: PropTypes.array,
    disabled: PropTypes.bool,
    label: PropTypes.string
};

SelectedField.defaultProps = {
    options: [],
    label: ''

}


function SelectedField(props) {
    const {
        form, field, 

        label,options
    } = props;

    const {name, value, onChange, onBlur } = field;
    const {values,errors,touched} = form;
    const showError  = errors[name] && touched[name];

    // handle changeEvent 
    const selectedOption = options.find(options => options.value === value);

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent)
    }
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Select 
                id={name}
                {...field} // bao gồm {name,value, onChange, onBlur} = field
                value = {selectedOption}
                onChange={handleSelectedOptionChange}
                options = {options}
                className = {showError ? 'is-invalid' : ''}
            />
        </div>
    );
}

export default SelectedField;