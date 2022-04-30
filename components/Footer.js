import styled from 'styled-components';

function Footer() {
    return ( 
        <Container>
            <h1>Footer</h1>
        </Container>
     );
}

export default Footer;

const Container = styled.div`
    margin-top: 10px;
    height: 100px;
    background-color: white;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`;