import React from 'react';
import Card from 'react-bootstrap/Card';

const Post = (props) => {
    return (
        <Card className="text-center my-3 mx-auto" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Link href={"/" + props.id}>Show more...</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Post;