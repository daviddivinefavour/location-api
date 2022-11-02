const stateRoutes = require('./stateRoutes');
const cities = require('./cityRoutes');

module.exports = (app)=>{
     app.use('/locations/states',stateRoutes),
     app.use('/locations/states',cities);
}