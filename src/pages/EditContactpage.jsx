import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Modal } from 'react-bootstrap';
import ButtonComponent from '../components/ButtonComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const EditContactpage = () => {

  const navigate = useNavigate();
  const params = useParams();

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
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(true);
    }

  function handleSubmit(event) {
      event.preventDefault();
      data.firstName = firstName;
      data.lastName = lastName;
      data.age = parseInt(age);
      data.photo = photo;
      
      axios.put(`https://contact.herokuapp.com/contact/${params.id}`, data)
        .then(res => navigate('/'))
        .catch(err => toggleModal());
  }

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertImageToBase64(file);
    setPhoto(base64);
    }

    const convertImageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (err) => {
                reject(err);
            };
        });
    }

  return (
    <div>
        <Modal
            size="sm"
            show={modal}
            onHide={() => setModal(false)}
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
                Failed Update Contact
            </Modal.Title>
            </Modal.Header>
        </Modal>
        <Container>
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
                                        type='file'
                                            onChange={(e) => uploadImage(e)}/>
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

