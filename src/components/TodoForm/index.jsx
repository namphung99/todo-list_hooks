import React from 'react';
import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
import * as yup from 'yup';

import './style.css';
import InputField from '../../commons/custom-field/InputField/InputField';
import SelectedField from '../../commons/custom-field/SelectedField';
import {TODO_STATUS_OPTIONS} from '../../constants/global';


TodoForm.propTypes = {
    onSubmit: PropTypes.func,
}


function TodoForm(props) {
    const{initialValues, isAddMode} = props;

    const validationSchema = yup.object().shape({
        title: yup.string().required('Vui lòng nhập trường này!'),
    });
    return (
        <Formik 
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            // onSubmit = {values => console.log("submit: ", values)}
            onSubmit={props.onSubmit}

        >
            { 
                formikProps => {
                    const {values, errors, touched} = formikProps;

                    return (
                        <Form className = "todo__form">
                            <FastField 
                                name = "title"
                                component = {InputField}

                                label = "Todo"
                                placeholder = "Enter your todo"
                            />

                            <FastField 
                                name = "status"
                                component = {SelectedField}

                                label = "Status"
                                type = 'select'
                                options = {TODO_STATUS_OPTIONS}
                            />
                            <button
                                className= {isAddMode ? 'btn btn-primary' : 'btn btn-success'}
                                type="submit"
                            >{isAddMode ? 'Add todo' : 'Save todo'}</button>
                        </Form>
                    );
                }
            }
        </Formik>
    );
}

export default TodoForm;