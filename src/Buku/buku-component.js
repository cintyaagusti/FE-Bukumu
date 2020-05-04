import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { Layout, Row, Col, Button } from 'antd';

const { Content} = Layout; // membuat konstanta content 

class BukuComponent extends Component{

  render(){
    console.log(this.props)
    const { columns, data } = this.props
      return ( 
        <Content className="">
          <div className="tambahbuku">
          <Link to={{pathname:"/tambahbuku"}}>
            <Button type="primary" >
               Tambah Buku
            </Button>
          </Link>
          </div>
          <div className="tabel">
          <Row style={{minHeight: '100vh', marginBottom: '2%', marginTop: '2%',}}> 
            <Col lg={24} md={24} sm={24}>
              <Table 
                columns={columns} 
                dataSource={data} 
              />
            </Col>
          </Row>
          </div>
          
        </Content>
  );
  }
}
export default BukuComponent;

















/*class BukuComponent extends Component{
  render () {
    return(
      <Layout className=" ">
        <Row style={{minHeight: '100', marginBottom: '2%', marginTop: '2%',}} className="tambahBuku"> 
          <Col lg={24} md={24} sm={24}>

            <div className="container-active">
              <Row>
                <Col lg={19} md={12} sm={12} xs={24}>
                  <div className="container-title">
                    <span>Nama Tabel</span>
                  </div>
                </Col>
                <Col lg={5} md={12} sm={12} xs={24}>
                  <div className="button-add">
                    <Button
                      text="Tambah"
                      height={20}
                      icon={UserAddOutlined}
                      borderRadius="5px"
                      background="#00c908"
                      onClick={()=>onCreateTabel()}
                    />
                  </div>
                </Col>
              </Row>
              <LoadingContainer loading={initialData.loading}>
                <Row gutter={24} type="flex">
                  <Table
                    columns={columns}
                    dataSource={data}
                    className="table-active"
                  />
                </Row>
              </LoadingContainer>
            </div>
          </Col>
        </Row>
      </Layout>
    );
  }
}*/
