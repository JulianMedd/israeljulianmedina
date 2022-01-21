import React, { useState } from 'react';
import { Formik } from 'formik';
import Input from './Input';
import PopUp from './PopUp';

const FormContact = () => {
    const [isOpenPopUp, setIsOpenPopUp] = useState(false)
    const [name, setName] = useState("")

    const closePopUp = () => setIsOpenPopUp(!isOpenPopUp)

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
                      errors.name = 'Ingrese su nombre';
                    } else if (values.name.length > 14 || values.name.length < 4) {
                      errors.name = 'Ingresar mas de 4 y menos de 15 caracteres';
                    }
                  
                    if (!values.email) {
                      errors.email = 'Ingrese su mail';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                      errors.email = 'Email invalido';
                    }
                  
                    return errors;
                }}

                onSubmit={(values)=>{
                    setIsOpenPopUp(true)
                    setName(values.name)
                }}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    touched
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
                            error={errors.name}
                            touched={touched.name}
                        />
                        <Input
                            placeholder='Email'
                            type='email'
                            name='email'
                            onChange={handleChange}
                            value={values.email}
                            error={errors.email}
                            touched={touched.email}
                        />
                        <Input
                            textArea={true}
                            placeholder='Mensaje'
                            name='message'
                            onChange={handleChange}
                            value={values.message}
                        />
                        <button type="submit" className='bg-indigo-400 py-2 px-4 rounded-md md:w-3/5 text-white hover:bg-indigo-600' onClick={()=>closePopUp()}>
                            Submit
                        </button>
                        {
                            isOpenPopUp && <PopUp name={name} closePopUp={closePopUp} />
                        }
                    </form>
                )}
            </Formik>
    )
}

export default FormContact;
