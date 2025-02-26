const path = require('path')
const { stringify } = require('querystring')
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescrript-eslint/recommended',
    //disable  cac rule ma eslint xung dot voi prettier
    'eslint-config-prettier',
    'prettier'
  ],
  plugins: ['prettier'],
  settings: {
    react: {
      //noi voi eslint-plugin-react tự động biết biết version của React
      version: 'detect'
    },
    //nói eslint cách xử lý import
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname)],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    //tắt rule yêu cầu import React trong file jsx
    'react/react-in-jsx-scope': 'off',
    //cảnh báo khi thẻ <a target = '_blank' > mà không có rel='nòeerrer'
    'react/jsx-no-target-blank': 'warn',
    //Tăng cường một số rule prettier (copy từ file .prettierrc qua)
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ]
  }
}
