import React from 'react';
import Axios from 'axios';

class SendData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            err: '',
            clicked: false
        };
        this.getData = this.getData.bind(this);
        this.listData = this.listData.bind(this);
    }
    componentWillMount() {
        try {
            this.getData();
            console.log('API CALLED!!');
        } catch (error) {
            console.log('ERROR_MESSAGE:' + error.message);
        }

    }
    getData = () => {
        Axios.get('http://localhost:8022/MyBatis/getall')
            .then((response) => {
                this.state.items = (response.data);
                console.log(response.data);
            })
            .catch((error) => {
                this.setState({ err: error.message });
                console.log('ERROR_MESSAGE:' + error.message);
            });
        
    }

    listData = () => {
        this.setState({
            clicked: true
        });
    }

    render() {
        return (
            <section className="container home">
                <div>
                    <button className="btn btn-primary btn-block" onClick={(e) => { e.preventDefault(), this.listData() }}>click!</button>
                    {this.state.clicked ? <ListDetails obj={this.state.items} key={this.state.items.id} /> : null}
                </div>
            </section>
        );
    }
}
export default SendData;

class ListDetails extends React.Component {

    render() {
        return (
            <span>
                <table className='table table-hover table-bordered table-responsive ' >
                    <thead>
                        <tr><td>ID</td><td>NAME</td><td>AGE</td><td>VALUE</td></tr>
                    </thead>
                    <tbody>
                        {this.props.obj.map((item, i) => {                           
                           {
                           return <tr key={i}><td>{item.id}</td><td>{item.name}</td><td>{item.age}</td><td>{item.salary}</td></tr>;
                           }
                             }
                        )} 
                    </tbody>
                </table>
            </span>
        );
    }
}