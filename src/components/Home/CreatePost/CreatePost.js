import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./CreatePost.css";
import { MdOutlinePhotoCamera, MdPhotoCameraFront } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createPost } from "../../actions/postActions";
import { useNavigate } from "react-router-dom";
import { CREATE_POST_RESET } from "../../contants/postContants";
import toast, { Toaster } from 'react-hot-toast';

function CreatePost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.createPost);

  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notifySuccess = () => {
    toast.success("Create post success!", {
      position: "top-center",
      duration: 2000
    });
    setTimeout(() => {
      window.location.reload(true);
    }, 2000); // Reload the page after 5 seconds (5000 milliseconds)
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    if (success) {
      notifySuccess()
      dispatch({ type: CREATE_POST_RESET });
    }
  }, [dispatch, success, error, navigate]);

  const createPostHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("content", content);
    images.forEach((image) => {
      myForm.append("images", image)
    });

    dispatch(createPost(myForm));
  };

  const createPostsImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

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
        <Form onSubmit={createPostHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Tạo bài viết</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nội dung bài viết</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                name="content"
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Hình ảnh</Form.Label>
              <Form.Control 
                type="file" 
                name="images" 
                accept="image/*"
                onChange={createPostsImagesChange}
                multiple 
                autoFocus />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose} type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreatePost;
