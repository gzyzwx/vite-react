/*
 * @Description: 1
 * @Version: 1.0
 * @Author: songchao
 * @Date: 2021-12-24 16:51:44
 * @LastEditors: songchao
 * @LastEditTime: 2021-12-28 10:05:18
 */
import { Layout } from 'antd'
import React from 'react'
import { renderRoutes } from 'react-router-config'

import { IRouteConfig } from '@/routes/config'

import MyHeader from '../components/Header'
import MyMenu from '../components/Menu'

const { Content } = Layout

const BasicLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  console.log('route', route)
  return (
    <Layout>
      <MyMenu />
      <Layout>
        <MyHeader />
        <Content style={{ height: 'calc(100vh - 60px)' }}>
          {renderRoutes(route.routes)}
        </Content>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
