import React, {Component} from 'react';
import axios from 'axios';
import { message } from 'antd';
import TambahPenerbitComponent from "../Penerbit/tambah-penerbit-component"


class TambahPenerbit extends Component {
  state = {
      nama_penerbit : "",
      alamat : "",
      email : "",
      telp : "",
  }

  handleChange = (e) => {
    let target = e.target.name;
    let value = e.target.value;
    this.setState({
        [target]: value
    })
}

  handleSubmit = () => {
    // console.log(this.state.nama_penerbit)
    let headers = {};
    
    let config = {
      headers : headers,
    }

    headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODYwNDQzMiwiZXhwIjoxNTg4NjA4MDMyLCJuYmYiOjE1ODg2MDQ0MzIsImp0aSI6IlhpdDJoNkowRzF6VnA4bkEiLCJzdWIiOjEwLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.DS41WYhp8T0enaJaCaDoq51v5xW0vA-Sv8KxoEmiN3A`;
    
    const params = new FormData();
    params.set('nama_penerbit', this.state.nama_penerbit)
    params.set('alamat', this.state.alamat)
    params.set('email', this.state.email)
    params.set('telp', this.state.telp)

    axios.post(`http://127.0.0.1:8000/api/create-penerbit`, params,config)
    .then(res => {
      console.log('data',res)
      if(res.status === 200){
        message.success('Data Berhasil ditambah');
        
      }
    })
    
  }
    render () {
      return (

        <TambahPenerbitComponent
            initialData = {this.state}
            handleChanger = {this.handleChange}
            handleSubmit = {this.handleSubmit}
        />
        
      )
    }

}

export default TambahPenerbit;