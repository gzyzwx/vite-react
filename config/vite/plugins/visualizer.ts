/*
 * @Description:
 * @Version: 1.0
 * @Author: songchao
 * @Date: 2021-12-24 16:51:43
 * @LastEditors: songchao
 * @LastEditTime: 2021-12-29 08:32:29
 */
/**
 * 包依赖分析
 */
import visualizer from 'rollup-plugin-visualizer'

export default function configVisualizerConfig() {
  return visualizer({
    filename: './node_modules/.cache/visualizer/stats.html',
    open: true,
    gzipSize: true,
    brotliSize: true,
  }) as Plugin
}
