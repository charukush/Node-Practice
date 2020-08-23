'use strict';

var contentList = []

module.exports.createContent = async event => {
   // Parse body to object
   var body = event.body;
   var parsebody = JSON.parse(body);
    contentList.push(parsebody);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Added',
       
      }
    
    ),
  };

};
// Display List

module.exports.contentList = async event => {
    
  return {
    statusCode: 200,
    body: JSON.stringify(
        contentList
    
    ),
  };

};