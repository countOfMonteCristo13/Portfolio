import React, { Component } from "react";
import "./work.css";
import images from "../../constants/images";
import Subheading from "../../components/Subheading/Subheading";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../projects";

import { Link } from "react-router-dom";

class Work extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    this.props.onProjectChange(i); // update project state to 1
    const body = document.querySelector("html");
    body.classList.add("instant-scroll");
  }

  render() {
    return (
      <div className="p__work" id="work">
        <Subheading title="Work" />
        <div className="p__work_section">
          <div className="p__work_cards">
            <Link to={`project/${projects[0].title}`}>
              <ProjectCard
                image={images.magicBrain}
                title="Image Detection App"
                alt="fda"
                onClick={() => this.handleClick(0)}
              />
            </Link>
            <Link to={`project/${projects[1].title}`}>
              <ProjectCard
                image={images.pokemon}
                title="PokeDex Web App"
                alt="pokemon"
                onClick={() => this.handleClick(1)}
              />
            </Link>
            <Link to={`project/${projects[2].title}`}>
              <ProjectCard
                image={images.obodinac}
                title="Obodinac Website"
                alt="obodinac"
                onClick={() => this.handleClick(2)}
              />
            </Link>
            <Link to={`project/${projects[3].title}`}>
              <ProjectCard
                image={images.velimirPorfolio}
                title="Velimir's Portfolio"
                alt="portfolio"
                onClick={() => this.handleClick(3)}
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
