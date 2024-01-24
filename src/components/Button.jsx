import styled from 'styled-components';

const Btn = styled.button`
    min-height: 40px;
    width: 100%;
    background-color: ${props => props.color};
    color:${props => props.textColor};
    border-radius: 10px;
    border:0;
    text-align: center;
    cursor:pointer;
    margin-bottom:10px;
`;

const Button = ({ color,textColor, text, onClick }) => {
    return (
        <>
            <Btn color={color} textColor={textColor} onClick={onClick}>
                <span>
                    {text}
                </span>
            </Btn>
        </>
    );
}

export default Button;
