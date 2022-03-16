module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/es/components/${name.}/style/css`
        }
      }
    ]
  ],
  presets: ['@vue/cli-plugin-babel/preset']
}
