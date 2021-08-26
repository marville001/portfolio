import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

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
                
            </div>

        </div>
    )
}

export default AboutPage;
