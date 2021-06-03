import React, { useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
import Aos from 'aos';


const floating1 = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 18px); }
    100%   { transform: translate(0, -0px); }
`;
const floating2 = keyframes`
    0% { transform: translate(0,  18px); }
    50%  { transform: translate(0, 0px); }
    100%   { transform: translate(0, 18px); }
`;

const Section = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background: #fff;
margin-bottom: 70px;
overflow: hidden;
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

const Icons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Icon1 = styled.div`
    justify-content: center;
    margin: 30px;
    padding: 20px;
    font-size: 10rem;
    
    animation: ${floating1} 3s ease-in-out infinite;
`;

const Icon2 = styled.div`
    justify-content: center;
    margin: 30px;
    padding: 20px;
    font-size: 10rem;
    
    animation: ${floating2} 3s ease-in-out infinite;
`;

function Skills() {

    useEffect( ()=>{
        Aos.init({duration:500});
    },[]);
    return (
        <div id="skills">
            <Section>
               <Container>
               <h1 data-aos="fade-up">Skills</h1>
                    <Icons>
                        <Icon1>
                            <i style={{color: "#194350"}} class="fab fa-java"></i>
                        </Icon1>
                        <Icon2>
                            <i style={{color: "#194350"}} class="fab fa-cuttlefish">++</i>
                        </Icon2>
                        
                        <Icon1><i style={{color: "#194350"}} class="fab fa-js-square"></i></Icon1>
                        <Icon2><i style={{color: "#194350"}} class="fab fa-python"></i></Icon2>
                        <Icon1><i style={{color: "#194350"}} class="fab fa-html5"></i></Icon1>
                        <Icon2><i style={{color: "#194350"}} class="fab fa-react"></i></Icon2>
                        <Icon1><i style={{color: "#194350"}} class="fab fa-node-js"></i></Icon1>
                        <Icon2><i style={{color: "#194350"}} class="fab fa-github"></i></Icon2>
                    </Icons>
               
               
               
               
               
               
               </Container>
            </Section>            
        </div>
    )
}

export default Skills
