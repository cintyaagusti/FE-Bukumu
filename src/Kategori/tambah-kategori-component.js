import React, { Component } from 'react'; 
import {Layout, Row, Col, Button, Form } from 'antd';
import InputForm from "../component/input/input-form"

const { Content} = Layout; // membuat konstanta content 

class TambahKategoriComponent extends Component{

  render(){
    // console.log(this.props)
    const { handleChanger, initialData, handleSubmit, handleKategori } = this.props
      return ( 
        <Content className=" ">
            {/* yang ini minheight nya yg dihapus */}
          <Row style={{minHeight: '', marginBottom: '2%', marginTop: '2%',}}> 
            <Col lg={24} md={24} sm={24}>
                <h2>TAMBAH DATA KATEGORI</h2>
                <p>Silakan melakukan input data kategori dengan mengisi formulir dibawah ini.</p>
            </Col>
            <Col lg={24} md={24} sm={24}>
                <Form>
                    <span className="auth-input-label text-white">Nama Kategori</span>
                        <InputForm
                            name='nama_kategori'
                            placeholder="Masukkan nama kategori"
                            onChange={handleChanger}
                            value={initialData.nama_kategori}
                            className="input-auth mt-5 mb-20"
                        />
                    <Button
                        type="primary"
                        onClick={() => handleSubmit()}
                    >
                        Done
                    </Button>
                    
                </Form>
            </Col>
          </Row>
        </Content>
  );
  }
}
export default TambahKategoriComponent;
