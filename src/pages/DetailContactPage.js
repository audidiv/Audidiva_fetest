import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { getContact } from '../api/contactAPI';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import TableContactDetailComponent from '../components/TableContactDetailComponent';
import ButtonComponent from '../components/ButtonComponent';

function getParams(Component) {
  return props => <Component {...props} params={useParams()}/>
}

class DetailContactPage extends Component {
  componentDidMount(){
    let contactId = this.props.params;
    this.props.dispatch(getContact(contactId.id))
  }
  render() {
    return (
      <div style={{marginTop: "15px"}}>
        <Container>
          <ButtonComponent
              btnStyle="btn-dark"
              route="/"
              icon={<FontAwesomeIcon icon={faArrowCircleLeft}/>}
              text="Back"
          />
          <div style={{height: "12px"}}></div>
          <TableContactDetailComponent />
        </Container>
      </div>
    )
  }
}

export default connect()(getParams(DetailContactPage));

