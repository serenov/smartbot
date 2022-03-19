// essentials
function scroll(){
    var elem = document.getElementById('logs');
   elem.scrollTo({top: elem.scrollHeight, behavior: 'smooth'});
 }
 document.addEventListener("keyup", function(event) {
     if (event.keyCode === 13) {
         main(takeInput());
     }
 });
 
 
 // SCRIPT FOR USER INPUT
 function takeInput(){
   var i = document.getElementById("inputbox").value
   document.getElementById('inputbox').value = "";
   return i;
 }
 function log(input, type = "message user"){
   if(input === "") return;
   var element = document.getElementById("logs");
   const messageCard = document.createElement("div");
   messageCard.textContent = input;
   messageCard.setAttribute('class', type);
   element.appendChild(messageCard);
   scroll();
 }
 
 //JSON
 let keywords = [
   {
     keyword: "admission",
     ID: 4
   },
   {
     keyword: "code",
     ID: 1
   },
   {
     keyword: "department",
     ID: 3
   },
   {
     keyword: "direction",
     ID: 2
   },
   {
     keyword: "directions",
     ID: 2
   },
   {
     keyword: "eamcet",
     ID: 1
   },
   {
     keyword: "fee",
     ID: 5
   },
   {
     keyword: "fees",
     ID: 5
   },
   {
     keyword: "help",
     ID: 4
   },
   {
     keyword: "location",
     ID: 2
   },
   {
     keyword: "offers",
     ID: 3
   },
   {
     keyword: "seats",
     ID: 3
   }
 ];
 let queryResponse = [
   {
     question: null,
     answer: "I didn't understand"
   },
   {
     question: "What is the EAMCET code?",
     answer: "CMRN"
   },
   {
     question: "College map?",
     answer: "response2"
   },
   {
     question: "Accomodation Table/ Department offerings?",
     answer: "response3"
   },  
   {
     question: "Help related to admissions.",
     answer: "response4",
   },
   {
     question: "Fee enquiry?",
     answer: "response5"
   }
 ];
 
 //response logic
 function inspect(input){
   for(var i = 0; i < input.length; i++){
     for(var j = 0; j < keywords.length; j++){
       if(input[i] === keywords[j].keyword) return keywords[j].ID;
     }
   }
   return 0;
 }
 
 //main
 function main(input){
   log(input);
   
   const i = input.toLowerCase();
   
   setTimeout(
     function (){
       if(i === "")return;
        log(queryResponse[inspect(i.split(" "))].answer, "message bot");
     },
     700
   );
   
 }
 //buttons
 function buttongen(){
   const element = document.getElementById("logs");
   const buttonDiv = document.createElement("div");
   buttonDiv.setAttribute('class', "bbut");
   var button;
   for(var i = 1; i < queryResponse.length; i++){
     button = document.createElement("button");
     button.setAttribute('class', "botbutton");
     button.setAttribute('onclick', `main(queryResponse[${i}].question)`);
     button.textContent = queryResponse[i].question;
     buttonDiv.appendChild(button);
   }
   element.appendChild(buttonDiv);
 }
 //booked
 buttongen();
 