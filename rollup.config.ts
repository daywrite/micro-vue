import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

const inputName = 'main'
const outputName = 'bundle'

const config = {
  input: `./src/${inputName}.ts`,
  output: {
    file: `./lib/${outputName}.js`,
    format: 'esm'
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    typescript()
  ]
}

export default config