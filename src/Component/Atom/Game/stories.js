import React from 'react'
import {storiesOf} from '@storybook/react'
import Game  from '.'
storiesOf('Molecules/Game',module)
.add('Game',()=>{
    return(
        <Game/>
    )
})