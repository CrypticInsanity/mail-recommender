'use strict'
// list of common public domains
const Domains = ["gmail.com", "yahoo.com", "hotmail.com"];
// How close the two strings must be.
let currentAccuracy = 3

$("[data-check-domain=true]").blur(function(event){
    let currentEmailValue = event.target.nodeValue;

    let distances = Domains.map(function(value, index){
        // convert the string to the distance measure.
        return {Lv: LevenshteinDistance(currentEmailValue, value), i: index}
    })
    .filter(function(value, index){
        //filter out the only values that
        return value.Lv <= currentAccuracy;
    });
    



    

})