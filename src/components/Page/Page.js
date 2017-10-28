import React, { Component } from 'react';
import Container from '@instructure/ui-core/lib/components/Container'
import Alert from '@instructure/ui-core/lib/components/Alert'
import Avatar from '@instructure/ui-core/lib/components/Avatar'
import Badge from '@instructure/ui-core/lib/components/Badge'
import Billboard from '@instructure/ui-core/lib/components/Billboard'
import Button from '@instructure/ui-core/lib/components/Button'
import ContextBox from '@instructure/ui-core/lib/components/ContextBox'
import DateInput from '@instructure/ui-core/lib/components/DateInput'
import DatePicker from '@instructure/ui-core/lib/components/DatePicker'
import Grid, { GridCol, GridRow } from '@instructure/ui-core/lib/components/Grid'
import Select from '@instructure/ui-core/lib/components/Select'
import Table from '@instructure/ui-core/lib/components/Table'
import ToggleDetails from '@instructure/ui-core/lib/components/ToggleDetails'
import TreeBrowser from '@instructure/ui-core/lib/components/TreeBrowser'
// import PropTypes from 'prop-types';
import Header from '../Header/Header'
import Test from '../Test/Test'
import Clown from '../Clown/Clown';
import './Page.css';

class Page extends Component {
  render() {
    return (
      <div className="Page">
        <Header
          name="Alert"
          variant={['info', 'danger', 'success']}
          size={['small', 'medium', 'large']}
        />
        <main className="Page__Main">
          <Container as="div" padding="x-large none none">
            <Test
              testComponent='ToggleDetails'
              pageComponent='Alert'
            >
              <Alert
                closeButtonLabel="Close"
                transition="none"
              >
                <ToggleDetails summary="Click to hide me!" defaultExpanded>
                  Hi there blah blah blah
                </ToggleDetails>
              </Alert>
            </Test>
            <Test
              testComponent='Button'
              pageComponent='Alert'
            >
              <Alert
                closeButtonLabel="Close"
                transition="none"
              >
                <Button>A button label</Button>
              </Alert>
            </Test>
            <Test
              testComponent='ContextBox'
              pageComponent='Alert'
            >
              <Alert
                closeButtonLabel="Close"
                transition="none"
              >
                <ContextBox padding="small">
                  I am a context box
                </ContextBox>
              </Alert>
            </Test>
            <Test
              testComponent='DatePicker'
              pageComponent='Alert'
            >
              <Alert
                closeButtonLabel="Close"
                transition="none"
              >
                <DatePicker
                  previousLabel="previous month"
                  nextLabel="next month"
                  onSelectedChange={function () { console.log(arguments) }}
                  onRenderedChange={function () { console.log(arguments) }}
                />
              </Alert>
            </Test>
            <Test
              testComponent='DateInput'
              pageComponent='Alert'
            >
              <Alert
                closeButtonLabel="Close"
                transition="none"
              >
                <DateInput
                  previousLabel="previous month"
                  nextLabel="next month"
                  placeholder="Choose"
                  label="Birthday"
                  invalidDateMessage="Invalid date: Birthday"
                />
              </Alert>
            </Test>
            <Test
              testComponent='TreeBrowser'
              pageComponent='Alert'
            >
              <Alert
                closeButtonLabel="Close"
                transition="none"
              >
                <TreeBrowser
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
                  rootId={1}
                />
              </Alert>
            </Test>
            <Test
              testComponent='Grid'
              pageComponent='ContextBox'
            >
              <ContextBox>
                <Grid visualDebug>
                  <GridRow>
                    <GridCol>
                      I am a GridCol
                    </GridCol>
                    <GridCol>
                      I am a GridCollkjdfglkj ldkfjg lkjdfglkj lsdkfj lkjdfglfkjgl ckjfdsglskjflkfdjglfkjl kjsdfglkjsvldslkdfjglk jfd lkdjsglk jdsflkj lkdjfglk jdlskfjsdlkkfjglk fdlglk jv
                    </GridCol>
                  </GridRow>
                </Grid>
              </ContextBox>
            </Test>
            <Test
              testComponent='DateInput'
              pageComponent='ContextBox'
            >
              <ContextBox padding="medium">
                <DateInput
                  previousLabel="previous month"
                  nextLabel="next month"
                  placeholder="Choose"
                  label="Birthday"
                  invalidDateMessage="Invalid date: Birthday"
                />
              </ContextBox>
            </Test>

            <Test
              testComponent='TreeBrowser'
              pageComponent='ContextBox'
            >
              <ContextBox padding="medium">
                <TreeBrowser
                  defaultExpanded={[1, 3]}
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
                  rootId={1}
                />
              </ContextBox>
            </Test>

            <Test
              testComponent='DateInput'
              pageComponent='Table'
            >
              <Table
                caption="Table caption">
                <thead>
                  <tr>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Something</td>
                    <td>Something else</td>
                    <td>
                      <DateInput
                        previousLabel="previous month"
                        nextLabel="next month"
                        placeholder="Choose"
                        label="Birthday"
                        invalidDateMessage="Invalid date: Birthday"
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Test>

            <Test
              testComponent='Avatar'
              pageComponent='Badge'
            >
              <Badge count={99}>
                <Avatar name="Christopher Hart" />
              </Badge>
            </Test>

            <Test
              testComponent='Billboard'
              pageComponent='Badge'
            >
              <Badge count={99}>
                <Billboard
                  message="Click this link"
                  href="http://instructure.com"
                  hero="&#9733;"
                />
              </Badge>
            </Test>

            <Test
              testComponent='Select'
              pageComponent='Button'
            >
              <Button>
                <Select label="A select label">
                  <option value="foo">Foo</option>
                  <option value="bar">Bar</option>
                </Select>
              </Button>
            </Test>

          </Container>
          <Clown />
          <Clown variant="right" />
        </main>
      </div>
    )
  }
}

export default Page;
