import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

class Banner extends Component {
  static defaultProps = {
    componentName: PropTypes.string.isRequired,
    componentIntro: PropTypes.string.isRequired,
    teaserText: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="Banner">
        <span className="Banner__teaserText">{this.props.teaserText}</span>
        <h2 className="Banner__heading">
          <span className="Banner__text">
            <span className="Banner__componentIntroText">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0"
                y="0"
                className="BannerSVG"
                viewBox="0 0 406 40"
                enableBackground="new 0 0 406 40"
                preserveAspectRatio="none"
              >
                <path className="BannerSVG__shadow" d="M0,0c0,0,13.9,33.4,66.1,33.4s62.4-15.2,62.4-15.2s26,21.6,75.4,21.6s77.9-21.6,77.9-21.6s28,14.8,59.6,14.8
          S403.5,18.4,406,0H0z"/>
                <path className="BannerSVG__background" d="M0,0c0,0,13.9,30.4,66.1,30.4s62.4-15.2,62.4-15.2s26,21.6,75.4,21.6s77.9-21.6,77.9-21.6s28,14.8,59.6,14.8
          S400.1,18.4,406,0H0z"/>
                <path className="BannerSVG__shading" d="M34.6,4.1c0,0,51.4,6.3,88.1,2.2v2.3c0,0-38.3,7.8-67.3,8.9c0,0,47.3,0.7,67.3-6v4.3c0,1,0.9,1.9,2.3,2.5
          c2.6-1.8,3.4-3.2,3.4-3.2s1.4,1.1,4.1,2.9c1.1-0.6,1.7-1.4,1.7-2.2v-3.2c81.9,30.3,141.7,0,141.7,0v3.2c0,0.8,0.6,1.6,1.6,2.1
          c2.8-1.7,4.2-2.8,4.2-2.8s1.8,0.9,4.9,2.3c0.6-0.5,0.9-1.1,0.9-1.7v-4.3c20.6,6.5,72.7,5.6,72.7,5.6c-27-1-67.1-7.6-72.7-8.6V6.1
          c36.7,4.1,89.5-2,89.5-2c-65.7,2.6-85.8,0.2-89.5-0.4V0H276v3c-62.9,8.1-134.1,0.9-141.7,0.1V0h-11.6v3.8
          C119.7,4.3,101.3,6.7,34.6,4.1z M134.3,5.3C220.2,16,276,5.2,276,5.2v4.9c-67.1,25.9-138.6,1-141.7-0.1V5.3z"/>
              </svg>
              {this.props.componentIntro}
            </span>
            <span className="Banner__componentNameText">{this.props.componentName}</span>
          </span>
        </h2>
      </div>
    )
  }
}

export default Banner;
