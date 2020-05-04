import React, { Component } from 'react'; //import dari react biasa
import "./LayoutBeranda.css";
import { Layout, Menu } from 'antd'; //tadinya ada breadcrumb
import { 
  UserOutlined, 
  LaptopOutlined, 
  NotificationOutlined,
  HomeOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';
import Routing from '../Routes/Route'
//import { render } from '@testing-library/react';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class LayoutBeranda extends Component{
  render(){
      return (
        <Layout>
          <Header className="header">
              <div className="logoweb">
                <Avatar shape="square" size={64} src="assets/images/ebook.png" alt=""/>
              </div>
          </Header>
        
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100vh', borderRight: 0 }}
            >
                
                <Menu.Item key="1">
                  <HomeOutlined />
                  Dashboard
                </Menu.Item>
          
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                    <LaptopOutlined />
                    Data Buku
                    </span>
                  }
                >
                  <Menu.Item key="2"><Link to="/buku">Buku</Link></Menu.Item>
                  <Menu.Item key="3"><Link to="/kategori">Kategori</Link></Menu.Item>
                </SubMenu>
          
                <Menu.Item key="4">
                  <NotificationOutlined />
                  <Link to="/penerbit">Penerbit</Link>
                </Menu.Item>
          
                <Menu.Item key="5">
                  <UserOutlined />
                  Logout
                </Menu.Item>
            </Menu>
          </Sider>
      
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Routing/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
    );
  }
}


  
export default LayoutBeranda;