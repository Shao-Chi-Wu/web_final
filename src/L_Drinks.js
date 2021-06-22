import React,{Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import './App.css';
import './Navbar.css';
import "./menu/louisa.css"

var sectionStyle = {
    height : '105vh',
    backgroundSize: 'cover',
    backgroundImage: 'url(https://i.imgur.com/aP7HN6W.jpg)',
    opacity: '0.9',
};

class LD extends Component {    
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
        const url = 'https://finalprojectcoffee.herokuapp.com/louisadrink.php';
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
                    <Link to="/louisa" className="navbar-logo">
                        drinks Menu
                    </Link>
                </nav>
                <div className="select">
                    <select onChange={this.handleAdd}>
                        <option>喝啥</option>
                        <option>莊園濃縮系列</option>
                        <option>典藏手沖咖啡</option>
                        <option>經典義式咖啡</option>
                        <option>嚴選小農牧場</option>
                        <option>單品茶</option>
                        <option>美式冰沙</option>
                        <option>英國皇家泰勒茶</option>
                        <option>水果茶系列</option>
                        <option>其他飲品</option>
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
                    <table className="content-table">
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
export default LD;