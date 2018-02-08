import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import ViewTable from './ViewTable';

const Overview = ({ data }) => (
  <Grid padded='horizontally'>
    <Grid.Column>
      <Header textAlign='center' as='h1'>Cryptocurrency Market Overview</Header>
      <div> Average: </div>
      {/* <SortableTable data={data} /> */}
      <ViewTable data={data} />
    </Grid.Column>
  </Grid>
);

export default Overview;
