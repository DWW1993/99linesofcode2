var friends = ["Jordan", "Reagan", "Will", "Corey", "Roxie"];

document.addEventListener("DOMContentLoaded", function(){
    var friend = document.getElementsByClassName("friend");
    var btn = document.createElement("BUTTON");
    var btntxt = document.createTextNode("Sing!");
    btn.appendChild(btntxt);
    document.body.appendChild(btn);
    var sing = document.getElementsByTagName("BUTTON")[0];
    sing.addEventListener("click", function(){
        for (var f = 0; f < friends.length; f++) {
            
            console.log(friends[f] + ":");
            for (var b = 99; b > 0; b--) {
                if(b >= 3) {
                    console.log(b + " lines of code in the file, " + b + " lines of code; " + friends[f] + " strikes one out, clears it all out, " + (b - 1) + " lines of code in the file");
                } else if(b === 2) { 
                    console.log(b + " lines of code in the file, " + b + " lines of code; " + friends[f] + " strikes one out, clears it all out, " + (b - 1) + " line of code in the file");
                } else {
                    console.log(b + " line of code in the file, " + b + " line of code; " + friends[f] + " strikes one out, clears it all out, no more lines of code in the file");
                }
            } 
        }
    });
});

//var sing= document.getElementsByTagName("button");
//sing.addEventListener("click", function(){
   // for (var f = 0; f < friends.length; f++) {
       // console.log(friends[f] + ":");
       // for (var b = 99; b > 0; b--) {
            //if(b >= 3) {
          //      console.log(b + " lines of code in the file, " + b + " lines of code; " + friends[f] + " strikes one out, clears it all out, " + (b - 1) + " lines of code in the file");
           // } else if(b === 2) { 
          //      console.log(b + " lines of code in the file, " + b + " lines of code; " + friends[f] + " strikes one out, clears it all out, " + (b - 1) + " line of code in the file");
         //   } else {
         //       console.log(b + " line of code in the file, " + b + " line of code; " + friends[f] + " strikes one out, clears it all out, no more lines of code in the file");
       //    }
      //  } 
   // }
//});