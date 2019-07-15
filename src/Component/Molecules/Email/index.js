import React, {Component} from 'react'
import {Label,Form,Container,FormGroup, Input, CustomInput, Button} from 'reactstrap'

export default class Email extends Component{
    render(){
        return(
            <Container>
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="E-mail"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="phone" name="phone" id="phone" placeholder="Phone"/>
                    </FormGroup>
                    <FormGroup>
                        <CustomInput type="radio" id="radio1" name="radio" label="This WebApplication is good"/>
                        <CustomInput type="radio" id="radio2" name="radio" label="This WebApplication is the best"/>
                        <CustomInput type="radio" id="radio3" name="radio" label="This WebApplication is Perfect"/>
                        <CustomInput type="radio" id="radio4" name="radio" label="This WebApplication is My Favorite"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="textarea">Comment</Label>
                        <Input  type="textarea" name="text" id="text"/>
                    </FormGroup>
                    <FormGroup>
                              <CustomInput type="checkbox" id="custombox" label="this WebApplication is Perfect" inline/>   
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary">Send</Button>
                    </FormGroup>
                </Form>
            </Container>
        )
    }
}