import React from 'react';
import Axios from 'axios';
import queryString from 'query-string';
class Send extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        const { className, value } = event.target;
        this.setState({ [className]: value });
    }
    handleSubmit = () => {

        //-----------------------USING GET METHOD---------------------

        // Axios.get('http://localhost:8022/MyBatis/add', 
        //{params:{ name: this.state.name, password: this.state.password }})
        //     .then((response) => {
        //         console.log(response);
        //     }).catch((error) => {
        //         console.log(error.message);
        //     });

        //------------------------------USING POST URL ENCODED METHOD-----------

        Axios.post('http://localhost:8022/MyBatis/addposturl',
            queryString.stringify({ name: this.state.name, password: this.state.password }),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then((response) => {
                console.log(response.status);
                console.log(response.statusText);
            }).catch((error) => {
                console.log(error.message);
            });

        //-------------------USING POST JSON METHOD--------- 

        // axios.post(authServerUrl + token_access_path,
        //     JSON.parse({             //or we can use JSON.strigify
        //             username: 'abcd', //gave the values directly for testing
        //             password: '1235!',
        //             client_id: 'user-client'
        //     }), {
        //       headers: { 
        //         "Content-Type": "application/json"
        //       }
        //     }).then(function(response) {
        //         console.log(response);
        //     });
    }
    render() {
        return (
            <section className="container home">
                <form onSubmit={(e) => { e.preventDefault(), this.handleSubmit() }}>
                    <div>
                        <h2>Details!!</h2>
                        <input type='text' className='name' onChange={this.handleChange} placeholder='Name..' required /><br />
                        <input type='password' className='password' onChange={this.handleChange} placeholder='Password..' required /><br />
                        <input type='Submit' className="btn btn-primary" defaultValue='Submit' />
                        {/*<input type='text' ref={value => {this.state.name = value;}} placeholder='Name..' required /><br />
                        <input type='password' ref={value => {this.state.password = value;}} placeholder='Password..' required /><br />
                        <input type='Submit' className="btn btn-primary" defaultValue='Submit' />*/}
                    </div>
                </form>
            </section>
        );
    }
}
export default Send;