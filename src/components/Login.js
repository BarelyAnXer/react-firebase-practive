import React, {useRef, useState} from 'react';
import {Form, Button, Card, Alert} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext";
import {Link, useNavigate} from "react-router-dom";

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login, currentUser} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch (error) {
            console.log(error)
            setError("Failed to login")
        }
        setLoading(false);
    }


    return (
        <>
            <Card>
                <h2 className="text-center mb-4">Login</h2>
                {error && <Alert variant={"danger"}>{error}</Alert>}
                {/*{currentUser && <Alert variant={"primary"}>{use}</Alert>}*/}

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
                    <Button disabled={loading}
                            className="w-100"
                            type="submit">Login</Button>
                </Form>
            </Card>

            <div className="w-100 text-center mt-2">
                Need an Account? <Link to={"/signup"}>Signup</Link>
            </div>

        </>
    );
}

export default Login;