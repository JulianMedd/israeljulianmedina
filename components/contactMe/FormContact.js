import React from 'react';
import { Formik } from 'formik';
import Input from './Input';

const FormContact = () => {

    return (
            <Formik
                initialValues={{
                    name:'',
                    email: '',
                    message: '',
                }}

                validate = {values => {
                    const errors = {};
                  
                    if (!values.name) {
                      errors.name = 'Required';
                    } else if (values.name.length > 14) {
                      errors.name = 'Must be 15 characters or less';
                    }
                  
                    if (!values.email) {
                      errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                      errors.email = 'Invalid email address';
                    }
                  
                    return errors;
                }}

                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit
                })=>(
                    <form
                        className='flex flex-col'
                        onSubmit={handleSubmit}
                    >
                        <Input
                            placeholder='Nombre'
                            type='text'
                            name='name'
                            onChange={handleChange}
                            value={values.name}
                        />
                        {errors.name ? (<p>error</p>) : null}
                        <Input
                            placeholder='Email'
                            type='email'
                            name='email'
                            onChange={handleChange}
                            value={values.email}
                        />
                        <Input
                            textArea={true}
                            placeholder='Mensaje'
                            name='message'
                            onChange={handleChange}
                            value={values.message}
                        />
                        <button type="submit" className='bg-indigo-400 py-2 px-4 rounded-md md:w-3/5 text-white'>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
    )
}

export default FormContact;
