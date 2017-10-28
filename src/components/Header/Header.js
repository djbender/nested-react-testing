import React, { Component } from 'react';
import ApplyTheme from '@instructure/ui-core/lib/components/ApplyTheme'
import Container from '@instructure/ui-core/lib/components/Container'
import Heading from '@instructure/ui-core/lib/components/Heading'
import Grid, { GridCol, GridRow } from '@instructure/ui-core/lib/components/Grid'
import Select from '@instructure/ui-core/lib/components/Select'
import {arrayOf, string, func} from 'prop-types';
import './Header.css';

class Header extends Component {
  static propTypes = {
    sizes: arrayOf(string).isRequired,
    variants: arrayOf(string).isRequired,
    components: arrayOf(string).isRequired,
    component: string.isRequired,
    componentOnChange: func.isRequired,
    size: string.isRequried,
    sizeOnChange: func.isRequired,
    variant: string.isRequired,
    variantOnchange: func.isRequired
  }

  bothSizeAndVariant () {
    if (this.props.sizes && this.props.variants) {
      return true
    }
  }

  renderOptions (prop) {
    return prop.map((option, index) => {
      return (
        <option key={index} value={option}>{option}</option>
      )
    })
  }

  render() {
    return (
      <header className="Header">
        <ApplyTheme theme={{
          [Select.theme]: {
            borderTopColor: 'white',
            borderBottomColor: 'white',
            borderLeftColor: 'white',
            borderRightColor: 'white',
            borderWidth: '0.125rem',
            color: 'white',
            arrowColor: 'white',
            background: 'transparent',
            focusOutlineColor: 'white',
            focusBorderColor: 'white'
          },
          [Heading.theme]: {
          }
        }}>
          <Container as="div" padding="medium">
            <Grid startAt="medium" vAlign="middle">
              <GridRow>
                <GridCol>
                  <h1 className="Header__name">
                    <span className="Header__nameIntro">
                      Inst-UI freak show
                    </span>
                    {this.props.component}
                  </h1>
                </GridCol>
                <GridCol
                  width={{
                    small: 12,
                    medium: (this.bothSizeAndVariant()) ? 6 : 4,
                    large: (this.bothSizeAndVariant()) ? 6 : 3
                  }}
                >
                  <Grid vAlign="middle">
                    <GridRow>
                      <GridCol width="6">
                        <Select
                          label="Component"
                          value={this.props.component}
                          onChange={this.props.componentOnChange}
                        >
                          {this.renderOptions(this.props.components)}
                        </Select>
                      </GridCol>
                      {(this.props.sizes)
                        ? <GridCol width="3">
                          <Select
                            label="Size"
                            value={this.props.size}
                            onChange={this.props.sizeOnChange}
                          >
                            {this.renderOptions(this.props.sizes)}
                          </Select>
                        </GridCol> : null
                      }
                      {(this.props.variants)
                        ? <GridCol width="3">
                          <Select
                            label="Variant"
                            value={this.props.variant}
                            onChange={this.props.variantOnChange}
                          >
                            {this.renderOptions(this.props.variants)}
                          </Select>
                        </GridCol> : null
                      }
                    </GridRow>
                  </Grid>
                </GridCol>
              </GridRow>
            </Grid>
          </Container>
        </ApplyTheme>
      </header>
    )
  }
}

export default Header;
