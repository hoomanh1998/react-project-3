import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';

const FullPost = () => {

    const [post, setPost] = useState('');
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const post = await axios(
                'https://jsonplaceholder.typicode.com/posts' + pathname
            );
            const comments = await axios(
                'https://jsonplaceholder.typicode.com/posts' + pathname + '/comments'
            );
            setIsLoading(false);
            setPost(post.data);
            setComments(comments.data)
        };
        fetchData();
    }, [pathname]);

    return (
        <>
            {isLoading ?
                <Spinner />
                :
                <div>
                    <h3>Post:</h3>
                    <Card className="text-center mb-5 mx-auto">
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <h3>Comments:</h3>
                    <ListGroup className="my-3">
                        {comments.map(comment => (
                            <ListGroup.Item
                                key={comment.id}>
                                <p><strong>Name:</strong> {comment.name}</p>
                                <p><strong>Email:</strong> {comment.email}</p>
                                <p>{comment.body}</p>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            }
        </>
    )
}

export default FullPost;