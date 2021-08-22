import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
// import ServicesSection from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Typescript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'React Js'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Python'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Java'} progress={'65%'} width={'65%'} />
                <SkillsSection skill={'Web Design'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                {/* <ServicesSection image={design} title={'Web design'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'Game Development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                /> */}
            </div>

        </div>
    )
}

export default AboutPage;
