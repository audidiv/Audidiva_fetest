import React, { Component } from 'react'
import TableContactComponent from '../components/TableContactComponent'
import { connect } from 'react-redux';
import { getContactList } from '../api/contactAPI';

class HomePages extends Component {
  componentDidMount(){
    this.props.dispatch(getContactList());
  }
  render() {
    return (
      <div>
        <TableContactComponent />
      </div>
    )
  }
}

export default connect()(HomePages);
