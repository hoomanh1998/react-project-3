import React from 'react';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

const Post = (props) => {
    return (
        <Card className="text-center my-3 mx-auto" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <LinkContainer to={"/posts/" + props.id}>
                    <Card.Link>Show more...</Card.Link>
                </LinkContainer>
            </Card.Body>
        </Card >
    )
}

export default Post;