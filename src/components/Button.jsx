import styled from 'styled-components';

const Btn = styled.button`
    min-height: 40px;
    width: 100%;
    background-color: ${props => props.color};
    color: white;
    border-radius: 15px;
    border:0;
    text-align: center;
    cursor:pointer;
`;

const Button = ({ color, text }) => {
    return (
        <>
            <Btn color={color}>
                <span>
                    {text}
                </span>
            </Btn>
        </>
    );
}

export default Button;
