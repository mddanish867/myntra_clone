import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './CustomePopUps.css';
function CustomePopUps() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn default delivery_address_btn" onClick={handleShow}>
        ADD NEW ADDRESS
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='popup_addres_header'>ADD NEW ADDRESS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="addnew_address">
            <span>CONTACT DETAILS</span>
            <input type="text" placeholder="enter fullname"></input>
            <input type="text" placeholder="mobile number"></input>
            <span>ADDRESS</span>
            <input type="text" placeholder="Pincode"></input>
            <input
              type="text"
              placeholder="Address (House building, streets area)"
            ></input>
            <input type="text" placeholder="Locality/Town"></input>
            <div className="city_district">
              <input type="text" placeholder="City/District"></input>
              <input
                type="text"
                placeholder="State"
                style={{ marginLeft: "10px" }}
              ></input>
            </div>
            <span>SAVE ADDRESS ASS</span>
            <div className='boxed'>
              <input
                type="radio"
                id="android"
                name="skills"
                placeholder="City/District"
              />
              <label htmlFor="android">Home</label>

              <input type="radio" id="ios" name="skills" placeholder="State"  />
              <label htmlFor="ios" style={{marginLeft:"10px"}}>Work </label>
            </div>
            <div className='make_default_address'>
            <input type="checkbox" id="defaulataddress" name="defalu_addres"/>
<label htmlFor="defaulataddress"> Make this my default address</label><br/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>         
          
            <button className='add_addresspopup_btn'>ADD ADDRESS</button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomePopUps;