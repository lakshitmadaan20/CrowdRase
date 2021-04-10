import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from '../routes'

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted color="blue">
        <Menu inverted  secondary>
          <Menu.Item>
            <h2>Crowd Rase</h2>
          </Menu.Item>
          
          <Link  route={'/about/show'}>
          <Menu.Item
          position="right"
            name='about'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
        </Link>

        <Link route={'/'}>
        <Menu.Item
            name='home'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Link>
        </Menu>
      </Segment>
    )
  }
}