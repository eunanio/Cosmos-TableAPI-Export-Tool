require('dotenv').config();
const fs = require('fs');
var azure = require('azure-storage');

var tableSvc = azure.createTableService(process.env.ACCOUNT_NAME,process.env.ACCESS_KEY,process.env.ENDPOINT);
const TABLE = process.argv[2];
var query = new azure.TableQuery();

tableSvc.queryEntities(TABLE,query,null,function(err,result,response){
    if(!err){
        console.log(`-- EXPORTING FROM TABLE ${TABLE} --`);
        var headers = Object.keys(result.entries[0]).filter(key => key != '.metadata');
        var csv = [];
        console.log(headers);
        csv.push(headers.join(','));
        result.entries.forEach(item => {
            var values = [];
            headers.forEach(header => {
                values.push(`${item[header]._}`);
            });
            console.log(values);
            csv.push(values.join(','));
        });
        console.log(`-- EXPORT COMPLETE --`);
        var csvString = csv.join('\n');
        fs.writeFileSync(`${TABLE}.csv`,csvString);
    }else{
        console.error(err);
    }
});