/*
 * CAUTION: THIS FILE IS GENERATED
 * ALL EDITS MUST BE MADE IN tmpl/ComponentStuffer.mst.js
 */

import React, { Component } from 'react';
import '@instructure/ui-themes/lib/canvas';
import './ComponentStuffer.css';
import * as Components from '@instructure/ui-core/lib/components';
import shortid from 'shortid';

// templated imports
{{#codeBlocks}}
import {{displayName}} from '@instructure/ui-core/lib/components/{{displayName}}';
{{/codeBlocks}}

// other imports
import Lorem from 'lorem-ipsum';
import moment from 'moment';
import 'moment/min/locales';
import BreadcrumbLink from '@instructure/ui-core/lib/components/Breadcrumb';
import ListItem from '@instructure/ui-core/lib/components/List';
import Grid, { GridRow, GridCol } from '@instructure/ui-core/lib/components/Grid';
import MenuItem from '@instructure/ui-core/lib/components/Menu';
import MenuItemFlyout from '@instructure/ui-core/lib/components/Menu';
import MenuItemGroup from '@instructure/ui-core/lib/components/Menu';
import MenuItemSeparator from '@instructure/ui-core/lib/components/Menu';
import MetricsListItem from '@instructure/ui-core/lib/components/MetricsList';
import RadioInputGroup from '@instructure/ui-core/lib/components/RadioInputGroup';
import TabPanel from '@instructure/ui-core/lib/components/TabList';

// DELETE ME after all are enabled
// import RadioInput from '@instructure/ui-core/lib/components/RadioInput';
// import ScreenReaderContent from '@instructure/ui-core/lib/components/ScreenReaderContent';
// import Select from '@instructure/ui-core/lib/components/Select';
// import Text from '@instructure/ui-core/lib/components/Text';
// import TextInput from '@instructure/ui-core/lib/components/TextInput';

const avatarImage = '';
const PlaceholderIcon = '';
const placeholderImage = () => '';
const iconExample = '';
const lorem = {
  sentence () {
    return Lorem({
      count: 1,
      units: 'sentences'
    })
  },
  paragraph () {
    return Lorem({
      count: 1,
      units: 'paragraphs'
    })
  },
  paragraphs (count) {
    return Lorem({
      count: count || Math.floor(Math.random() * 10),
      units: 'paragraphs'
    })
  }
};

const code = {
  {{#codeBlocks}}
  {{displayName}}: {{{ code }}},
  {{/codeBlocks}}
};

const ignoreEls = [
  {{#ignoreEls}}
  '{{.}}',
  {{/ignoreEls}}
];

const availableEls = [
  'AccessibleContent',
  'Alert',
  'ApplyLocale',
  'ApplyTheme',
  'Autocomplete',
  'Avatar',
  'Badge',
  'Billboard',
  'Breadcrumb',
  'Button',
  'Checkbox',
  'CheckboxGroup',
  'CloseButton',
  'Container',
  'ContextBox',
  'DateInput',
  'DatePicker',
  'Dialog',
  'FileDrop',
  'FormField',
  'FormFieldGroup',
  'Grid',
  'Heading',
  'Image',
  'InlineSVG',
  'Link',
  'List',
  'Mask',
  'Media',
  'Menu',
  'MetricsList',
  'Modal',
  'NumberInput',
  'Overlay',
  'Pagination',
  'Pill',
  'Popover',
  'PopoverMenu',
  'Portal',
  'Position',
  'PresentationContent',
  'Progress',
  'RadioInput',
  'RadioInputGroup',
  'RangeInput',
  'Rating',
  'ScreenReaderContent',
  'Select',
  'Spinner',
  'SVGIcon',
  'Table',
  'TabList',
  'Tag',
  'Text',
  'TextArea',
  'TextInput',
  'TimeInput',
  'ToggleDetails',
  'Tooltip',
  'Transition',
  'Tray',
  'TreeBrowser'
];

function difference(a1, a2) {
  let result = [];
  for (let i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) === -1) {
      result.push(a1[i]);
    }
  }
  return result;
}

const elsMinusIgnored = difference(availableEls, ignoreEls);
console.log(elsMinusIgnored);

class ComponentStuffer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      component: elsMinusIgnored[0],
      size: 'small',
      variant: 'info'
    };
  }

  handleComponentOnChange = (event) => {
    this.setState({ component: event.target.value });
  }

  handleSizeOnChange = (event) => {
    this.setState({ size: event.target.value });
  }

  handleVariantOnChange = (event) => {
    this.setState({ variant: event.target.value });
  }

  render() {
    const els = [];
    console.log(Object.keys(code));
    const firstElPropsList = Object.assign({}, code[this.state.component].props);
    console.log(firstElPropsList);
    for (let secondEl in code) {
      if (code.hasOwnProperty(secondEl)) {
        firstElPropsList.key = shortid.generate();
        firstElPropsList.size = this.state.size;
        firstElPropsList.variant = this.state.variant;
        console.log('this.state.component', this.state.component);
        console.log('firstElPropsList', firstElPropsList);

        const secondElPropsList = Object.assign({}, code[secondEl].props);
        secondElPropsList.key = shortid.generate();
        secondElPropsList.size = this.state.size;
        secondElPropsList.variant = this.state.variant;

        console.log('secondEl', secondEl);
        console.log('secondElPropsList', secondElPropsList);

        const el = React.createElement(Components[this.state.component], firstElPropsList,
          React.createElement(Components[secondEl], secondElPropsList)
        );

        els.push(el)
      }
    }

    return (
      <div>
        <Grid>
          <GridRow>
            <GridCol width="6">
              <Heading>
                Freak Show
              </Heading>
            </GridCol>
            <GridCol>
              <Select
                label="Components"
                value={this.state.component}
                onChange={this.handleComponentOnChange}
              >
                {elsMinusIgnored.map(el => <option>{el}</option>)}
              </Select>
            </GridCol>
            <GridCol>
              <Select
                label="Size"
                value={this.state.size}
                onChange={this.handleSizeOnChange}
              >
                <option>small</option>
                <option>medium</option>
                <option>large</option>
              </Select>
            </GridCol>
            <GridCol>
              <Select
                label="Variant"
                value={this.state.variant}
                onChange={this.handleVariantOnChange}
              >
                <option>info</option>
                <option>success</option>
                <option>warning</option>
                <option>error</option>
              </Select>
            </GridCol>
          </GridRow>
        </Grid>
        {els.map(el => <div>{el}<hr /></div>)}
      </div>
    );
  }
}

export default ComponentStuffer;
