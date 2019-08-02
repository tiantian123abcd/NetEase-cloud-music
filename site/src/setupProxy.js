const proxy = require('http-proxy-middleware');

module.exports=function(app) {
    app.use('/cloud',proxy({
        changeOrigin:true,
        target:'10.60.15.196:8888',
        pathRewrite:{
            '^/cloud':''
        }
    }))
};