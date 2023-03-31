import { Container } from '@mui/system';
import { Alert } from '@mui/material';

export default function CustomAlert() {

    return (
        <Alert className='customAlert' severity="error">This is an error alert — check it out!</Alert>

    );
}
