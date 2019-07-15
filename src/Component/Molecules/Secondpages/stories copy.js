import React from 'react'
import {storiesOf} from '@storybook/react'
import Mainpages  from '.'
storiesOf('Molecules/Mainpages',module)
.add('Mainpage',()=>{
    return(
        <Mainpages/>
    )
})