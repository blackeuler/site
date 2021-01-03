module.exports = {
  chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "CDM - Constantly Doing More";
              return args;
          })
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/site/'
    : '/'
}