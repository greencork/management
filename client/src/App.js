import React from "react";
import "./App.css";
import Customer from "./components/Customer";
import { Table, TableHead, TableBody, TableCell } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overFlowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

class App extends React.Component {
  state = {
    customers: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
            {this.state.customers
              ? this.state.customers.map((custom) => {
                  return (
                    <Customer
                      key={custom.id}
                      id={custom.id}
                      image={custom.image}
                      name={custom.name}
                      birthday={custom.birthday}
                      gender={custom.gender}
                      job={custom.job}
                    />
                  );
                })
              : ""}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
