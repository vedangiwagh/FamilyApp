import React, { useState } from "react"
import { Card, Button, Alert,Container,Row, Col } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import ProfileInfo from "./Profile"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    
    <Container>
      <Row>
        <Col>
        <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link> */}
//           <ProfileInfo />
        </Card.Body>
        <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      </Card>
        </Col>
      
<Col><Card>
        <Card.Body>
          <h2 className="text-center mb-4">Family Tree</h2>
          
        </Card.Body>
      
      </Card></Col>
      
<Col>
<Card>
        <Card.Body>
        <h2 className="text-center mb-4">Lists</h2>
        </Card.Body>
      </Card>
</Col>
      
      </Row>
    </Container>
      
      
    
  )
}
