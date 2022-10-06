import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledDetalhes = styled.div`
`;

export default function Detalhes() {
    return (
        <StyledDetalhes>
            <div className='detalhes__overlay' />
            <div className='detalhes__content'></div>
        </StyledDetalhes>
    )
}