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
import AccessibleContent from '@instructure/ui-core/lib/components/AccessibleContent';
import Alert from '@instructure/ui-core/lib/components/Alert';
import ApplyLocale from '@instructure/ui-core/lib/components/ApplyLocale';
import ApplyTheme from '@instructure/ui-core/lib/components/ApplyTheme';
import Avatar from '@instructure/ui-core/lib/components/Avatar';
import Billboard from '@instructure/ui-core/lib/components/Billboard';
import Breadcrumb from '@instructure/ui-core/lib/components/Breadcrumb';
import Button from '@instructure/ui-core/lib/components/Button';
import Checkbox from '@instructure/ui-core/lib/components/Checkbox';
import CheckboxGroup from '@instructure/ui-core/lib/components/CheckboxGroup';
import CloseButton from '@instructure/ui-core/lib/components/CloseButton';
import Container from '@instructure/ui-core/lib/components/Container';
import ContextBox from '@instructure/ui-core/lib/components/ContextBox';
import DateInput from '@instructure/ui-core/lib/components/DateInput';
import DatePicker from '@instructure/ui-core/lib/components/DatePicker';
import FileDrop from '@instructure/ui-core/lib/components/FileDrop';
import FormField from '@instructure/ui-core/lib/components/FormField';
import FormFieldGroup from '@instructure/ui-core/lib/components/FormFieldGroup';
import Heading from '@instructure/ui-core/lib/components/Heading';
import Image from '@instructure/ui-core/lib/components/Image';
import Link from '@instructure/ui-core/lib/components/Link';
import Media from '@instructure/ui-core/lib/components/Media';
import Menu from '@instructure/ui-core/lib/components/Menu';
import MetricsList from '@instructure/ui-core/lib/components/MetricsList';
import NumberInput from '@instructure/ui-core/lib/components/NumberInput';
import Pill from '@instructure/ui-core/lib/components/Pill';
import PresentationContent from '@instructure/ui-core/lib/components/PresentationContent';
import Progress from '@instructure/ui-core/lib/components/Progress';
import RadioInput from '@instructure/ui-core/lib/components/RadioInput';
import RangeInput from '@instructure/ui-core/lib/components/RangeInput';
import Rating from '@instructure/ui-core/lib/components/Rating';
import ScreenReaderContent from '@instructure/ui-core/lib/components/ScreenReaderContent';
import Select from '@instructure/ui-core/lib/components/Select';
import Spinner from '@instructure/ui-core/lib/components/Spinner';
import Table from '@instructure/ui-core/lib/components/Table';
import TabList from '@instructure/ui-core/lib/components/TabList';
import Tag from '@instructure/ui-core/lib/components/Tag';
import Text from '@instructure/ui-core/lib/components/Text';
import TextArea from '@instructure/ui-core/lib/components/TextArea';
import TextInput from '@instructure/ui-core/lib/components/TextInput';
import TimeInput from '@instructure/ui-core/lib/components/TimeInput';
import ToggleDetails from '@instructure/ui-core/lib/components/ToggleDetails';
import Tooltip from '@instructure/ui-core/lib/components/Tooltip';
import TreeBrowser from '@instructure/ui-core/lib/components/TreeBrowser';

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
  AccessibleContent: <AccessibleContent alt="Alternative text for a screenreader only">
  <Text>
    Presentational content goes here
  </Text>
</AccessibleContent>,
  Alert: <div>
  <Alert
    variant="success"
    closeButtonLabel="Close"
    margin="small"
    transition="none"
  >
    Sample success alert text. I will close w/o a transition out if you close me
  </Alert>
  <Alert
    variant="info"
    closeButtonLabel="Close"
    margin="small"
  >
    Sample info text. I will fade out if you close me.
  </Alert>
  <Alert
    variant="error"
    closeButtonLabel="Close"
    margin="small"
  >
    Sample error text that continues for a while
    to demonstrate what happens when the content stretches over
    several lines. It really does take a lot of prose to get the
    text to wrap when you are on a high resolution screen.
  </Alert>
  <Alert
    variant="warning"
    margin="small"
  >
    Sample warning text. This alert is not dismissible and cannot be closed.
  </Alert>
</div>,
  ApplyLocale: <ApplyLocale locale="fr" timezone="Europe/Paris">
  <DatePicker previousLabel="previous month" nextLabel="next month"/>
</ApplyLocale>,
  ApplyTheme: <ApplyTheme theme={{
    [Link.theme]: { color: 'green' }
  }}>
  <div>
    <p>
      <Link>I should be Green</Link>
    </p>
    <p>
      <ApplyTheme theme={{
          [Link.theme]: { color: 'red' }
        }}>
        <Link>I should be Red</Link>
      </ApplyTheme>
    </p>
    <p>
      <Link theme={{ color: 'purple' }}>I should be Purple</Link>
    </p>
  </div>
</ApplyTheme>,
  Avatar: <Avatar name="Sarah Robinson" src={avatarImage} />,
  Billboard: <Billboard
  size="medium"
  heading="Well, this is awkward."
  message="Think there should be something here?"
  hero={<Image src={placeholderImage(900, 500)} />} />,
  Breadcrumb: <div>

  <Breadcrumb size="small" label="You are here:" margin="none none medium">
    <BreadcrumbLink href="https://instructure.github.io/instructure-ui/">English 204</BreadcrumbLink>
      <BreadcrumbLink
        onClick={function () {
          console.log("This BreadcrumbLink was clicked!")
        }}
      >
        Exploring John Updike
      </BreadcrumbLink>
    <BreadcrumbLink href="https://instructure.github.io/instructure-ui/">The Rabbit Novels</BreadcrumbLink>
    <BreadcrumbLink>Rabbit Is Rich</BreadcrumbLink>
  </Breadcrumb>
  <Breadcrumb label="You are here:" margin="none none medium">
    <BreadcrumbLink href="https://instructure.github.io/instructure-ui/">English 204</BreadcrumbLink>
      <BreadcrumbLink
        onClick={function () {
          console.log("This BreadcrumbLink was clicked!")
        }}
      >
        Exploring John Updike
      </BreadcrumbLink>
    <BreadcrumbLink href="https://instructure.github.io/instructure-ui/">The Rabbit Novels</BreadcrumbLink>
    <BreadcrumbLink>Rabbit Is Rich</BreadcrumbLink>
  </Breadcrumb>
  <Breadcrumb size="large" label="You are here:">
    <BreadcrumbLink href="https://instructure.github.io/instructure-ui/">English 204</BreadcrumbLink>
      <BreadcrumbLink
        onClick={function () {
          console.log("This BreadcrumbLink was clicked!")
        }}
      >
        Exploring John Updike
      </BreadcrumbLink>
    <BreadcrumbLink href="https://instructure.github.io/instructure-ui/">The Rabbit Novels</BreadcrumbLink>
    <BreadcrumbLink>Rabbit Is Rich</BreadcrumbLink>
  </Breadcrumb>
</div>,
  Button: <Button>OK</Button>,
  Checkbox:   <Checkbox label={lorem.sentence()} value="medium" defaultChecked />,
  CheckboxGroup: <FormFieldGroup description={<ScreenReaderContent>CheckboxGroup examples</ScreenReaderContent>}>
  <CheckboxGroup name="sports"
    onChange={function (value) { console.log(value) }}
    defaultValue={['football', 'volleyball']}
    description="Select your favorite sports">
    <Checkbox label="Football" value="football" />
    <Checkbox label="Basketball" value="basketball" />
    <Checkbox label="Volleyball" value="volleyball" />
    <Checkbox label="Other" value="other" />
  </CheckboxGroup>
  <CheckboxGroup name="sports" size="small"
    layout="columns"
    onChange={function (value) { console.log(value) }}
    defaultValue={['football', 'volleyball']}
    description="Select your favorite sports">
    <Checkbox label="Football" value="football" />
    <Checkbox label="Basketball" value="basketball" />
    <Checkbox label="Volleyball" value="volleyball" />
    <Checkbox label="Other" value="other" />
  </CheckboxGroup>
</FormFieldGroup>,
  CloseButton: <CloseButton offset="none">Close</CloseButton>,
  Container: <Container
  as="div"
  visualDebug
  size="small"
  textAlign="center"
  margin="large auto"
  padding="small"
>
  <Text as="div">{lorem.sentence()}</Text>
</Container>,
  ContextBox: <div>
  <ContextBox padding="small" margin="0 large 0 0">
    <Heading level="h3">Hello World</Heading>
  </ContextBox>
  <ContextBox
    margin="0 large 0 0"
    padding="small"
    placement="top"
  >
    <Heading level="h3">Hello World</Heading>
    <Text size="small">Some informational text that is helpful</Text>
  </ContextBox>
  <ContextBox
    margin="0 large 0 0"
    padding="small"
    textAlign="end"
    placement="start"
  >
    <Heading level="h3">Hello World</Heading>
    <Text size="small">This ContextBox is end-text-aligned</Text>
  </ContextBox>
  <ContextBox
    placement="bottom"
    padding="medium"
    variant="inverse"
    size="small"
    margin="x-large 0 0"
  >
    <Text size="small">
      This ContextBox uses the inverse variant and medium padding. Its size prop is set to small,
      which causes long strings like this to wrap. It also has top margin to separate it from
      the ContextBoxes about it.
    </Text>
  </ContextBox>
</div>,
  DateInput: <DateInput
  previousLabel="previous month"
  nextLabel="next month"
  placeholder="Choose"
  label="Birthday"
  onDateChange={function () { console.log(arguments) }}
/>,
  DatePicker: <DatePicker
  previousLabel="previous month"
  nextLabel="next month"
  onSelectedChange={function () { console.log(arguments) }}
  onRenderedChange={function () { console.log(arguments) }}
/>,
  FileDrop: <FileDrop
  accept="image/*"
  onDropAccepted={([file]) => { console.log(`File accepted ${file.name}`) }}
  onDropRejected={([file]) => { console.log(`File rejected ${file.name}`) }}
  label={
    <Billboard
      heading="Upload your image"
      message="Drag and drop, or click to browse your computer"
      hero={<Image src={placeholderImage(1200, 300)} />}
    />
  }
/>,
  FormField: <FormField id="foo" label="Opacity">
  <input id="foo" type="range"/>
</FormField>,
  FormFieldGroup:   <FormFieldGroup
    description="Breakfast"
    rowSpacing="small"
    layout="inline"
    vAlign="middle"
  >
    <TextInput label="Favorite Breakfast Eatery"
      messages={[
      { text: 'Invalid name', type: 'error' }
      ]}
      />
    <Select label="Select Your Favorite Side Dish">
      <option value="apples">Fresh Fruit</option>
      <option value="oranges">Biscuits and Gravy</option>
      <option value="bananas">Bacon</option>
      <option value="watermelon">English Muffins</option>
      <option value="pancakes">Pancakes</option>
    </Select>
    <RadioInputGroup
      name="beverage"
      description="Beverage of Choice"
      defaultValue="coffee"
      layout="columns"
    >
      <RadioInput label="Juice" value="juice" />
      <RadioInput label="Water" value="water" />
      <RadioInput label="Coffee" value="coffee" />
      <RadioInput label="Milk" value="milk" />
      <RadioInput label="Soda" value="soda" />
      <RadioInput label="Hot Tea" value="tea" />
    </RadioInputGroup>
  </FormFieldGroup>,
  Heading: <div>
  <Heading level="h1" as="h2" margin="0 0 x-small">Heading level One</Heading>
  <Heading level="h2" as="h1" margin="0 0 x-small">Heading level Two</Heading>
  <Heading level="h3" margin="0 0 x-small">Heading level Three</Heading>
  <Heading level="h4" margin="0 0 x-small">Heading level Four</Heading>
  <Heading level="h5" margin="0 0 x-small">Heading level Five</Heading>
  <Heading level="reset" as="h2">Heading level reset</Heading>
</div>,
  Image: <Image src={placeholderImage(250, 250)} />,
  Link:   <Link href="https://instructure.github.io/instructure-ui/">I'm a link</Link>,
  Media: <Media
  description={lorem.sentence()}
>
  <Avatar name="Jennifer Stern" />
</Media>,
  Menu: <Menu labelledBy="foobar"
  onSelect={function () { console.log(arguments) }}
  onDismiss={function () { console.log(arguments) }}
>
  <MenuItem href="example.html">Default (Grid view)</MenuItem>
  <MenuItem value="foo">Learning Mastery</MenuItem>
  <MenuItem disabled>Individual (List view)</MenuItem>
  <MenuItemSeparator />
  <MenuItemGroup label="Select one">
    <MenuItem defaultSelected value="one">
      Select me
    </MenuItem>
    <MenuItem value="two">
      Or select me
    </MenuItem>
  </MenuItemGroup>
  <MenuItemSeparator />
  <MenuItemFlyout label="More Options">
    <MenuItemGroup allowMultiple label="Select many">
      <MenuItem defaultSelected value="one">
        Select me
      </MenuItem>
      <MenuItem value="two">
        And select me
      </MenuItem>
      <MenuItem defaultSelected value="three">
        And me
      </MenuItem>
    </MenuItemGroup>
  </MenuItemFlyout>
  <MenuItem value="baz">Open grading history...</MenuItem>
</Menu>,
  MetricsList: <MetricsList>
  <MetricsListItem label="Grade" value="80%" />
  <MetricsListItem label="Late" value="4" />
  <MetricsListItem label="Missing" value="2" />
</MetricsList>,
  NumberInput: <NumberInput label="Age" placeholder="Your age goes here" />,
  Pill: <div>
  <div>
    <Pill
      text="Excused"
      margin="0 0 x-small"
    />
  </div>
  <div>
    <Pill
      variant="danger"
      text="Missing"
      margin="0 0 x-small"
    />
  </div>
  <div>
    <Pill
      variant="success"
      text="Checked In"
      margin="0 0 x-small"
    />
  </div>
  <div>
    <Pill
      variant="primary"
      text="Draft"
    />
  </div>
</div>,
  PresentationContent:   <PresentationContent>
    <Text>
      Presentational content here
    </Text>
  </PresentationContent>,
  Progress: <div>
  <Progress label="Loading completion" valueNow={40} valueMax={60} />
  <br />
  <Progress
    label="Loading completion"
    variant="circle"
    valueNow={40}
    valueMax={60} />
</div>,
  RadioInput:   <RadioInput
    label={lorem.sentence()}
    value="foo"
    name="bar"
    checked
  />,
  RangeInput: <FormFieldGroup description={<ScreenReaderContent>RangeInput examples</ScreenReaderContent>}>
  <RangeInput label="Grading range" defaultValue={50} max={100} min={0} />
  <RangeInput
    layout="inline"
    label="Grading range"
    defaultValue={50}
    max={100} min={0} />
</FormFieldGroup>,
  Rating: <div>
  <Rating
    formatValueText={function (currentRating, maxRating) {
      return currentRating + ' out of ' + maxRating
    }}
    label="Overall rating of freshman year experience"
    valueNow={68.45}
    valueMax={100}
  />
  <br />
  <Rating
    animateFill
    formatValueText={function (currentRating, maxRating) {
      return currentRating + ' out of ' + maxRating
    }}
    label="Overall rating of freshman year experience"
    iconCount={5}
    valueNow={68.45}
    valueMax={100}
  />
</div>,
  ScreenReaderContent: <ScreenReaderContent>
  This content is not visible.
</ScreenReaderContent>,
  Select: <div>
<Select size="small" label="Small">
  <option value="foo">Foo</option>
  <option disabled value="bar">Bar</option>
</Select>
<br />
<Select label="Medium">
  <option value="foo">Foo</option>
  <option disabled value="bar">Bar</option>
</Select>
<br />
<Select size="large" label="Large">
  <option value="foo">Foo</option>
  <option disabled value="bar">Bar</option>
</Select>
</div>,
  Spinner: <div>
  <Spinner title="Loading" size="x-small" />
  <Spinner title="Loading" size="small" margin="0 0 0 medium" />
  <Spinner title="Loading" margin="0 0 0 medium" />
  <Spinner title="Loading" size="large" margin="0 0 0 medium" />
</div>,
  Table: <Table
  caption={<ScreenReaderContent>Some great records</ScreenReaderContent>}>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Best Album</th>
      <th scope="col">Best Song</th>
      <th scope="col">Record Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Beach House</th>
      <td>Depression Cherry</td>
      <td>Zebra</td>
      <td>Sub Pop</td>
    </tr>
    <tr>
      <th scope="row">Pixies</th>
      <td>Surfer Rosa</td>
      <td>Debaser</td>
      <td>4AD</td>
    </tr>
    <tr>
      <th scope="row">Falco</th>
      <td>Falco III</td>
      <td>Rock Me Amadeus</td>
      <td>Capitol Europe</td>
    </tr>
  </tbody>
</Table>,
  TabList: <TabList defaultSelectedIndex={2}>
  <TabPanel title="First Tab">
    <Text>Hello World</Text>
  </TabPanel>
  <TabPanel title="Disabled Tab" disabled>
    <Text>{lorem.paragraphs()}</Text>
  </TabPanel>
  <TabPanel title="Third Tab">
    <Text>{lorem.paragraphs()}</Text>
  </TabPanel>
  <TabPanel title="Fourth Tab" maxHeight="10rem">
    <Text>{lorem.paragraphs()}</Text>
  </TabPanel>
</TabList>,
  Tag:     <div>
      <Tag text="Static" margin="0 xx-small 0 0" />
      <Tag
        text="Clickable"
        margin="0 xx-small 0 0"
        onClick={function () {
          alert("This Tag was clicked")
        }}
      />
      <Tag
        disabled
        text="Disabled clickable"
        onClick={function () {
          alert("This Tag was clicked")
        }}
      />
    </div>,
  Text: <div>
  <Text size="x-small">I'm extra small</Text><br/>
  <Text size="small">I'm small</Text><br/>
  <Text>I'm medium</Text><br/>
  <Text size="large">I'm large</Text><br/>
  <Text size="x-large">I'm extra large</Text><br/>
  <Text size="xx-large">I'm extra extra large</Text>
</div>,
  TextArea: <FormFieldGroup description={<ScreenReaderContent>TextArea examples</ScreenReaderContent>}>
  <TextArea label="Description" resize="vertical" />
  <TextArea label="Description" resize="vertical" layout="inline" />
</FormFieldGroup>,
  TextInput: <TextInput label="Name" placeholder="Doe, John Doe" />,
  TimeInput: <div style={{height: 350}}>
  <TimeInput label='Time' />
</div>,
  ToggleDetails: <ToggleDetails
  summary="Click to hide me!"
  defaultExpanded
>
  <Text weight="bold">I am expanded!</Text> {lorem.paragraph()}
</ToggleDetails>,
  Tooltip: <div>
  <p>
    <Tooltip tip="Hello. I'm a tool tip" as={Link} href="https://instructure.github.io/instructure-ui/">
      Hover or focus me
    </Tooltip>
  </p>
  <p>
    <Tooltip tip="Hello" placement="end" as={Button}>
      Hover or focus me
    </Tooltip>
  </p>
  <p>
    <Tooltip variant="inverse" tip="Hello" placement="bottom">
      <TextInput
        inline
        label="Enter some text"
      >
        Hover or focus me
      </TextInput>
    </Tooltip>
  </p>
</div>,
  TreeBrowser:     <TreeBrowser
      collections={{
        1: {
          id: 1,
          name: "Assignments",
          collections: [2,3],
          items: [3],
          descriptor: "Class Assignments"
        },
        2: { id: 2, name: "English Assignments", collections: [4], items: [] },
        3: { id: 3, name: "Math Assignments", collections: [5], items: [1,2] },
        4: { id: 4, name: "Reading Assignments", collections: [], items: [4] },
        5: { id: 5, name: "Advanced Math Assignments", items: [5]}
      }}
      items={{
        1: { id: 1, name: "Addition Worksheet"},
        2: { id: 2, name: "Subtraction Worksheet"},
        3: { id: 3, name: "General Questions" },
        4: { id: 4, name: "Vogon Poetry"},
        5: { id: 5, name: "Bistromath", description: "Explain the Bistromathic Drive" }
      }}
      defaultExpanded={[1, 3]}
      rootId={1}
    />,
};

const ignoreEls = [
  'Autocomplete',
  'Badge',
  'Dialog',
  'Grid',
  'InlineSVG',
  'List',
  'Mask',
  'Modal',
  'Overlay',
  'Pagination',
  'Popover',
  'PopoverMenu',
  'Portal',
  'Position',
  'RadioInputGroup',
  'SVGIcon',
  'Transition',
  'Tray',
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
