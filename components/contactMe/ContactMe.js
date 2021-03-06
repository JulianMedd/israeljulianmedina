import React from 'react';
import LayoutSection from '../layout/LayoutSection';
import FormContact from './FormContact';

const ContactMe = () => {
    return (
        <LayoutSection title='CONTACTO'>
            <div className="w-full h-full px-6">
                <FormContact/>
            </div>
        </LayoutSection>
    )
}

export default ContactMe;