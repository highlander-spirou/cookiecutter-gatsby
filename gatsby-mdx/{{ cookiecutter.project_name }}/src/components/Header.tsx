import React from 'react'
import { Link } from 'gatsby'

const Header = ({title}) => {
    return (
        <div className='flex items-center text-xl font-semibold h-20 bg-white border-b-2'>
            <Link to='/'>
                <span className='ml-5'>{title}</span>
            </Link>
        </div>
    )
}

export default Header