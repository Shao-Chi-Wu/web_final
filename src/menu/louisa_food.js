import React,{Component} from "react";
import axios from "axios";
import "./louisa.css"

class LF extends Component {    
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
        const url = 'https://finalprojectcoffee.herokuapp.com/lousiafood.php';
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
            <div className="select">
                <select onChange={this.handleAdd}>
                    <option>吃啥</option>
                    <option>軟歐貝果系列</option>
                    <option>風味三明治</option>
                    <option>佛卡夏</option>
                    <option>貝果系列</option>
                    <option>義式磗壓三明治</option>
                    <option>口袋歐姆蛋</option>
                    <option>蛋堡</option>
                    <option>瑪芬堡</option>
                    <option>糕點</option>
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
        )
    } 
}
export default LF;
