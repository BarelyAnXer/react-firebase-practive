import React, {useRef, useState} from 'react';
import {Form, Button, Card, Alert} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext";
import {Link} from "react-router-dom";

function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword, currentUser} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            setError("")
            setMessage("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch (error) {
            console.log(error)
            setError("Failed to Reset Password")
        }
        setLoading(false);
    }


    return (
        <>
            <Card>
                <h2 className="text-center mb-4">Password Reset</h2>
                {error && <Alert variant={"danger"}>{error}</Alert>}
                {message && <Alert variant={"success"}>{message}</Alert>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                                      ref={emailRef}
                                      required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading}
                            className="w-100"
                            type="submit">Reset Password</Button>
                </Form>

                <div className="w-100 text-center mt-3">
                    <Link to={"/login"}>Login</Link>
                </div>

            </Card>

            <div className="w-100 text-center mt-2">
                Need an Account? <Link to={"/signup"}>Signup</Link>
            </div>

        </>
    );

}

export default ForgotPassword;