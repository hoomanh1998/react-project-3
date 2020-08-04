import React from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

const Home = () => {
    return (
        <>
            <h1 className="text-center mb-5">Welcome!</h1>
            <div className="d-flex justify-content-center">
                <LinkContainer to={"/posts"}>
                    <Button href="/posts" size="lg">
                        See Posts
                    </Button>
                </LinkContainer>

            </div>
        </>
    );
}

export default Home;