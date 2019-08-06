import React, { Component } from "react";
import ReusableModal from "../Modal/ReusableModal";
import UsersAdd from "./UsersAdd";
import UsersUpdate from "./UsersUpdate";
import { connect } from "react-redux";
import { getUser, addUser, deleteUser } from "../../actions/usersAction";

class UsersTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalAdd: false,
      modalUpdate: false,
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleAdd = () => {
    this.setState({
      modalAdd: true,
      modalUpdate: false,
      firstName: "",
      lastName: "",
      email: ""
    });
    this.toggle();
  };

  toggleUpdate = () => {
    this.setState({
      modalAdd: false,
      modalUpdate: true,
      firstName: "",
      lastName: "",
      email: ""
    });
    this.toggle();
  };

  handleChange = e => {
    if (this.state.modalAdd === true && this.state.modalUpdate === false) {
      switch (e.target.name) {
        case "firstName":
          this.setState({ firstName: e.target.value });
          break;
        case "lastName":
          this.setState({ lastName: e.target.value });
          break;
        case "email":
          this.setState({ email: e.target.value });
          break;
        default:
          this.setState({ [e.target.name]: e.target.value });
      }
    }
    console.log(e.target.value);
  };

  AddUser = () => {
    const users = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.lastName
    };
    this.props.onAddUser(users);
    console.log(this.state.firstName);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.modalAdd === true && this.state.modalUpdate === false) {
      this.AddUser();
    }
  };

  // handleDelete = () => {
  //   this.props.deleteUser(this.props.id);
  //   console.log(this.props.id);
  // };

  componentDidMount() {
    this.props.onGetUser();
  }
  render() {
    const headerContent = () => {
      return this.state.modalAdd === true ? "Add User" : "Update User";
    };

    const bodyContent = () => {
      if (this.state.modalAdd === true) {
        return (
          <UsersAdd
            state={this.state}
            toggle={this.toggle}
            handleChange={this.handleChange}
          />
        );
      } else {
        return (
          <UsersUpdate
            state={this.state}
            toggle={this.toggle}
            handleChange={this.handleChange}
          />
        );
      }
    };

    const footerContent = () => {
      if (this.state.modalAdd === true) {
        return (
          <div>
            <button className="btn btn-primary" onClick={this.toggle}>
              <span className="icon-check" />
              Submit
            </button>
            &nbsp;
            <button className="btn btn-secondary" onClick={this.toggle}>
              <span className="icon-arrow-left-circle" />
              Cancel
            </button>
          </div>
        );
      } else {
        return (
          <div>
            <button className="btn btn-primary" onClick={this.toggle}>
              <span className="icon-check" />
              Submit
            </button>
            &nbsp;
            <button className="btn btn-secondary" onClick={this.toggle}>
              <span className="icon-arrow-left-circle" />
              Cancel
            </button>
          </div>
        );
      }
    };

    const { length: count } = this.props.users.userData;
    if (count === 0) return <p>There are no movies in the database.</p>;
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <p>Showing {count} Users in the Database</p>
            <button
              className="float-right btn btn-light"
              type="button"
              onClick={this.toggleUpdate}
            >
              <span className="fa fa-edit" /> Update
            </button>
            <button
              className="float-right btn btn-light"
              style={{ marginRight: "10px", marginBottom: "10px" }}
              onClick={this.toggleAdd}
            >
              <span className="fa fa-edit" /> Add
            </button>
            <table className="table table-hover table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>User ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.props.users.userData.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.props.onDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ReusableModal
          size="xl"
          isOpen={this.state.modal}
          toggle={this.toggle}
          modalHeader={headerContent()}
          modalBody={bodyContent()}
          modalFooter={footerContent()}
          onSubmit={this.handleSubmit}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetUser: () => dispatch(getUser()),
    onAddUser: users => dispatch(addUser(users)),
    onDeleteUser: id => dispatch(deleteUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // { getUser, deleteUser }
)(UsersTabs);
