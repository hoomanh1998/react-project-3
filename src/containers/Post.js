import React from 'react';
import Card from 'react-bootstrap/Card';

const Post = (props) => {
    return (
        <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Post;