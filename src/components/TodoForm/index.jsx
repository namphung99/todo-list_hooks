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

    const validationSchema = yup.object().shape({
        title: yup.string().required('Vui lòng nhập trường này!'),
    });
    const initialValues = {
        title: '',
        status: 1,
    }
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
                                className="btn"
                                type="submit"
                            >Submit</button>
                        </Form>
                    );
                }
            }
        </Formik>
    );
}

export default TodoForm;