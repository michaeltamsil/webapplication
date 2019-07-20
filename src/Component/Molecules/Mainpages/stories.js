import React from 'react'
import {storiesOf} from '@storybook/react'
import Mainpages  from '.'
import { HashRouter } from 'react-router-dom';
storiesOf('Molecules/Mainpages',module)
.add('Mainpage',()=>{
    return(
        <HashRouter>
            <Mainpages/>
        </HashRouter>
    )
})