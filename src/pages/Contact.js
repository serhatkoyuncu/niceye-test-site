import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';


function Contact() {
    const matches = useMediaQuery('(min-width:600px)');

    return <span>{`(min-width:600px) matches: ${matches}`}</span>;
  }

export default Contact
