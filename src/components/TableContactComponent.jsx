import {Table, Col, Button, Alert} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import ButtonComponent from './ButtonComponent';
import { connect } from 'react-redux';
import { getContacts } from '../reducers/slice/contactsSlice';
import axios from 'axios';

const mapStateToProps = (state) => {
    return {
        getContactList: state.contacts.getContactList.data,
        errorMessage: state.contacts.errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getContacts:() => dispatch(getContacts())
    }
}

let alertFailed = 'none';

const TableContactComponent = (props) => {

    const [deleteContact, setDeleteContact] = useState('');

    useEffect(() => {
        if(deleteContact !== ''){
            axios.delete(`https://contact.herokuapp.com/contact/${deleteContact}`)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    alertFailed="block"
                });
        }
    }, [deleteContact]);

  return (
    <div className='container' style={{paddingTop: "15px"}}>
        <Alert variant='danger' style={{display: alertFailed}}>Failed delete contact</Alert>
        <ButtonComponent
            btnStyle="btn-primary"
            route="add"
            icon={<FontAwesomeIcon icon={faUserPlus}/>}
            text="Add Contact"
        />
        {props.getContactList ?
            <Table striped bordered hover style={{textAlign: 'center', marginTop: "10px"}}>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.getContactList.map((item, i) =>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.firstName + " " + item.lastName}</td>
                        <td>{item.age}</td>
                        <td>
                            <Col style={{display: "flex", justifyContent: "space-evenly"}}>
                                <ButtonComponent
                                    btnStyle="btn-primary"
                                    route={"detail/"+item.id}
                                    icon={<FontAwesomeIcon icon={faInfo}/>}
                                    text="Detail"
                                />
                                <ButtonComponent
                                    btnStyle="btn-warning"
                                    route={"edit/"+item.id}
                                    icon={<FontAwesomeIcon icon={faEdit}/>}
                                    text="Edit"
                                />
                                <Button className="btn btn-danger" onClick={() => setDeleteContact(item.id)}>
                                    <FontAwesomeIcon icon={faTrash}/> Delete
                                </Button>
                            </Col>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
        : null}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContactComponent);