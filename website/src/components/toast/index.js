import styled from 'styled-components';

const StyledToast = styled.div`
    top: 0;
    right: 0;
    height: 3rem;
    width: 7rem;
    background-color: #fff;
    padding: 1rem 0;
`;

export default function Toast(props) {
    return (
        <StyledToast className='z6 absolute container al-center'>{props.err}</StyledToast>
    )
}