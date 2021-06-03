import React, {useEffect} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Hxls from '../images/hxls.png';
import Muj from '../images/muj.png';
import Circle1 from '../images/circle1.png';
import Circle2 from '../images/circle2.png';
import Me from '../images/me.png';
import ParticlesBg from 'particles-bg';

const Section = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background: transparent;
`;


const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
height: 110vh;
width: 100%;
padding: 3rem calc((100vw-1300px) /2);

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`;

const Columnleft = styled.div`
    display: flex;
    color: #194350;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 2rem;

h1{
    margin-bottom: 0.5rem;
    font-size: 2rem;
}

p{
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
}
`;

const Image = styled(motion.img)`
cursor: grab;
height: 100%;
position: absolute;
width: 100%;
max-height: 12rem;
max-width:12rem;
object-fit: contain;
@media screen and (max-width: 768px){
    max-height: 8rem;
    max-width:8rem;
}
`;
const ImageMe = styled(motion.img)`
cursor: grab;
height: 100%;
position: absolute;
width: 100%;
max-height: 26rem;
max-width:26rem;
object-fit: contain;
@media screen and (max-width: 768px){
    max-height: 16rem;
    max-width:16rem;
}
`;

const ImageCircle = styled(motion.img)`
cursor: grab;
height: 100%;
position: absolute;
width: 100%;
object-fit: contain;
max-height: 10rem;
max-width:10rem;
@media screen and (max-width: 768px){
    max-height: 6rem;
    max-width:6rem;
}
`;

const Columnright = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
position: relative;

${Image}:nth-child(1){
 top: 130px;
 right: 200px;
}

${Image}:nth-child(2){
 top: 350px;
 right: 30px;
}
${ImageCircle}:nth-child(3){
 bottom: 220px;
 right: 230px;
}
${ImageCircle}:nth-child(4){
 top: 90px;
 left: 10px;
}
${ImageMe}:nth-child(5){
 top: 260px;
 left: 30px;
}
@media screen and (max-width: 1518px){
    ${Image}:nth-child(1){
 top: 40px;
 right: 70px;
 z-index: 12;
}

${Image}:nth-child(2){
 bottom: 10px;
 right: 30px;
 z-index: 12;
}
${ImageCircle}:nth-child(3){
 bottom: 220px;
 right: 230px;
}
${ImageCircle}:nth-child(4){
 top: 90px;
 left: 10px;
}
${ImageMe}:nth-child(5){
 top: 260px;
 left: 30px;
}
}
@media screen and (max-width: 1218px){
    ${Image}:nth-child(1){
 top: 40px;
 right: 70px;
 z-index: 12;
}

${Image}:nth-child(2){
 top: 700px;
 right: 30px;
 z-index: 12;
}
${ImageCircle}:nth-child(3){
 bottom: 220px;
 right: 230px;
}
${ImageCircle}:nth-child(4){
 top: 90px;
 left: 10px;
}
${ImageMe}:nth-child(5){
 top: 260px;
 left: 30px;
}
}

@media screen and (max-width: 768px){
    ${Image}:nth-child(1){
 top: -160px;
 right: 210px;
}

${Image}:nth-child(2){
 top: -200px;
 right: 30px;
}
${ImageCircle}:nth-child(3){
 bottom: 80px;
 right: 180px;
}
${ImageCircle}:nth-child(4){
 top: 30px;
 left: 10px;
}
${ImageMe}:nth-child(5){
 top: -90px;
 left: 80px;
}
}

`;





function Landing() {
    
    const fadeleft={
        hidden: {opacity: 0, x: -100},
        visible: {opacity: 1, x:0}
    }

    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
      }, []);

    return (
        <div id="landing">
        <Section>
              <Container>
                  <Columnleft>
                  <motion.h1
                  variants={fadeleft}
                  initial='hidden'
                  animate='visible'
                  transition={{duration:1}}>Welcome to my Portfolio</motion.h1>
                  <motion.p
                  variants={fadeleft}
                  initial='hidden'
                  animate='visible'
                  transition={{duration:1}}>Let's Dive in!</motion.p>
                  </Columnleft>
                  <Columnright>
                      <Image src={Hxls} alt="hxls" 
                      whileHover={{scale: 1.05}}
                      drag={true}
                      whileDrag={{scale: 0.5}}
                      dragConstraints={{left:0, right: 0, top: 0, bottom: 0}}
                      initial={{opacity:0, y:-150}}
                      animate={{opacity:1, y:0, transition: {duration:1.5}}}
                      transition={{duration: 1}}></Image>
                      <Image src={Muj} alt="muj"
                      whileHover={{scale: 1.05}}
                      drag={true}
                      whileDrag={{scale: 0.5}}
                      dragConstraints={{left:0, right: 0, top: 0, bottom: 0}}
                      initial={{opacity:0, x:150}}
                      animate={{opacity:1, x:0, transition: {duration:1.5}}}
                      transition={{duration: 1}}></Image>
                      <ImageCircle src={Circle1} alt="circle1"
                      whileHover={{scale: 1.05}}
                      drag={true}
                      whileDrag={{scale: 0.5}}
                      dragConstraints={{left:0, right: 0, top: 0, bottom: 0}}
                      initial={{opacity:0, y:150}}
                      animate={{opacity:1, y:0, transition: {duration:1.5}}}
                      transition={{duration: 1}}></ImageCircle>
                      <ImageCircle src={Circle2} alt="circle2"
                      whileHover={{scale: 1.05}}
                      drag={true}
                      whileDrag={{scale: 0.5}}
                      dragConstraints={{left:0, right: 0, top: 0, bottom: 0}}
                      initial={{opacity:0, x:150}}
                      animate={{opacity:1, x:0, transition: {duration:1.5}}}
                      transition={{duration: 1}}></ImageCircle>
                      <ImageMe src={Me} alt="me"
                      whileHover={{scale: 1.05}}
                      drag={true}
                      whileDrag={{scale: 0.5}}
                      dragConstraints={{left:0, right: 0, top: 0, bottom: 0}}
                      initial={{opacity:0}}
                      animate={{opacity:1, transition: {duration:1.5}}}
                      transition={{duration: 1}}></ImageMe>
                  </Columnright>  
                  
                <ParticlesBg color="#194350" type="cobweb" bg={true}></ParticlesBg>
              </Container>
        </Section>
            
                  </div>
    )
}

export default Landing;
