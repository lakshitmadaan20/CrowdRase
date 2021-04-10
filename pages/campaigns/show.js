import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';
import Donation from '../../components/Donation'
import {Bar,Doughnut } from 'react-chartjs-2'

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      campaignOwner: summary[5],
      goal: summary[6],
      name: summary[7],
      description:summary[8]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
      campaignOwner,
      goal,
      name,
      description
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description:
          'The manager created this campaign and can create requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description:
          'You must contribute at least this much wei to become an approver'
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description:
          'A request tries to withdraw money from the contract. Requests must be approved by approvers'
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description:
          'Number of people who have already donated to this campaign'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description:
          'The balance is how much money this campaign has left to spend.'
      },
      {
        header: campaignOwner,
        description: 'Name of the Owner of campaign'
      },
      {
        header: goal,
        description: 'Campaign Goal'
      },
      {
        header: name,
        description: 'Name of the campaign'
          
      },
      {
        header: description,
        description: 'Campaign Description'
      }

    ];

    return <Card.Group items={items} />;
  }


  render() {
    return (
      <Layout>
        <h1 className="bg-secondary text-center text-white">Campaign Details</h1>
        <br/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
              <br/>
              <hr/>
              <div>
                <h2 className="text-center">Perks Of Donating</h2>
                <br/>
                  <div className="jumbotron">
                      <Donation/>
                  </div>
              </div>

            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button className="btn btn-block" inverted color="green">View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
