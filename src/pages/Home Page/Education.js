import React, {useEffect} from 'react';
import {motion, useViewportScroll, useTransform} from 'framer-motion';
import styled from 'styled-components';
import HxlsEdu from '../../images/hxls.png';
import MujEdu from '../../images/muj.png';

const Section = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background: #fff;
margin-bottom: 270px;
`;

const Container = styled.div`
display: block;
height: 100vh;
width: 100%;
padding: 3rem calc((100vw-1300px) /2);
justify-content: center;


h1{
    font-size: 3rem;
    color: #194350;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 70px;
}
`;

const Cardsdiv = styled(motion.div)`
margin: 30px;
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
@media screen and (max-width: 768px){
    
    flex-direction: column;
    }
`;

const Image = styled(motion.img)`
height: 100%;
width: 100%;
border: 4px solid grey;
border-radius: 50%;
position: absolute;
top: -70px;
max-height: 8rem;
max-width: 8rem;
@media screen and (max-width: 768px){
    max-height: 6rem;
    max-width:6rem;
}

`;

const Cards = styled(motion.div)`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius:40px;
  margin: 50px;
  width: 40%;
  position: relative;
  
  justify-content: center;

h1{
    margin: 10px;
    font-size: 1.5rem;
    color: #194350;
}

p{
    margin: 30px;
    font-size: 1rem;
    color: #194350;
}

@media screen and (max-width: 1079px){
    
    width: 90%;
    }
`;



function Education() {


    // const { scrollYProgress } = useViewportScroll()
    // const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  
    // style={{ scale }}

// // style={{
//     scaleY: scrollYProgress
// }}
useEffect(() => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
  }, []);

    return (
        <div id="education">
            <Section>
                <Container>
                    <motion.h1
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >Education</motion.h1>

                    <Cardsdiv >
                        <Cards 
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                        <Image src={MujEdu}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{
                            scale: 0.8,
                            rotate: -360,
                            borderRadius: "100%"
                        }}></Image>
                        <h1>MUJ</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                        </Cards>
                        <Cards
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        > 
                        <Image src={HxlsEdu}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{
                            scale: 0.8,
                            rotate: -360,
                            borderRadius: "100%"
                        }}></Image>
                        <h1>HXLS</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                        </Cards>
                    </Cardsdiv>
                </Container>
            </Section>
        </div>
    )
}



export default Education
