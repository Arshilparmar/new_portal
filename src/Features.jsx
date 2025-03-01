import React from 'react'
import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar,faLandmark,faSackDollar,faMedal,faRobot,faEarthAmericas,faScaleBalanced,faGraduationCap,faSeedling,faNotesMedical,faPalette,faPlane,faVideo} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';


const features = [
    { name: "Education", icon: <><FontAwesomeIcon icon={faGraduationCap} /></> , href:'/education'},
    { name: "Bollywood", icon: <><FontAwesomeIcon icon={faStar} /></>, href:'/bollywood' },
    { name: "Politics", icon: <><FontAwesomeIcon icon={faLandmark} /></>, href:'/politics' },
    { name: "Business", icon: <><FontAwesomeIcon icon={faSackDollar} /></>, href:'/business' },
    { name: "Sports ", icon: <><FontAwesomeIcon icon={faMedal} /></>, href:'/sports'},
    { name: "Technology", icon: <><FontAwesomeIcon icon={faRobot} /></>, href:'/technology' },
    { name: "World", icon: <><FontAwesomeIcon icon={faEarthAmericas} /></>, href:'/world'},
    { name: "Crime", icon: <><FontAwesomeIcon icon={faScaleBalanced} /></>, href:'/crime' },
    { name: "Environment", icon: <><FontAwesomeIcon icon={faSeedling} /></>, href:'/environment' },
    { name: "Health", icon: <><FontAwesomeIcon icon={faNotesMedical} /></>, href:'/health' },
    { name: "Culture", icon: <><FontAwesomeIcon icon={faPalette} /></>, href:'/culture'},
    { name: "Travel", icon: <><FontAwesomeIcon icon={faPlane} /></>, href:'/travel'},
    { name: "Video", icon: <><FontAwesomeIcon icon={faVideo} /></>, href:'/video' },
  ];

function Features() {
  const navigate = useNavigate();
    return (
        <div className="features">
          <h3>Features</h3>
          <ul>
            {features.map((feature, index) => (
              <li key={index} >
                <button onClick={() => navigate(feature.href)}>
                <span className="icon">{feature.icon}</span>
                {feature.name}</button>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Features
