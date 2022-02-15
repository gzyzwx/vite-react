/*
 * @Description:
 * @Version: 1.0
 * @Author: songchao
 * @Date: 2021-12-27 16:06:34
 * @LastEditors: songchao
 * @LastEditTime: 2021-12-28 10:43:58
 */
import './global.less'

import { Spin } from 'antd'
import React, { Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'

import Authority from '@/layouts/Authority'
import routes from '@/routes/config'

const App = () => {
  return (
    <Suspense fallback={<Spin size="large" className="layout__loading" />}>
      <Authority>
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      </Authority>
    </Suspense>
  )
}

export default App
