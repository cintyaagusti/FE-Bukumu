import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { Layout, Row, Col, Button } from 'antd';
  
const { Content} = Layout; // membuat konstanta content 
  
class PenerbitComponent extends Component{
  
  render(){
    const { columns, data } = this.props
      return ( 
        <Content className=" ">
          <div className="tambahpenerbit" style={{marginBottom:0}} >
          <Link to={{pathname:"/tambahpenerbit"}}>
            <Button type="primary" >
               Tambah Penerbit
            </Button>
          </Link>
          </div>
            <Row style={{minHeight: '100', marginBottom: '2%', marginTop: '2%',}} > 
              <Col lg={24} md={24} sm={24}>
                <Table 
                  columns={columns} 
                  dataSource={data} 
                />
              </Col>
            </Row>
          </Content>
      );
  }
  
}
  
export default PenerbitComponent;