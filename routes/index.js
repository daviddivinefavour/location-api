const stateRoutes = require('./stateRoutes');

module.exports = (app)=>{
     app.use('/api/v1/locations',stateRoutes)
}