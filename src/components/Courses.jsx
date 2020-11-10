import React, { useState, useEffect } from "react";
import axios from "../axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import DoughnutChart from "./DoughnutChart";
import Preloader from "./Preloader";
import "../scss/courses.scss";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

function Courses(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [collegeData, setCollegeData] = useState([]);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const collegesData = async () => {
      try {
        const result = await axios({
          url: `/api/results?course=${props.match.params.course}`,
          method: "GET",
          onDownloadProgress: (progressEvent) => {
            setProgress(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            );
          },
        });
        if ((result.status = 200)) {
          setCollegeData(result.data);
          let rowData = [];
          result.data.forEach((item, i) => {
            rowData.push(
              createData(
                item.collegeId,
                item.collegeName,
                item.city,
                item.state,
                item.NoOfStudents,
                item.yearFounded,
                <Link to={`/student details/${item.collegeId}`}>
                  <button className="btn btn-primary btn-sm">View</button>
                </Link>
              )
            );
          });
          setRows(rowData);
          handleClick();
        }
      } catch (error) {
        console.log(error);
      }
    };

    collegesData();
  }, [props.match.params.course]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const columns = [
    { id: "id", label: "Id", minWidth: 170 },
    { id: "name", label: "Name", minWidth: 100 },
    {
      id: "city",
      label: "City",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "state",
      label: "State",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "numberOfStudents",
      label: "Number Of Students",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "yearFounded",
      label: "Year Founded",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "viewDetails",
      label: "Student Details",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  function createData(
    id,
    name,
    city,
    state,
    numberOfStudents,
    yearFounded,
    viewDetails
  ) {
    return {
      id,
      name,
      city,
      state,
      numberOfStudents,
      yearFounded,
      viewDetails,
    };
  }
  return (
    <>
      {progress < 100 ? (
        <Preloader />
      ) : (
        <>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              className="notification"
            >
              Check results"
            </Alert>
          </Snackbar>
          <h1 className="text-uppercase text-center py-5">
            {props.match.params.course}
          </h1>
          <DoughnutChart collegeData={collegeData} className="my-5" />
          <div className="my-5 container">
            {rows.length < 0 ? (
              <div className="text-center">
                <CircularProgress />
              </div>
            ) : (
              <>
                <Paper className={`my-5 ${classes.root} text-center`}>
                  <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow className="text-center">
                          {columns.map((column, i) => (
                            <TableCell
                              key={i}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody className="text-center">
                        {rows
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row, i) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={i}
                              >
                                {columns.map((column, i) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell key={i} align={column.align}>
                                      {column.format &&
                                      typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Paper>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Courses;
