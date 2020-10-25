import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import './Center.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      width: "1000px",
      height: "auto",
      padding: "20px",
      backgroundColor: '#efefef'
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
}));

// Adding Details of Table Component

function createData(nameofCompany, duration) {
  return { nameofCompany, duration };
}

const rows = [
  createData("Software Engineer | Blue Tac", "May 2005 - May 2007"),
  createData("Software Engineer | Pinger Textiles", "May 2001 - May 2002"),
];

export default function Center() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className="center">
        <h2 className="center_head">Employment</h2>
        <p className="center_title">Add Your Work Experience</p>
        <p className="center_label">
          Build Your Credibility By showing your past projects and Experience
        </p>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<AddCircleOutlineIcon />}
          size="small"
        >
          Add Employment
        </Button>
        <div className="center_table">
          <TableContainer component={Paper} style={{backgroundColor: '#efefef'}}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Tile | Company</TableCell>
                  <TableCell align="right">Duration</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.nameofCompany}
                    </TableCell>
                    <TableCell align="right">{row.duration}</TableCell>
                    <TableCell align="right">
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="center_bottom">
          <div className="center_bottom__links">
            <p>Skip this Step for now</p>
            <p>Back</p>
          </div>
          <div className="center_bottom__button"></div>
          <Button variant="contained" color="primary" size="small" href="#contained-buttons">
            Link
          </Button>
        </div>
      </Paper>
    </div>
  );
}
