import React,{ useState} from 'react';
import {Modal,Button} from 'react-bootstrap';

function AddMovie({add}) {
const [show,setShow] = useState(false);
const [title,settitle] = useState('');
const [description, setdescription] = useState('');
const [rate, setrate] = useState('');
const [ posterUrl, setposterUrl] = useState('');

const handleAdd=()=> {
  let AddMovie={title,description,rate,posterUrl}
  add(AddMovie)
  handleClose()
}
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 return <div> 
   <Button variant="primary" onClick={handleShow}>
     Add Movie 
     </Button>

     <Modal.Header show={show} onHide={handleClose}> 
     <Modal.Title>Add Movie</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <label>Title</label>
       <input  type='text' placeholder='Enter your title Here'  onChange={(e)=>settitle(e.target.value)}/>
      <label>description</label>
      <input  type='text' placeholder='Enter your description Here'onChange={(e)=>setdescription(e.target.value)} />
      <label>rate</label>
      <input  type='text' placeholder='Enter your rate Here' onChange={(e)=>setrate(e.target.value)}/>
      <label>posterUrl</label>
      <input  type='text' placeholder='Enter your img Here'  onChange={(e)=>setposterUrl(e.target.value)}/>



     </Modal.Body>
     <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
         close
      </Button>
      <Button variant="primary" onClick={()=>handleAdd()}>
        ADD
      </Button>
      </Modal.Footer> 
     
    </div>;    
    
      }

export default AddMovie;



