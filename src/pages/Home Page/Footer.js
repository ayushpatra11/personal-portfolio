import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background: #194350;
overflow: hidden;
flex-direction: column;
`;

const Container = styled.div`
display: flex;
height: 150px;
width: 100%;
padding: 3rem calc((100vw-1300px) /2);
justify-content: center;
`;

const Icon = styled.a`
    font-size: 3rem;
    padding: 20px;
`;

const Top = styled.div`
    display: flex;
    flex-wrap: wrap;
    p{
        font-size: 1.5rem;
        color: white;
        text-align: center;
    }
`;

function Footer() {
    return (
        <div>
            <Section>
                <Top>
                <p>
                Please do not hesitate to contact me for suggestions!
                </p>
                </Top>
                <Container>
                        <Icon>
                        
                        </Icon>
                    <Icon href="https://github.com/ayushpatra11" ><i style={{color: "white", cursor: "pointer"}} class="fab fa-github-square"></i></Icon>
                    <Icon href="https://www.linkedin.com/in/ayush-patra-31b36119b/" ><i style={{color: "white", cursor: "pointer"}} class="fab fa-linkedin"></i></Icon>
                    <Icon href="https://twitter.com/ayushpatra11" ><i style={{color: "white", cursor: "pointer"}} class="fab fa-twitter"></i></Icon>
                </Container>
            </Section>
        </div>
    )
}

export default Footer
