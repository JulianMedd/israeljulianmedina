import React from 'react';
import LayoutSection from '../layout/LayoutSection';
import FormContact from './FormContact';

const ContactMe = () => {
    return (
        <LayoutSection title='CONTACT ME'>
            <div className="w-full h-full md:px-6">
                <FormContact/>
            </div>
        </LayoutSection>
    )
}

export default ContactMe;
