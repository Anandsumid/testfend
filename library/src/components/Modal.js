import {Modal , Button,} from "react-bootstrap"
import React, {useState} from "react";

function ModalAdd() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[data,setData]=useState([])
    const addProduct=(e)=>{
      e.preventDefault()
        setData({
          name:e.target[0].value,
          code:e.target[1].value,
          price:e.target[2].value,
          authors:e.target[3].value,
          ISBN:e.target[4].value,
          publisher:e.target[5].value,
          publish_date:e.target[6].value
        })
     
    }
    const fetchData =()=>{
    
      fetch('http://18.140.72.65:3002/createbook',{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          name: data.name,
          code: data.code,
          price: data.price,
          authors: data.authors,
          ISBN: data.ISBN,
          publisher: data.publisher,
          publish_date: data.publish_date
        })
      })
      .then((data)=>data.json())
      .then((data) =>console.log(data))
    }
    

    return (
      <>
        <div className="d-flex justify-content-center">
        <Button className="color" variant="primary" onClick={handleShow}>
          + Add Book
        </Button>
        </div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title >Add Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
            <form name="addBook" className="was-validated" id="add-form" action="" onSubmit={addProduct}>
            <div className="row">
                <div className="my-2">
                    <input required type="text" className="form-control is-invalid" id="exampleInputText" aria-describedby="textHelp" placeholder="Name"/>
                </div>
                <div className="my-2">
                    <input required type="text" className="form-control is-invalid" id="exampleInputText1" aria-describedby="textHelp1" placeholder="Code"/>
                </div>
                <div className="my-2">
                    <input required type="number" className="form-control is-invalid" id="exampleInputText2" aria-describedby="textHelp2" placeholder="Price"/>
                </div>
                <div className="my-2">
                    <input required type="text" className="form-control is-invalid" id="exampleInputText3" aria-describedby="textHelp3" placeholder="Author"/>
                </div>
                <div className="my-2">
                    <input required type="number" className="form-control is-invalid" id="exampleInputText4" aria-describedby="textHelp4" placeholder="ISBN"/>
                </div>
                <div className="my-2">
                    <input required type="text" className="form-control is-invalid" id="exampleInputText5" aria-describedby="textHelp5"  placeholder="Publisher"/>
                </div>
                <div className="my-2">
                    <input required type="date" className="form-control is-invalid" id="exampleInputText6" aria-describedby="textHelp5" placeholder="Published On"/>
                </div>
            </div>
            <div className="d-flex justify-content-center">
            <Button className="d-flex justify-content-center" variant="primary" onClick={fetchData} type='submit'>
              Ном Нэмэх
            </Button>
            </div>
          </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default ModalAdd