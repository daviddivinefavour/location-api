const stateRoutes = require('./stateRoutes');
const cities = require('./cityRoutes');

module.exports = (app)=>{
     app.use('/api/v1/locations',stateRoutes),
     app.use('/api/v1/locations',cities);
}