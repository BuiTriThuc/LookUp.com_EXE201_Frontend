import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./CreatePost.css";
import { MdOutlinePhotoCamera, MdPhotoCameraFront } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <input
          className="create_post_input"
          placeholder="Tạo bài viết mới"
          variant="primary"
          onClick={handleShow}
        ></input>
        <div className="create_post_icon">
          <div onClick={handleShow} className="create_post_icon_detail">
            <p>
              {" "}
              <MdOutlinePhotoCamera
                style={{ width: "20px", height: "20px", color: "blue" }}
              />{" "}
              Hình ảnh{" "}
            </p>
          </div>
          <div onClick={handleShow} className="create_post_icon_detail">
            <p>
              {" "}
              <MdPhotoCameraFront
                style={{ width: "20px", height: "20px", color: "green" }}
              />{" "}
              Video
            </p>
          </div>
          <div onClick={handleShow} className="create_post_icon_detail">
            <p>
              {" "}
              <CgDetailsMore
                style={{ width: "20px", height: "20px", color: "red" }}
              />{" "}
              Bài viết
            </p>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo bài viết</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nội dung bài viết</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Hình ảnh</Form.Label>
              <Form.Control type="file" placeholder="ví dụ: " autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
