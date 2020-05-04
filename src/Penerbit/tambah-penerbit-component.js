import React, { Component } from 'react'; 
import {Layout, Row, Col, Button, Form } from 'antd';
import InputForm from "../component/input/input-form"

const { Content} = Layout;

class TambahPenerbitComponent extends Component{

  render(){
    // console.log(this.props)
    const { handleChanger, initialData, handleSubmit } = this.props
      return ( 
        <Content className=" ">
          <Row style={{minHeight: '', marginBottom: '2%', marginTop: '2%',}}> 
            <Col lg={24} md={24} sm={24}>
                <h2>TAMBAH DATA PENERBIT</h2>
                <p>Silakan melakukan input data penerbit dengan mengisi formulir dibawah ini.</p>
            </Col>
            <Col lg={24} md={24} sm={24}>
                <Form>
                    <span className="auth-input-label text-white">Nama Penerbit</span>
                        <InputForm
                            name='nama_penerbit'
                            placeholder="Masukkan nama penerbit"
                            onChange={handleChanger}
                            value={initialData.nama_penerbit}
                            className="input-auth mt-5 mb-20"
                        />
                        <span className="auth-input-label text-white">Alamat</span>
                            <InputForm
                                name='alamat'
                                placeholder="Masukkan alamat penerbit"
                                onChange={handleChanger}
                                value={initialData.alamat}
                                className="input-auth mt-5 mb-20"
                            />
                            <span className="auth-input-label text-white">Email</span>
                                <InputForm
                                    name='email'
                                    placeholder="Masukkan email penerbit"
                                    onChange={handleChanger}
                                    value={initialData.email}
                                    className="input-auth mt-5 mb-20"
                                />
                        
                        <span className="auth-input-label text-white">Telepon</span>
                            <InputForm
                                name='telp'
                                placeholder="Masukkan nomor telepon penerbit"
                                onChange={handleChanger}
                                value={initialData.telp}
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

export default TambahPenerbitComponent;

/*const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class TambahPenerbit extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Data telah disimpan: ' + this.state.value);
    event.preventDefault();
  }
    render () {
      return (
        <Content className="" >
          <div className="">
            <br></br>
            <h2>
              TAMBAH DATA PENERBIT
            </h2>
            <p>
              Silakan melakukan input data penerbit dengan mengisi formulir dibawah ini.
            </p>
          </div>
          <div className="form-tambah">
            <Form {...layout} onSubmit={this.handleSubmit}>
              <Form.Item name="ID Penerbit" label="ID Penerbit" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="Nama Penerbit" label="Nama Penerbit" rules={[{ required: true }]}>
              <Input />
              </Form.Item>
              <Form.Item name="Alamat" label="Alamat" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="Email" label="Email" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="Telepon" label="Telepon" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Simpan
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
      )
    }

}*/
