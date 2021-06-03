import React, {useEffect} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Aos from 'aos';



const Section = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background: #194350;
overflow: hidden;
`;

const Container = styled.div`
display: block;
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

const Cardsdiv = styled(motion.div)`
display: flex;
justify-content: center;
flex-direction: row;
max-width: 100%;
flex-wrap: wrap;
@media screen and (max-width: 768px){
    max-width: 80%;
    flex-direction: column;
    }
`;


const Cards = styled(motion.div)`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background: #fff;
  border-radius:40px;
  margin: 50px;
  width: 40%;
  position: relative;
  justify-content: center;

h1{
    margin-top: 35px;
    font-size: 2rem;
    color: #194350;
}

h3{
    text-decoration: underline;
    text-align: center;
    font-size: 1.2rem;
    color: #194350;
}
h4{
    text-align: center;
    font-size: 0.9rem;
    color: #194350;
}

p{
    text-align: center;
    margin: 30px;
    font-size: 1rem;
    color: #194350;
}

@media screen and (max-width: 1079px){
    
    width: 90%;
    }
`;


function Internships() {
    
    useEffect(() => {
        Aos.init();
    }, [])
    
    return (
        <div id="internships">
            <Section>
                <Container>
                    <h1>Internships</h1>

                    <Cardsdiv>
                        <Cards
                        data-aos="fade-left"
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        >
                            <h1>CERN</h1>
                            <h3>CMS Trainee</h3>
                            <h4>October, 2016</h4>
                            <p>Was part of a group of students who visited CERN as Trainees under the CMS experiment.</p>
                        </Cards>
                        <Cards
                        data-aos="fade-left"
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        >
                            <h1>Intelliswift Software India</h1>
                            <h3>Project Intern</h3>
                            <h4>December, 2020</h4>
                            <p>Learnt the basics of SpringBoot in a week long internship.</p>
                        </Cards>
                        <Cards
                        data-aos="fade-left"
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        >
                            <h1>Netfotech Solutions</h1>
                            <h3>Project Intern</h3>
                            <h4>April 2021 - Present</h4>
                            <p>Working on a fullstack project on Health Care, which allows a user to browse through hospitals nearby, book appointments, track their vitals and medical history and more.
                            In this project, I'm working in a group of 3 people. Front end is made using ReactJS and Django is used for backend.</p>
                        </Cards>
                    </Cardsdiv>
                </Container>
            </Section>
        </div>
    )
}

export default Internships
