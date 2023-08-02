import React from 'react'
import { Link } from 'gatsby'

const Card = ({ title, link }) => {
    return (
        <div className='border-[1px] rounded-lg p-5'>
            <p className='text-2xl font-semibold'>{title}</p>
            <Link to={`/${link}`}>
                <span>Link</span>
            </Link>
        </div>
    )
}

export default Card