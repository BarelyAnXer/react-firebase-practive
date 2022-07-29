import Signup from "./components/Signup";
import {Container} from "react-bootstrap";
import {AuthProvider} from "./contexts/AuthContext";
import {BrowserRouter, Route, Routes,} from "react-router-dom"
import {Dashboard} from "./components/Dashboard";
import Login from "./components/Login";

function App() {
    return (
        <>
            <BrowserRouter>
                <Container className="d-flex align-items-center justify-content-center"
                           style={{
                               minHeight: "100vh"
                           }}>
                    <AuthProvider>
                        <div className="w-100"
                             style={{maxWidth: "400px"}}>

                            <Routes>
                                <Route path="/"
                                       element={<Dashboard/>}/>
                                <Route path="/signup"
                                       element={<Signup/>}/>
                                <Route path="/login"
                                       element={<Login/>}/>
                                {/*<Route path="*" element={<Navigate to="/" replace />} />*/}
                            </Routes>

                        </div>
                    </AuthProvider>
                </Container>

            </BrowserRouter>


        </>
    );
}

export default App;


