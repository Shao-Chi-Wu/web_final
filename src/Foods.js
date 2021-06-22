import React,{Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import './App.css';
import './Navbar.css';
import "./menu/starbucks.css"


var sectionStyle = {
    height : '100vh',
    backgroundSize: 'cover',
    backgroundImage: 'url(https://i.imgur.com/DFMEYmT.jpg)',
    opacity: '0.8',
  };


  class SF extends Component {    
    state ={
        text : "",
        text2 : "",
        repos: []
    }
    handleClub = async e =>{
        await this.setState({
            text2 : e.target.value, 
        })
    }
    handleAdd = async e =>{
        await this.setState({
            text : e.target.value, 
        })
    }
    // handleChange = event =>{
    //     this.setState({ repos:event.target.repos });
    // };

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.text);
        console.log(this.state.text2);
        let formData = new FormData();
        formData.append("text",this.state.text);
        formData.append("text2",this.state.text2);
        const cors = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://finalprojectcoffee.herokuapp.com/starbucksfood.php';
        axios.post(`${cors}${url}`,formData)
        .then(res=>{
            console.log(res)
            console.log(res.data)
            this.setState({ repos:res.data });
            
        })
        .catch(err=>console.log(err));
    }

    render() {
        return (
            <div style={sectionStyle}>
                <nav className="navbar2">
                    <Link to="/starbucks" className="navbar-logo">
                        foods Menu
                    </Link>
                </nav>
                <div className="select">
                    <select onChange={this.handleAdd}>
                        <option>想吃點什麼</option>
                        <option>輕食</option>
                        <option>蛋糕甜點</option>
                        <option>麵包/點心</option>
                        <option>新鮮現烤</option>
                    </select>
                    {/* <br/> */}
                    {/* <select onChange={this.handleClub}>
                        <option></option>
                        <option>2</option>
                        <option>1</option>
                        <option>0.5</option>
                    </select> */}
                    <button onClick={this.handleSubmit}  id="submit">Search</button>
                    {/* <div name="name" onChange={this.handleChange} /> */}
                    <table className="content-tables">
                    <thead>
                        <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.repos.map(post => (
                            <tr key ={post.id}>
                            {/* <div>id: {post.id} </div> */}
                            <td>{post.type}</td>
                            <td>{post.name}</td>
                            <td>{post.size}</td>
                            <td>{post.price}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        )
    } 
}
export default SF;