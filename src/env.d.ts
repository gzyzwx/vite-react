/*
 * @Description: 给环境变量声明类型，以便在代码中可以ts智能提示
 * @Version: 1.0
 * @Author: songchao
 * @Date: 2021-12-28 11:49:25
 * @LastEditors: songchao
 * @LastEditTime: 2021-12-29 08:26:21
 */

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SOME_KEY: string
  // 更多环境变量...
}

// eslint-disable-next-line
interface ImportMeta {
  readonly env: ImportMetaEnv
}
