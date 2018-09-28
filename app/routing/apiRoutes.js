var friends = require("../data/friends");


module.exports = function(app){


    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
 
        var newFriend = req.body;
        
        console.log(newFriend);
    
        var totaldiff = 0;
        var allDiff = [];
    
        for (var i=0; i < friends.length; i++){
            for(var j=0; j< friends[i].scores.length; j++){  
                totaldiff += Math.abs((friends[i].scores[j] - newFriend.scores[j]));
                
            }
            allDiff.push(totaldiff);
            totaldiff=0;
            
        }
        console.log(allDiff);
        friends.push(newFriend);
    
        var min = Math.min.apply(Math, allDiff)
        console.log("min " + min);
        var matchIndex = allDiff.indexOf(min);
    
        var match = {
            name: friends[matchIndex].name,
            photo: friends[matchIndex].photo
        }
        console.log(friends);
        res.json(match);
      });
    
    


}