import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Main: React.FC = () => {
    return (
        <>
            <Title> My First Next.js Page !!!</Title>
            <Link href="/list">
                <a>Go to List</a>
            </Link>
        </>
    );
};

export default Main;

const Title = styled.h1`
    color: red;
`;
