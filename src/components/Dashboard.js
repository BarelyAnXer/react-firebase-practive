import {Button, Card, Alert} from "react-bootstrap";
import {useState} from "react";
import {useAuth} from "../contexts/AuthContext";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export function Dashboard() {
    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()

    const navigate = useNavigate();

    const handleLogout = async () => {
        setError("");
        try {
            await logout()
            navigate("/login")
        } catch (error) {
            setError("Failed to Logout")
        }
    };

    return <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Dashboard</h2>
                {error && <Alert variant={"danger"}>{error}</Alert>}
                <strong>{currentUser.email}</strong>
                <Link className={"btn btn-primary w-100 mt-3"}
                      to={"/update-profile"}>Update Profile</Link>
            </Card.Body>

            <div className="w-100 text-center mt-2">
                <Button variant={"link"}
                        onClick={handleLogout}>Logout</Button>
            </div>
        </Card>
    </>;

}