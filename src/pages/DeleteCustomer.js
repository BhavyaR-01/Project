import React from 'react';  
    
import axios from 'axios';  
    
class Deletecustomer extends React.Component {  
  state = {  
    posts: []  
  }  
    
  componentDidMount() {  
    axios.get(`http://localhost:8082/Customer`)  
      .then(res => {  
        const posts = res.data;  
        this.setState({ posts });  
      })  
  }  
    
  deleteRow(id, e){  
    axios.delete(`http://localhost:8082/Customer/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const posts = this.state.posts.filter(item => item.id !== id);  
        this.setState({ posts });  
      })  
    
  }  
    
  render() {  
    return (  
      <div>  
        <h1> Delete Request </h1>  
    
        <table className="table table-bordered">  
            <thead>  
              <tr>  
                  <th>ID</th>  
                  <th>Name</th>  
                  <th>order_id</th> 
                  <th>phone</th> 
                  <th>email</th> 
                  <th>Action</th>  
              </tr>  
            </thead>  
    
            <tbody>  
              {this.state.posts.map((post) => (  
                <tr>  
                  <td>{post.id}</td>  
                  <td>{post.name}</td>  
                  <td>{post.order_id}</td>
                  <td>{post.phone}</td>
                  <td>{post.email}</td>    
                  <td>  
                    <button className="btn-btn-danger" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>  
                  </td>  
                </tr>  
              ))}  
            </tbody>  
    
        </table>  
      </div>  
    )  
  }  
}  
export default Deletecustomer;