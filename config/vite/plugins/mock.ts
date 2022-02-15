/*
 * @Description:
 * @Version: 1.0
 * @Author: songchao
 * @Date: 2021-12-24 16:51:43
 * @LastEditors: songchao
 * @LastEditTime: 2021-12-29 08:32:25
 */
/**
 * Mock plugin for development and production.
 */
import { viteMockServe } from 'vite-plugin-mock'

export default function configMockPlugin(isBuild: boolean) {
  console.log('isBuild', isBuild)
  return viteMockServe({
    ignore: /^_/,
    mockPath: 'mock',
    localEnabled: !isBuild,
    prodEnabled: isBuild,
    injectCode: `
       import { setupProdMockServer } from '../mock/_createProductionServer';

       setupProdMockServer();
       `,
  })
}
