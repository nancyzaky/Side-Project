import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

function HeaderBar() {
  return (
    <div className='Header_Bar'>
      <button className='Favs-Menu'>
        <AiOutlineMenu className='Menu-Icon' />
      </button>
    </div>
  );
}

export default HeaderBar;
