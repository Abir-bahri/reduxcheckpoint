import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { edittodo} from '../redux/todoSlice'


function EditTodo(props) {
  const state = useSelector((state) => state.todoSlice);
  const [input, setInput] = useState();

  const [show, setShow] = useState();
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      edittodo({
        
        id: props.id,
        title:input
        
      })
    );
  };
  const handleShow = (e) => setShow(true);
  
  
  const handleChange = (e) => {
    setInput(e.target.value);
    

  
  };

  return (
    

   
    <>
      <Button variant="primary" className="
      Edit" onClick={handleShow}>
       Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={onSubmit}>
              <Form.Group>
               
                  
                <Form.Label>  edit </Form.Label>
                <Form.Control 
                name= "Edit"
                placeholder="Edit"
                autoFocus
                onChange={handleChange}
                />
              </Form.Group>

              <Button variant="success" type="submit">
           Add changes
          </Button>
            </Form>
            
            
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
export default EditTodo;
