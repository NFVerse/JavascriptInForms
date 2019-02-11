import React from "react";
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            phone: "",
            age: "",
            password: "",
            confirm: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" name="firstName" value={this.state.firstName} placeholder="Ex. Great" onChange={this.handleChange}></input>
                </label>
                <br />
                <label>
                    <input type="text" name="lastName" value={this.state.lastName} placeholder="Ex. Dane" onChange={this.handleChange}></input>
                </label>
                <br />
                <label>
                    <input type="text" name="userName" value={this.state.userName} placeholder="GreatestDane97" onChange={this.handleChange}></input>
                </label>
                <br />
                <label>
                    <input type="text" name="email" value={this.state.email} placeholder="GreatestDane@gmail.com" onChange={this.handleChange}></input>
                </label>
                <br />
                <label>
                    <input type="text" name="phone" value={this.state.phone} placeholder="502-808-ruff" onChange={this.handleChange}></input>
                </label>
                <br />
                <label>
                    <input type="text" name="age" value={this.state.age} placeholder="84... in human years" onChange={this.handleChange}></input>
                </label>
                <br />
                <label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                </label>
                <br />
                <label>
                    <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange}></input>
                </label>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        );
    }
}
export default Register