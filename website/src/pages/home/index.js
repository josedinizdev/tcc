import React from 'react';
import { Link } from 'react-router-dom';
import StyledHome from './styles';

export default function Home() {
    return (
        <StyledHome>
            <h1>teste</h1>
            <Link to='/login'>Login</Link>
        </StyledHome>
    )
};