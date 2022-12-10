import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
const LanguageChange = () => {
  return (
    <div className='select'>
    <LanguageIcon className='icon'/>
        <select name="" id="">
            <option value="en">English</option>
            <option value="rus">Russian</option>
        </select>
    </div>
  )
}

export default LanguageChange