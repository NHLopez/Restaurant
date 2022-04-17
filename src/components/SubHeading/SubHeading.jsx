import React from 'react';

import { images } from '../../constants'

// dynamic rendering for title?
const SubHeading = ({title}) => (
  <div style={{marginBottom: '1rem'}}> 
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt="spoon"/>
  </div>
);

export default SubHeading;
