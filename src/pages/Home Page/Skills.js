import React, {useEffect} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';


const Section = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background: #194350;
margin-bottom: 70px;
overflow: hidden;
`;

const Container = styled.div`
display: block;
height: 100vh;
width: 100%;
padding: 3rem calc((100vw-1300px) /2);
justify-content: center;


h1{
    font-size: 3rem;
    color: #fff;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 70px;
}
`;

function Skills() {

    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
      }, []);

    return (
        <div  id="skills">
            <Section>
                <Container>
                    <h1>Projects and Papers</h1>
                </Container>
            </Section>
        </div>
        
    )
}

export default Skills
