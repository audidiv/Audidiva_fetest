import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Alert, Container } from 'react-bootstrap';
import ButtonComponent from '../components/ButtonComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const EditContactpage = () => {

  const navigate = useNavigate();
  const params = useParams();

  let alertFailed = 'none';

  const data = {
    firstName: '',
    lastName: '',
    age: 0,
    photo: ''
  }

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState('');

  function handleSubmit(event) {
      event.preventDefault();
      data.firstName = firstName;
      data.lastName = lastName;
      data.age = parseInt(age);
      data.photo = photo;
      
      axios.put(`https://contact.herokuapp.com/contact/${params.id}`, data)
        .then(res => navigate('/'))
        .catch(err => alertFailed="block");
  }

  return (
    <div>
        <Container>
          <Alert variant='danger' style={{display: alertFailed}}>Failed delete contact</Alert>
            <br/>
            <ButtonComponent
                btnStyle="btn-dark"
                route="/"
                icon={<FontAwesomeIcon icon={faArrowCircleLeft}/>}
                text="Back"
            />
            <form onSubmit={handleSubmit} style={{marginTop: "20px"}}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Edit Contact</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input 
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input 
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Age</label>
                                    <input 
                                        className="form-control"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Photo</label>
                                    <input 
                                        className="form-control"
                                        value={photo}
                                        onChange={(e) => setPhoto(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </Container>
    </div>
  )
}

export default EditContactpage;

