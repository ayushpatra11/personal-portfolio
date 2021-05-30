import React, {useEffect} from 'react';
import {motion, useViewportScroll, useTransform} from 'framer-motion';
import styled, {keyframes} from 'styled-components';
import HxlsEdu from '../../images/hxls.png';
import MujEdu from '../../images/muj.png';
import Aos from 'aos';
import Cine from '../../images/cine.png'


const floating = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 18px); }
    100%   { transform: translate(0, -0px); }
`;

const Section = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background: #fff;
margin-bottom: 270px;
`;

const Container = styled.div`
display: block;
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




// animation: ${floating} 3s ease-in-out infinite;

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
    margin-top: 35px;
    margin-left: 15px;
    font-size: 1.5rem;
    color: #194350;
}

h3{
    padding-top: 20px;
    margin: 20px;
    font-size: 1rem;
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
    Aos.init({duration: 500});
  }, []);

    return (
        <div id="education">
            <Section>
                <Container>
                    <motion.h1
                    data-aos="fade-down"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >Education</motion.h1>

                    <Cardsdiv >
                        <Cards 
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            data-aos="fade-right"
                        >
                        <Image src={MujEdu}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{
                            scale: 0.8,
                            rotate: -360,
                            borderRadius: "100%"
                        }}></Image>
                        <h1>Manipal University Jaipur</h1>
                        <h3>Bachelor of Technology - BTech</h3>
                        <p>Computer Science</p>
                        <p>2018-2022</p>
                        <p>TMA-Pai Merit Scholarship Holder</p>
                        <p>8.604 (Till 3rd Year)</p>
                        <p>Other Activities: ACM (First year), Aperture (First Year)</p>
                        
                        </Cards>
                        <Cards
                            data-aos="fade-left"
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
                        <h1>Heritage Xperiential Learning School</h1>
                        <h3>High School Diploma</h3>
                        <p>Science</p>
                        <p>2004-2018</p>
                        <p>96.2% - 12th Grade, CBSE</p>
                        <p>Other Activities: Click (Photography Club), Cinephilia (Videography Club)</p>
                        </Cards>
                    </Cardsdiv>

                    
                </Container>
            </Section>
        </div>
    )
}



export default Education
