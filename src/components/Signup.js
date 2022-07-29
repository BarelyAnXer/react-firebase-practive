import React, {useRef, useState} from 'react';
import {Form, Button, Card, Alert} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext";
import {Link} from "react-router-dom";


function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signUp, currentUser} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords does not match")
        }

        try {
            setError("")
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
        } catch (error) {
            console.log(error)
            setError("Failed to create Account")
        }
        setLoading(false)
    }


    return (
        <>
            <Card>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant={"danger"}>{error}</Alert>}
                {currentUser.email}
                <Form onSubmit={handleSubmit}>
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
                    <Button disabled={loading}
                            className="w-100"
                            type="submit">
                        Sign up
                    </Button>
                </Form>
            </Card>

            <div className="w-100 text-center mt-2">
                Already have and account ? <Link to={"/login"}>Log In</Link>
            </div>

        </>
    );
}

export default Signup;