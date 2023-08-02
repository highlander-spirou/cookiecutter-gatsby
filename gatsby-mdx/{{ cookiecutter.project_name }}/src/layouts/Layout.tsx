import React from 'react'
import { useSiteMetadata } from '@hooks/useSiteMetadata'
import Header from '@components/Header'

const Layout = ({ children }) => {
    const { title } = useSiteMetadata()
    return (
        <>
            <Header title={title} />
            {children}
        </>
    )
}

export default Layout