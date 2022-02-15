/*
 * @Description:
 * @Version: 1.0
 * @Author: songchao
 * @Date: 2021-12-24 16:51:44
 * @LastEditors: songchao
 * @LastEditTime: 2021-12-28 09:26:07
 */
import { createBrowserHistory } from 'history'
import React from 'react'

// import useStore from '../store';

const Authority: React.FC = ({ children }) => {
  const history = createBrowserHistory()
  // const user = useStore((state) => state.user);
  // console.log('Authority', user);

  if (!localStorage.getItem('vite-react-ts-antd-token')) {
    history.push('/user/login')
  }
  // if (!user?.token) {
  //   history.push('/user/login');
  // }
  console.log(children)
  return <>{children}</>
}

export default Authority
