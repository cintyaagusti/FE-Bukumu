import React, {Component} from 'react';
import axios from 'axios';
import { message } from 'antd';
import TambahBukuComponent from '../Buku/tambah-buku-component';


let id_kategori = localStorage.getItem("id_kategori");
let id_penerbit = localStorage.getItem("id_penerbit");

class TambahBuku extends Component {
  state = {
      kategori_buku : [],
      penerbit : [],
      judul : "",
      pengarang : "",
      stok : "",
      harga : "",
      id_kategori : '',
      id_penerbit : '',
  }

  componentDidMount() {
    this.getKategori();
    this.getPenerbit();
  }

  handleKategori = (input, option) => {
    console.log('input', input, 'option', option);
    this.setState({ id_kategori: input })  
  }

  handlePenerbit = (input, option) => {
    console.log('input', input, 'option', option);
    this.setState({ id_penerbit: input })  
  }

  getKategori = () =>{
    let headers = {};

    let config = {
      headers : headers,
    }

    headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODYwNDQzMiwiZXhwIjoxNTg4NjA4MDMyLCJuYmYiOjE1ODg2MDQ0MzIsImp0aSI6IlhpdDJoNkowRzF6VnA4bkEiLCJzdWIiOjEwLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.DS41WYhp8T0enaJaCaDoq51v5xW0vA-Sv8KxoEmiN3A`;

    axios.get(`http://127.0.0.1:8000/api/kategori_buku`, config)
    .then(res => {
      // console.log('ini data asli',res.data.data.kategori_buku)
      this.setState({ kategori_buku : res.data.data.kategori_buku}) 
    })
  }

  getPenerbit = () =>{
    let headers = {};

    let config = {
      headers : headers,
    }

    headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODYwNDQzMiwiZXhwIjoxNTg4NjA4MDMyLCJuYmYiOjE1ODg2MDQ0MzIsImp0aSI6IlhpdDJoNkowRzF6VnA4bkEiLCJzdWIiOjEwLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.DS41WYhp8T0enaJaCaDoq51v5xW0vA-Sv8KxoEmiN3A`;

    axios.get(`http://127.0.0.1:8000/api/penerbit`, config)
    .then(res => {
      // console.log('ini data asli',res.data.data.penerbit,)
      this.setState({ penerbit : res.data.data.penerbit})
    })
  }

  handleChange = (e) => {
    let target = e.target.name;
    let value = e.target.value;
    this.setState({
        [target]: value
    })
  }

  
  onChangeDate= (time, timeString) =>{
    this.setState({ 
      tahun_terbit: timeString,
    })
}

  handleSubmit = () => {
    // console.log(this.state.judul)
    let headers = {};
    
    let config = {
      headers : headers,
    }

    headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODYwNDQzMiwiZXhwIjoxNTg4NjA4MDMyLCJuYmYiOjE1ODg2MDQ0MzIsImp0aSI6IlhpdDJoNkowRzF6VnA4bkEiLCJzdWIiOjEwLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.DS41WYhp8T0enaJaCaDoq51v5xW0vA-Sv8KxoEmiN3A`;
    
    const params = new FormData();

    params.set('id_kategori', this.state.id_kategori)
    params.set('judul', this.state.judul)
    params.set('pengarang', this.state.pengarang)
    params.set('id_penerbit', this.state.id_penerbit)
    params.set('stok', this.state.stok)
    params.set('harga', this.state.harga)
  

    axios.post(`http://127.0.0.1:8000/api/create-buku`, params,config)
    .then(res => {
      console.log(res)
      console.log('data',res)
      if(res.status === 200){
        message.success('Data Berhasil ditambah');
        
      }
    })
    
  }

  render () {
      return (

        <TambahBukuComponent
            initialData = {this.state}
            handleChanger = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            handleKategori = {this.handleKategori}
            handlePenerbit = {this.handlePenerbit}
            onChangeDate = {this.onChangeDate}
        />
        
      )
    }

}

export default TambahBuku;