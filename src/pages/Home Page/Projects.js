import React, {useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import {motion} from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Shoestorevid from '../../videos/shoestore.mp4'
import Heartcare from '../../videos/heartcare.mp4'
import AppleStore from '../../videos/applestore.mp4';

const floating = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 18px); }
    100%   { transform: translate(0, -0px); }
`;

const Button = styled.a`
    text-decoration: none;
    outline: none;
    margin: 20px;
    padding: 10px;
    font-size: 2rem;
    color: #194350;
    border: 2px solid #194350;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    @media screen and (max-width: 968px){
        font-size: 1.5rem;
    }
    @media screen and (max-width: 768px){
        font-size: 1rem;
    }
&:hover{
    color: #fff;
    background: #194350;
    border: none;
}

`;


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
margin: 20px;
justify-content: center;


h1{
    font-size: 3rem;
    color: #fff;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 70px;
}
`;

const Carddiv = styled.div`
    position: relative;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Video = styled.div`
    justify-content: center;
    overflow:hidden;
    margin: 20px;
    border-radius: 17px;
`;

const Card = styled(motion.div)`

background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  display: grid;
  display-grid-rows: 2fr 1fr;
  transition: 0.3s;
  border-radius:40px;
  margin: 10px;
  width: 50%;
  position: relative;
  justify-content: center;

h1{
    margin: 10px;
    font-size: 1.5rem;
    color: #fff;
}

h3{
    padding-top: 20px;
    margin: 20px;
    font-size: 1rem;
    color: #fff;
}

p{
    margin: 30px;
    font-size: 1rem;
    color: #fff;
}

@media screen and (max-width: 1518px){
    width: 100%;
}
`;

function Projects() {

    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
        Aos.init({duration: 1500});
      }, []);

    return (
        <div  id="projects">
            <Section>
                <Container>
                    <h1 data-aos ="fade-down" >Top Projects</h1>
                    <Carddiv>
                        <Card data-aos="fade-right">
                            <Video >
                                <video style={{maxWidth:"100%", alignItems:"center"}} autoPlay="autoPlay" loop src={Shoestorevid} type="video/mp4" />
                            </Video>
                            <Button href="https://github.com/ayushpatra11/shoe-store-updated" >Visit Git Repository</Button>
                        </Card>
                        <Card data-aos="fade-left">
                            <Video >
                                <video style={{maxWidth:"100%", alignItems:"center"}} autoPlay="autoPlay" loop src={Heartcare} type="video/mp4" />
                            </Video>
                            <Button href="https://github.com/ayushpatra11/heart-care" >Visit Git Repository</Button>
                            
                        </Card>
                        <Card data-aos="fade-right">
                            <Video >
                                <video style={{maxWidth:"100%", alignItems:"center"}} autoPlay="autoPlay" loop src={AppleStore} type="video/mp4" />
                            </Video>
                            <Button href="https://github.com/ayushpatra11/apple-store-3d/tree/master" >Visit Git Repository</Button>
                            
                        </Card>
                    </Carddiv>
                </Container>
            </Section>
        </div>
        
    )
}

export default Projects
