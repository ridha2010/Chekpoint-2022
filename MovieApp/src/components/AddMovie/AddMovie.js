import React, { useState } from 'react';
import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap';

const AddMovie = ({ addMovieCallback }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Title, setTitle] = useState('');
  const [Poster, setPoster] = useState('');

  const handleSave = () => {
    let newfilm = {
      id: Math.floor(Math.random() * 1000),
      Title,
      Poster,
    };
    addMovieCallback(newfilm);
    setTitle('');
    setPoster('');
    setShow(false);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <InputGroup className="mb-3">
            <input
              type="text"
              onChange={(event) => setTitle(event.target.value)}
            />

            <FormControl aria-label="Title" />
          </InputGroup>

          <InputGroup className="mb-3">
            <input
              type="text"
              onChange={(event) => setPoster(event.target.value)}
            />
            <FormControl aria-label="PosterSrc" />
          </InputGroup> */}

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">title</InputGroup.Text>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(event) => setTitle(event.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">image </InputGroup.Text>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(event) => setPoster(event.target.value)}
            />
          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
