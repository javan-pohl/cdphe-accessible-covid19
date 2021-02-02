import { Alert } from 'tabler-react';
import React from 'react';

const MyAlert = ({type, text}) => {
    return (
        <Alert type={type}>
            {text}
        </Alert>
    )
}

export default MyAlert;