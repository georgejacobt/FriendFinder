// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var freiendsData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(freiendsData);
  });



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
   
      freiendsData.push(req.body);

      var currentItemIndex = freiendsData.length-1;

      var totDiff = 100 ;
      var loopSum;
      var friendsIndex ;
      var closeMatch;

 


      for (var j = 0 ; j < freiendsData.length ; j++){
        console.log(loopSum);
        
            if (loopSum < totDiff){
            totDiff = loopSum;
            friendsIndex = j-1;
            
        
        }
        
        loopSum = 0;

        for (var i =0; i < freiendsData[currentItemIndex].scores.length ; i++ ){

             loopSum = loopSum +    Math.abs((parseInt(freiendsData[j].scores[i]) - parseInt(freiendsData[currentItemIndex].scores[i])));
            

            // if (loopSum < totDiff){

            //     totDiff = loopSum;
            //     friendsIndex = j;

            // }



            
        

        
         
      }

      }

      console.log('current tot diff: '+ totDiff);

      console.log('Close match: '+freiendsData[friendsIndex].name);

      closeMatch =  [freiendsData[friendsIndex].name,freiendsData[friendsIndex].photo]




      

      

   

      

      
      res.json(closeMatch);

      // console.log(freiendsData);
     
    
 
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    freiendsData = [];
   

    console.log(freiendsData);
  });
};
