import axios from "axios";
import { getContacts, getContactsById } from "../reducers/slice/contactsSlice";

const urlOrigin = "https://contact.herokuapp.com";

export const GET_CONTACT_LIST = "GET_CONTACT_LIST";

export const getContactList = () => {
  return (dispatch) =>{
    axios.get(`${urlOrigin}/contact`)
        .then(function (response) {
            dispatch(getContacts(response.data));
        })
        .catch(function (err) {
            console.log(`error get list: ${err.response.status}`);
        });
  }
}

export const getContact = (id) => {
    return (dispatch) =>{
      axios.get(`${urlOrigin}/contact/${id}`)
          .then(function (response) {
            console.log(response.status);
            dispatch(getContactsById(response.data));
        })
        .catch(function (err) {
            console.log(`error get contact: ${err.response.status}`);
          });
    }
}
