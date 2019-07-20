import React from 'react'
import {storiesOf} from '@storybook/react'
import Allpages  from '.'
import {HashRouter } from 'react-router-dom';
storiesOf('Molecules/Allpages',module)
.add('Allpages',()=>{
    return(
        <HashRouter>
            <Allpages/>
        </HashRouter>
    )
})