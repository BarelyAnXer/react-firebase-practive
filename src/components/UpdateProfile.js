import React, {useRef, useState} from 'react';
import {Form, Button, Card, Alert} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {updateEmail, updatePassword, currentUser} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords does not match")
        }

        const promises = []
        setLoading(true)
        setError("")
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            navigate("/login")
        }).catch((error) => {
            setError("failed to update account")
        }).finally(() => {
            setLoading(false);
            setError("")
        })

        setLoading(false)
    }


    return (
        <>
            <Card>
                <h2 className="text-center mb-4">Update Profile</h2>
                {error && <Alert variant={"danger"}>{error}</Alert>}
                {currentUser && currentUser.email}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                                      ref={emailRef}
                                      defaultValue={currentUser.email}
                                      required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      ref={passwordRef}
                                      placeholder={"leave bank to keep the same"}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group id="passwordConfirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"
                                      ref={passwordConfirmRef}
                        ></Form.Control>
                    </Form.Group>
                    <Button disabled={loading}
                            className="w-100"
                            type="submit">Update</Button>
                </Form>
            </Card>

            <div className="w-100 text-center mt-2">
                <Link to={"/"}>Cancel</Link>
            </div>

        </>
    );
}

export default UpdateProfile;