import React, {useState, useEffect} from "react";
import {Modal, Button} from "react-bootstrap"
import "../css/mainTable.css";

function EditModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [book, setBook] = useState([]);
    const [changeValue , setValue]= useState([])
    
    useEffect(() => {
      fetch(`http://18.140.72.65:3002/updatebook/id/${props.data._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
        
        })
      })
        .then((data) => data.json())
        .then((e) => {
          setBook(e.data);
        });
    }, []);
    

    const change = (event) => {
      setValue({
        
      })

  }
    return (
      <> 
        <div className="edit" onClick={handleShow}>
            <svg
                    className="edit"
                    width="20"
                    height="20"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.89 0.390001L13.6 3.11C14.06 3.57 14.02 4.35 13.63 4.75L5.62 12.77L0.0599976 13.93L1.22 8.35C1.22 8.35 8.82 0.72 9.21 0.32C9.6 -0.0699996 10.43 -0.0699995 10.89 0.390001V0.390001ZM8.16 3.18L2.57 8.79L3.68 9.9L9.22 4.25L8.16 3.18ZM5.19 11.41L10.77 5.81L9.7 4.73L4.11 10.33L5.19 11.41Z"
                      fill="black"
                      fillOpacity={0.3}
                    />
            </svg>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>About Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form name="addBook" className="was-validated" id="add-form" action="">
                  <div className="row">
                    <div className="my-2">
                      <input required type="text" className="form-control is-invalid" id="exampleInputText" aria-describedby="textHelp" placeholder="Name" value={props.data.name} onChange={change}/>
                    </div>
                    <div className="my-2">
                      <input required type="text" className="form-control is-invalid" id="exampleInputText1" aria-describedby="textHelp1" placeholder="Price" value={`$${props.data.price}`} onChange={change}/>
                    </div>
                    <div className="my-2">
                     <input required type="text" className="form-control is-invalid" id="exampleInputText3" aria-describedby="textHelp3" placeholder="Author" value={props.data.authors} onChange={change}/>
                    </div>
                    <div className="my-2">
                      <input required type="number" className="form-control is-invalid" id="exampleInputText4" aria-describedby="textHelp4" placeholder="ISBN" value={props.data.isbn} onChange={change}/>
                    </div>
                    <div className="my-2">
                      <input required type="text" className="form-control is-invalid" id="exampleInputText5" aria-describedby="textHelp5"  placeholder="Publisher" value={props.data.publisher} onChange={change}/>
                    </div>
                    <div className="my-2">
                      <input required type="date" className="form-control is-invalid" id="exampleInputText6" aria-describedby="textHelp5" placeholder="Published On" value={props.data.published_date} onChange={change}/>
                    </div>
                  </div>
                </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Хаах
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Мэдээлэл өөрчлөх
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default EditModal