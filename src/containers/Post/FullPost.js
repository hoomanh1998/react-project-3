import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import { Store } from '../../store/store';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions';

const FullPost = (props) => {

    const { state, dispatch } = useContext(Store);
    const { pathname } = useLocation();

    useEffect(() => {
        dispatch(actions.fetchFullPost(pathname));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {state.isLoading ?
                <Spinner />
                :
                <div>
                    <h3>Post:</h3>
                    <Card className="text-center mb-5 mx-auto">
                        <Card.Body>
                            <Card.Title>{state.fullPost.post.title}</Card.Title>
                            <Card.Text>
                                {state.fullPost.post.body}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <h3>Comments:</h3>
                    <ListGroup className="my-3">
                        {state.fullPost.comments.map(comment => (
                            <ListGroup.Item
                                key={comment.id}>
                                <p><strong>Name:</strong> {comment.name}</p>
                                <p><strong>Email:</strong> {comment.email}</p>
                                <p>{comment.body}</p>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Button
                        onClick={() => props.history.push('/posts')}
                        variant="primary">
                        Go Back Home
                    </Button>
                </div>
            }
        </>
    )
}

export default withRouter(FullPost);