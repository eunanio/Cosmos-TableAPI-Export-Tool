#COSMOS DB TABLE EXPORT TOOL

### What is it?
This tool exports CosmosDB TableAPI collections as a CSV file.

### How to Use
Setup  your cosmos account name and access key and cosmos endpoint as enviroment varibles as displayed below. DotEnv files are also supported
- ACCOUNT_NAME
- ACCESS_KEY
- ENDPOINT

**These can be found in your CosmosDB connections strings panel within azure.**

To run the tool. exceute the following commands in terminal. you reqiure NodeJS in order to use this tool.

`npm install`

`npm run export NAME_OF_TABLE`

and thats it. in a few moments you will have a csv file containing all the values within your CosmosDB Table.

###ToDo:
- Add support for pagration via continuousToken
