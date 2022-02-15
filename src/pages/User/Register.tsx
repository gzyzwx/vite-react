/*
 * @Description: 1
 * @Version: 1.0
 * @Author: songchao
 * @Date: 2021-12-24 16:51:44
 * @LastEditors: songchao
 * @LastEditTime: 2021-12-28 11:49:15
 */
import './index.less'

import React from 'react'

import cls from './index.module.less'

const Register: React.FC = () => {
  const obj = { a: 1, b: 2 }
  const mergeObj = { ...obj, c: 123 }
  // 测试 环境变量 import.meta.env
  console.log('1111111111111111')
  console.log(import.meta.env)
  return (
    <div>
      <h2>Register</h2>
      <div>content:</div>
      <div className="font">fonst size == 50px</div>
      <div className={cls.red}>{JSON.stringify(mergeObj, null, 4)}</div>
    </div>
  )
}
export default Register
