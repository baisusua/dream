var tables = require('../models/models');

for(var item in tables){
    tables[item].sync({ force: true });
}