import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import Layout from '../../components/Layout';
import { Router } from '../../routes';

class CampaignNew extends Component {
  state ={
    minimumContribution: '',
    description:'',
    campaignName:'',
    ownerName:'',
    campaignGoal:'',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({loading:true, errorMessage: ''});
    try{
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(this.state.minimumContribution,this.state.campaignName,this.state.description,this.state.campaignGoal,this.state.ownerName)
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/');
    } catch (err) {
       this.setState({errorMessage: err.message});
    }
      this.setState({loading:false});
  };

  render() {
    return(
      <Layout>
        <h1 className="text-center">Create a Campaign</h1>
        <br/>
        <div>
        <Form className="jumbotron" onSubmit={this.onSubmit} error={!!this.state.errorMessage} style={{marginBottom:'5px'}}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              required
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={
                event => this.setState({minimumContribution: event.target.value})
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Campaign Name</label>
            <Input
              required
              value={this.state.campaignName}
              onChange={
                event => this.setState({campaignName: event.target.value})
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Campaign Description</label>
            <Input
             required
              value={this.state.description}
              onChange={
                event => this.setState({description: event.target.value})
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Campaign Goal</label>
            <Input
            label="Optional"
            labelPosition="right"
              value={this.state.campaignGoal}
              onChange={
                event => this.setState({campaignGoal: event.target.value})
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Owner Name</label>
            <Input
              required
              value={this.state.ownerName}
              onChange={
                event => this.setState({ownerName: event.target.value})
              }
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          
          <Button loading={this.state.loading} color="green" className="btn btn-block">Submit</Button>
         
        </Form>
        </div>
      </Layout>
    );
  }
}

export default CampaignNew;