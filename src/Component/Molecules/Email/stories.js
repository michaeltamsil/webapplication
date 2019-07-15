import React from 'react'
import {storiesOf} from '@storybook/react'
import Email from '.'
storiesOf('Molecules/Email', module)

.add('Email',()=>{
    return(
        <Email/>
    )
})