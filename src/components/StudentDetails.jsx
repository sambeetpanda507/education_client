import React, { useState, useEffect } from "react";
import axios from "../axios";
import Avatar from "../svg/avatar.svg";
import "../scss/students.scss";
import * as Bootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Preloader from "./Preloader";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function StudentDetails(props) {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState(0);
  const [show, setShow] = useState(false);
  const [student, setStudent] = useState({});
  const [open, setOpen] = React.useState(false);
  const [progress, setProgress] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const studentsData = await axios({
          url: `/api/getStudents/${props.match.params.collegeId}`,
          method: "GET",
          onDownloadProgress: (progressEvent) => {
            setProgress(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            );
          },
        });
        if ((studentsData.status = 200)) {
          setStudents(studentsData.data);
          handleClick();
        }
      } catch (error) {
        console.log(error);
      }
    };
    getStudents();
  }, [props.match.params.collegeId]);

  const getStudentDetails = (e) => {
    setStudentId(e.target.id);
    getStudent(e.target.id);
    handleShow();
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleCloseSnackBack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const getStudent = (studentId) => {
    console.log(studentId);
    for (let i = 0; i < students.length; i++) {
      if (students[i].studentId === Number(studentId)) {
        setStudent(students[i]);
      }
    }
  };

  return (
    <>
      {progress < 100 ? (
        <Preloader />
      ) : (
        <>
          <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
            <Alert
              onClose={handleCloseSnackBack}
              severity="success"
              className="notification"
            >
              Check student details"
            </Alert>
          </Snackbar>
          <h1 className="text-center py-5">Student Details</h1>
          <div className="container students border my-3 p-2">
            {/* modal start */}
            <Bootstrap.Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Bootstrap.Modal.Header closeButton>
                <Bootstrap.Modal.Title>
                  {student.studentName}
                </Bootstrap.Modal.Title>
              </Bootstrap.Modal.Header>
              <Bootstrap.Modal.Body>
                <ul style={{ listStyle: "none" }}>
                  <li>Student Id: {student.studentId}</li>
                  <li>College Id: {student.collegeId}</li>
                  <li>Year Of Batch: {student.yearOfBatch}</li>
                  <li>
                    Skills:
                    <ul className="pt-1 pl-3">
                      {student.skills
                        ? student.skills.map((value, index) => {
                            return <li key={index}>{value}</li>;
                          })
                        : ""}
                    </ul>
                  </li>
                </ul>
              </Bootstrap.Modal.Body>
              <Bootstrap.Modal.Footer>
                <Bootstrap.Button variant="secondary" onClick={handleClose}>
                  Close
                </Bootstrap.Button>
              </Bootstrap.Modal.Footer>
            </Bootstrap.Modal>
            {/* modal end */}
            <div className="row">
              {students.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="col-6 col-sm-6 col-md-3 d-flex align-items-center justify-content-center"
                  >
                    <div className="studetns__container text-center p-1">
                      <div className="student__img text-center">
                        <img src={Avatar} alt="profile" className="img-fluid" />
                      </div>
                      <p className="student__name text-center text-secondary">
                        {value.studentName}
                      </p>
                      <button
                        id={value.studentId}
                        className="btn btn-outline-primary btn-sm"
                        onClick={getStudentDetails}
                      >
                        Get Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-center">
            <button
              className="btn btn-info btn-sm"
              onClick={() => {
                window.history.back();
              }}
            >
              Go Back
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default StudentDetails;
