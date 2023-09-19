import React from 'react'
import { Col, Table } from 'react-bootstrap'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        getContactDetail: state.contacts.getContactDetail,
        errorMessage: state.contacts.errorMessage,
    };
};

const TableContactDetailComponent = (props) => {
    console.log(props);
  return (
    <div>
        {props.getContactDetail ?
            <Table striped>
                <tbody>
                    <tr>
                        <td colSpan={3}>
                            <Col style={{display: "flex", justifyContent: "center"}}>
                                <img src={props.getContactDetail.data.photo} alt="" style={{width: "70%", height: "100%"}}/>
                            </Col>
                        </td>
                    </tr>
                    <tr>
                        <td width="200">First Name</td>
                        <td width="10">:</td>
                        <td>{props.getContactDetail.data.firstName}</td>
                    </tr>
                    <tr>
                        <td width="200">Last Name</td>
                        <td width="10">:</td>
                        <td>{props.getContactDetail.data.lastName}</td>
                    </tr>
                    <tr>
                        <td width="200">Age</td>
                        <td width="10">:</td>
                        <td>{props.getContactDetail.data.age}</td>
                    </tr>
                </tbody>
            </Table>
        : <div/> }
    </div>
  )
}

export default connect(mapStateToProps)(TableContactDetailComponent);
