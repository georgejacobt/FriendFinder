// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var freindsArray = [
    {
      "name": "George",
      "photo": "georgea@example.com",
      "scores": [5,1,4,4,5,1,2,5,4,1]
      
    }
  ];
  
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = freindsArray;