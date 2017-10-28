import React, { Component } from 'react';
import Container from '@instructure/ui-core/lib/components/Container'
import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import './Test.css';

class Test extends Component {
  static PropTypes = {
    children: PropTypes.node.isRequired,
    testComponent: PropTypes.string.isRequired,
    pageComponent: PropTypes.string.isRequired
  }

  static defaultProps = {
  }

  renderTeaser () {
    const teasers = [
      'Avert your Gaze from the HIDEOUS sight of',
      'Recoil in TERROR as you Lay Eyes on',
      'Nature Never Intended You to See',
      'A PERVERSION of the NATURAL ORDER!',
      'Stuff of NIGHTMARES',
      'You can Never UNSEE it!',
      'Not for the Faint of Heart!',
      'Quake in FEAR and Disbelief at',
      'People of GOOD TASTE! Turn away from',
      'It is NOT prudent to linger too long over',
      'God himself cannot look upon',
      'If you DARE, cast your eyes upon',
      'An abomination! TERRIBLE to behold!',
      'Gaze at your OWN RISK',
      'Angels cry gazing upon'
    ]

    const selection = Math.floor(Math.random() * teasers.length) + 1
    return teasers[selection - 1]
  }

  render() {
    return (
      <div className="Test">
        <Banner
          componentIntro={`${this.props.pageComponent} Containing`}
          componentName={this.props.testComponent}
          teaserText={this.renderTeaser()}
        />
        <Container as="div" textAlign="center" padding="large medium medium">
          {this.props.children}
        </Container>
      </div>
    )
  }
}

export default Test;
