import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'

export default [
  {
    input: 'src/index.js',
    plugins: [
      nodeResolve(),
      commonjs(),
      babel(),
      terser({
        compress: {
          pure_funcs: ['console.log'],
        },
      }), // uglifyjs alternative
    ],
    output: {
      file: 'vue-storage-idb-message.js',
      format: 'umd',
      name: 'VueStorageIdbMessage',
    },
  },
]
