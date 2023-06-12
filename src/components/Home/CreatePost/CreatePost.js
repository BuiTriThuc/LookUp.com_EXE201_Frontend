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
import toast, { Toaster } from "react-hot-toast";
import io, { Socket } from "socket.io-client";

function CreatePost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.createPost);

  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [socket, setSocket] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const newSocket = io("http://localhost:8001");
    setSocket(newSocket);
  }, [setSocket]);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    if (success) {
      dispatch({ type: CREATE_POST_RESET });
    }
  }, [dispatch, success, error, navigate]);

  const createPostHandler = (e) => {
    e.preventDefault();

    const postData = {
      content: content.replace(/\n/g, "<br />"),
      images: images,
    };

    dispatch(createPost(postData));

    socket.emit("postCreate", { postData });
  };

  const createPostsImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const imageData = [];

    const promises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve(event.target.result);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises)
      .then((results) => {
        results.forEach((result) => {
          imageData.push(result);
        });

        setImages(imageData);
      })
      .catch((error) => {
        console.log(error);
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
            <p className="icon_create_post_top">
              {" "}
              <MdOutlinePhotoCamera
                style={{
                  width: "20px",
                  height: "20px",
                  color: "blue",
                  marginRight: "3px",
                }}
              />{" "}
              Hình ảnh{" "}
            </p>
          </div>
          <div onClick={handleShow} className="create_post_icon_detail">
            <p className="icon_create_post_top">
              {" "}
              <MdPhotoCameraFront
                style={{
                  width: "20px",
                  height: "20px",
                  color: "green",
                  marginRight: "3px",
                }}
              />{" "}
              Video
            </p>
          </div>
          <div onClick={handleShow} className="create_post_icon_detail">
            <p className="icon_create_post_top">
              {" "}
              <CgDetailsMore
                style={{
                  width: "20px",
                  height: "20px",
                  color: "red",
                  marginRight: "3px",
                }}
              />
              {"    "}
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
            <Form.Group className="mb-3">
              <Form.Label>Hình ảnh</Form.Label>
              <Form.Control
                type="file"
                name="images"
                accept="image/*"
                onChange={createPostsImagesChange}
                multiple
                autoFocus
              />
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
