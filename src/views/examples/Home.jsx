import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

const Home = props => (
    
    <div className="Home">
        {console.log('%c INSULINA', "color:white;background-color:green;font-size:100px")}
        <PageTitle
            title="Módulo Hooks"
            subtitle="Hooks são uma nova adição ao React 16.8." />
    </div>
)

export default Home