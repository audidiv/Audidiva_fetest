import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';

export default class ButtonComponent extends Component {
  render() {
    return (
        <Button className={"btn " + this.props.btnStyle}>
            <Link
            to={this.props.route}
            style={{color: "white", textDecoration: "none"}}>
                {this.props.icon} {this.props.text}
            </Link>
        </Button>
    )
  }
}