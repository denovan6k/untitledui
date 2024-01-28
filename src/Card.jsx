// import React from 'react';
import { Icon } from '@iconify/react';
// import Button from './Button';
import PropTypes from 'prop-types';

function Card({ image, altText,text1,text2,text3,icon,iconclassname}) {
  return (
    <div className='mx-auto p-6 h-44 w-96 bg-white border-2 rounded-lg'>
      <div className=''>
        <div className='flex justify-between'>
        <p className='text-base'>{text1}</p>
        <Icon icon='charm:menu-kebab' className='' color='grey'/>
        </div>
       
        <div className='pt-6'>
          <div className='flex justify-between'>
          <h1 className='text-4xl font-semibold'>{text2}</h1>
          
          </div>
          <div className="flex justify-between"> {/* Use items-end to align items at the end */}
            {/* <Button label="40% vs last month" icon={<Icon icon="emojione-v1:rocket" />} className="text-green" /> */}
            <div className='flex mt-4'>
            <Icon icon={icon} color={ iconclassname} className='mt-1'/>
            <p className='pl-2'>{text3}</p>
            </div>
            <img src={image} alt={altText} className="w-32 h-16  -mt-6" /> {/* Move self-end here */} 
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  altText: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconclassname: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired
  
};

export default Card;
