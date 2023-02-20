import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function PostList (props) {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>{props.number} {props.post.title}</h1>
                        <p>{props.post.body}</p>
                    </Col>
                    <Col>
                        <Button onClick={() => props.remove(props.post)}>Delete</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PostList