import React, {useRef} from 'react';
import {Form, Button, Card} from "react-bootstrap"

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return (
        <>
            <Card>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                                      ref={emailRef}
                                      required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      ref={passwordRef}
                                      required></Form.Control>
                    </Form.Group>
                    <Form.Group id="passwordConfirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"
                                      ref={passwordConfirmRef}
                                      required></Form.Control>
                    </Form.Group>
                    <Button className="w-100"
                            type="submit">
                        Sign up
                    </Button>
                </Form>
            </Card>

            <div className="w-100 text-center mt-2">
                Already have and account ? Log In
            </div>

        </>
    );
}

export default Signup;