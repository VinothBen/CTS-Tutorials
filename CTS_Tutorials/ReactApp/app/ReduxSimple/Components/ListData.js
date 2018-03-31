import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../Actions/action';
//import { ToastContainer, toast } from 'react-toastify';
import swal from 'sweetalert';
import { browserHistory } from 'react-router';

class ListData extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleDelete = (id) => {

        //   toast.success("Data Deleted Successfully !", {
        //   position: toast.POSITION.BOTTOM_RIGHT,
        //   autoClose: 2000,
        //   progressClassName: 'transparent-progress'

        // });

        swal({
            title: "Are you sure?",
            text: "Once deleted, it will not be able to recover this Data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((buttonOk) => {
                if (buttonOk) {
                    swal("Your Data has been deleted Successfully!", {
                        icon: "success",
                    });
                    this.props.dispatch(Actions.deleteUserApi(id));
                }
                // else {
                //     swal("Your Data is not Deleted!");
                // }
            });
        // this.props.dispatch(Actions.deleteUser(id));
    }

    handleEdit = (id) => {
           
     browserHistory.push('/update/'+id.toString());

    }
    render() {
        return (
            <div>
                <br />
                <table className='table table-hover table-bordered table-responsive table-striped' >
                    <thead className='thead-inverse'>
                        <tr><td>ID</td><td>NAME</td><td>DATE</td><td>EMAIL ID</td><td>PHONE NUMBER</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.obj.map((item, i) => {

                                return (
                                    <tr key={i}>
                                        <td>{item.id}</td><td>{item.name}</td><td>{item.date}</td><td>{item.emailId}</td><td>{item.phoneNumber}</td>
                                        <td><button onClick={e => { e.preventDefault, this.handleEdit(item.id) }} className="btn btn-primary btn-xs" >Edite</button></td>
                                        <td><button onClick={e => { e.preventDefault, this.handleDelete(item.id) }} className="btn btn-danger btn-xs">Delete</button></td>
                                    </tr>);
                            })
                        }

                    </tbody>
                </table>
                {this.props.children}
            </div>
        );
    }
}
export default connect(null, null)(ListData);

