/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Skills.css'

const SkillCard = (props) =>
{
    return <div className="skill">
        <img src={props.skillUrl} alt="link of image"></img>
        <p>{props.skillName}</p>
    </div>
}
export default SkillCard;