import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

import { graphql, useStaticQuery } from "gatsby"

const Team = () => {
  const query = useStaticQuery(graphql`
  query TeamDataQuery {
    allTeamDataJson {
      edges {
        node {
          id
          photo {
            publicURL
          }
          name
          position
          description
          serviceFirst {
            icon
            title
          }
          serviceSecond {
            icon
            title
          }
        }
      }
    }
  }
  `);

  const teamData = query.allTeamDataJson.edges;

  console.log(teamData)

  const [slideIndex, setSlideIndex] = useState(1);

  const swipeObject = {
    onSwipedLeft: () => handleSwipe("next"),
    onSwipedRight: () => handleSwipe("prev"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    trackTouch: true
  };

  const handlersFirst = useSwipeable(swipeObject);

  const handlersSecond = useSwipeable(swipeObject);

  const handlersThird = useSwipeable(swipeObject);

  const handlersFourth = useSwipeable(swipeObject);


  let slideIndexArr = [];
  teamData.map(({ node }) => slideIndexArr.push(node.id));

  const handleSwipe = dir => {
    switch(dir) {
      case 'prev':
        slideIndex === 1 ? setSlideIndex(slideIndexArr.length) : setSlideIndex(slideIndex - 1);
        break;

      case 'next':
        slideIndex === slideIndexArr.length ? setSlideIndex(1) : setSlideIndex(slideIndex + 1);
        break;

      default:
        console.log("none")
    }
  }

  return (
    <section className="team">
    <div className="team__wrapper container">
      <h4 data-sal="slide-right" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease" className="g-subtitle">OUR TEAM</h4>

      <div className="team__content">
        <div>
          <div {...handlersFirst} className="team-person"  data-sal="slide-right" data-sal-duration="1000" data-sal-delay="450" data-sal-easing="ease">
            {teamData.map(({ node }) => node.id === slideIndexArr[slideIndex - 1] ?
              <div className="team-person__item" key={node.id}>
                <div className="team-person__photo">
                  <img className="team-person__source" src={node.photo.publicURL} alt="Team Member" draggable="false"/>
                </div>
                
                <div className="team-person__info">
                  <h5 className="team-person__name">{node.name}</h5>
                  <p className="team-person__position">{node.position}</p>
                </div>
              </div> : null
            )}
          </div>

          <div className="team-controls">
          <button data-sal="slide-right" data-sal-duration="1000" data-sal-delay="450" data-sal-easing="ease" className="team-controls__item" onClick={() => handleSwipe("prev")}>
              <svg className="team-controls__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L4 16L12 24" stroke="#333333" stroke-width="2" stroke-linecap="square"/>
                <path d="M28 16L5.33334 16" stroke="#333333" stroke-width="2" stroke-linecap="square"/>
                <path d="M4.00016 16L5.3335 16" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>

            <button data-sal="slide-right" data-sal-duration="1000" data-sal-delay="450" data-sal-easing="ease" className="team-controls__item"  onClick={() => handleSwipe("next")}>
            <svg className="team-controls__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 24L28 16L20 8" stroke="#333333" stroke-width="2" stroke-linecap="square"/>
              <path d="M4 16L26.6667 16" stroke="#333333" stroke-width="2" stroke-linecap="square"/>
              <path d="M27.9998 16L26.6665 16" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
            </svg>
            </button>
          </div>

        </div>

        <div>
          <div data-sal="slide-right" data-sal-duration="1000" data-sal-delay="450" data-sal-easing="ease" {...handlersSecond} className="team-about">
            <h5 className="team-about__title">About</h5>
            {teamData.map(({ node }) => node.id === slideIndexArr[slideIndex - 1] ?
                <p className="team-about__text" key={node.id}>{node.description}</p> : null
            )}
          </div>
  
          <div className="team-services">
            <h5 data-sal="slide-right" data-sal-duration="1000" data-sal-delay="450" data-sal-easing="ease" className="team-services__title">Services</h5>

            <div className="team-services__content" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="450" data-sal-easing="ease">
            {teamData.map(({ node }) => node.id === slideIndexArr[slideIndex - 1] ?
              <div {...handlersThird}  className="team-services__item" key={node.id}>
                <img className="team-services__icon" src={node.serviceFirst.icon} alt="Service Icon" draggable="false"/>
                <h5 className="team-services__desc">{node.serviceFirst.title}</h5>
              </div> : null
            )}
            {teamData.map(({ node }) => node.id === slideIndexArr[slideIndex - 1] ?
              <div {...handlersFourth}  className="team-services__item" key={node.id}>
                <img className="team-services__icon" src={node.serviceSecond.icon} alt="Service Icon" draggable="false"/>
                <h5 className="team-services__desc">{node.serviceSecond.title}</h5>
              </div> : null
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Team;