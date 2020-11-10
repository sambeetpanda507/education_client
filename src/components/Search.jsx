import React, { useState } from "react";
import "../scss/search.scss";
import axios from "../axios";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer, toast } from "react-toastify";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Preloader from "./Preloader";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Search() {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  const [progress, setProgress] = React.useState(0);

  const [college, setCollege] = React.useState([]);

  const handleFind = async () => {
    setSearch("");
    try {
      console.log(typeof search);

      const college = await axios({
        url: `/api/getCollegeById/${search}`,
        method: "GET",
        onDownloadProgress: (progressEvent) => {
          setProgress(
            Math.round((progressEvent.loaded / progressEvent.total) * 100)
          );
        },
      });
      if (college.status === 200) {
        setCollege(college.data);
        notify();
      }
    } catch (error) {
      window.alert("please enter a valid college id");
    }
  };

  const notify = () =>
    toast.info("👇 Check results below", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <>
      {" "}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontSize: "2rem" }}
      />
      <div className="search container-fluid">
        <div className="row">
          <div className="col-8 mx-auto">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleFind();
              }}
            >
              <div className="form-group">
                <label for="exampleInputEmail1">College Id</label>
                <input
                  type="number"
                  className="form-control my-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter college Id"
                  required
                  value={search}
                  onChange={(e) => {
                    setProgress(0);
                    setSearch(e.target.value);
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary my-3">
                Search
              </button>
            </form>{" "}
            {progress > 0 && progress < 100 ? (
              <Preloader />
            ) : (
              <>
                <div className={`${classes.root} my-5`}>
                  <Accordion defaultExpanded="true">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        Search Result
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {college.college ? (
                        <div className="table-responsive">
                          {" "}
                          <table className="table table-hover">
                            <thead>
                              <tr style={{ fontSize: "15px" }}>
                                <th>College Id</th>
                                <th>College Name</th>
                                <th>Course</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Number Of Students</th>
                                <th>Year Founded</th>
                                <th>Students Details</th>
                              </tr>
                            </thead>
                            <tbody>
                              {college.college.map((value, index) => {
                                return (
                                  <tr className="py-3" key={index}>
                                    <td>{value.collegeId}</td>
                                    <td>{value.collegeName}</td>
                                    <td>{value.courses}</td>
                                    <td>{value.city}</td>
                                    <td>{value.state}</td>
                                    <td>{value.NoOfStudents}</td>
                                    <td>{value.yearFounded}</td>
                                    <Link
                                      to={`/student details/${value.collegeId}`}
                                    >
                                      <td>
                                        <button className="btn btn-primary btn-sm">
                                          View
                                        </button>
                                      </td>
                                    </Link>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className="text-secondary">No results found</p>
                      )}
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className={`${classes.root} my-2`}>
                  <Accordion defaultExpanded="true">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        Similar Colleges{" "}
                        {college.state ? `In ${college.state}` : ""}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {college.similarCollege ? (
                        <div className="table-responsive">
                          {" "}
                          <table className="table table-hover">
                            <thead>
                              <tr style={{ fontSize: "15px" }}>
                                <th>College Id</th>
                                <th>College Name</th>
                                <th>Course</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Number Of Students</th>
                                <th>Year Founded</th>
                                <th>Students Details</th>
                              </tr>
                            </thead>
                            <tbody>
                              {college.similarCollege.map((value) => {
                                return (
                                  <tr key={value._id}>
                                    <td>{value.collegeId}</td>
                                    <td>{value.collegeName}</td>
                                    <td>{value.courses}</td>
                                    <td>{value.city}</td>
                                    <td>{value.state}</td>
                                    <td>{value.NoOfStudents}</td>
                                    <td>{value.yearFounded}</td>
                                    <Link
                                      to={`/student details/${value.collegeId}`}
                                    >
                                      <td>
                                        <button className="btn btn-primary btn-sm">
                                          View
                                        </button>
                                      </td>
                                    </Link>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className="text-secondary">No results found</p>
                      )}
                    </AccordionDetails>
                  </Accordion>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
