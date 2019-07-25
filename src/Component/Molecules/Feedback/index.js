import React,{Component} from 'react'
import {Button,Form, FormGroup, Label,Input, FormText, Container} from 'reactstrap'
export default class feedback extends Component{
    render(){
        return(
            <Container>
                <div className="text-center" style={{fontSize:"30px",fontFamily: "Overpass, Sans-serif"}}>Feedback</div>
            <Form action="https://formspree.io/riverhuang011@gmail.com" method="POST">
                <FormGroup>
                    <Label for="Email">E-mail</Label>
                    <Input type="Email" name="Email" id="Email" placeholder="E-mail" required/>
                    
                </FormGroup>
                <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Name" required/>
                </FormGroup>
                <FormGroup>
                    <Label for="File">File</Label>
                    <Input type="file" name="file" id="file"/>
                    <FormText color="muted">
                        input the file that you want to send to me
                    </FormText>
                </FormGroup>
                <FormGroup >
                    <Label for="Message">Message</Label>
                    <Input type="textarea" name="text" id="Message" required/>
                </FormGroup>
                <Button body inverse color="primary">send</Button>
            </Form>
            </Container>
        )
    }
}