import React, { Component } from 'react';
import { Card, Button, Grid } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import Donation from '../components/Donation'




class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),    
      };
    });

    return <Card.Group items={items} />;
  }

   
  render() {

    return (
      <Layout>
        <h1>Trending Campaigns</h1>
        <hr style={{borderTop:'1px solid black'}}/>
        <Grid>
        <Grid.Row>
            <Grid.Column width={10}>{this.renderCampaigns()}</Grid.Column>

            <Grid.Column width={6}>
            <Link route="/campaigns/new">
            <a>
              <Button
               className="btn btn-block"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
              <br/>
              <hr style={{borderTop:'1px solid black'}}/>
              <div>
                <h2 className="text-center">Perks Of Donating</h2>
                <br/>
                  <div className="jumbotron">
                      <Donation/>
                  </div>
              </div>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignIndex;