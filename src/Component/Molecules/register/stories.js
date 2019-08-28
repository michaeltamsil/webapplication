import React from 'react'
import {storiesOf} from '@storybook/react'
import Mainpages  from '.'
import { HashRouter } from 'react-router-dom';
storiesOf('Molecules/Register',module)
.add('Register',()=>{
    return(
        <HashRouter>
            <Mainpages/>
        </HashRouter>
    )
})