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
function log(input, type = "message user", MISC = null){
 if(input === "") return;
 var element = document.getElementById("logs");
 const messageCard = document.createElement("div");
 messageCard.textContent = input;
 messageCard.setAttribute('class', type);
 element.appendChild(messageCard);
 if(MISC != null)element.appendChild(MISC);
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
   keyword: "dues",
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
   keyword: "map",
   ID: 2
 },
 {
   keyword: "college",
   ID: 2
 },
 {
   keyword: "offers",
   ID: 3
 },
 {
   keyword: "seats",
   ID: 3
 },
 {
   keyword: "E.C.E",
   ID: 3
 },
 {
   keyword: "ECE",
   ID: 3
 },
 {
   keyword: "C.S.E",
   ID: 3
 },
 {
   keyword: "CSE",
   ID: 3
 },
 {
   keyword: "COMPUTER",
   ID: 3
 },
 {
   keyword: "cyber",
   ID: 3
 },
 {
   keyword: "intelligence",
   ID: 3
 },
 {
   keyword: "aiml",
   ID: 3
 },
 {
   keyword: "information",
   ID: 3
 },
 {
   keyword: "COMPUTER SCIENCE",
   ID: 3
 },  
 {
   keyword: "mechanical",
   ID: 6
 },  
 {
   keyword: "mech",
   ID: 6
 },
 {
   keyword: "civil",
   ID: 6
 },
 {
   keyword: "infrastructure",
   ID: 7
 },
 {
   keyword: "facilities",
   ID: 7
 },
 {
   keyword: "block",
   ID: 7
 },
 {
   keyword: "architecture",
   ID: 7
 },
 {
   keyword: "civil",
   ID: 6
 },
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
   question: "College location?",
   answer: "Here is the location of the college",
   map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.0197610165824!2d78.48535181441314!3d17.601796487950413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb85fab149cbb5%3A0x8a587e9e64725dcd!2sCMR%20Engineering%20College!5e0!3m2!1sen!2sin!4v1647697662321!5m2!1sen!2sin"
 },
 {
   question: "Accomodation Table / Department offerings?",
   answer: "This is the intake table for CMREC",
   media: "https://i.ibb.co/VWPj5g6/Screenshot-2022-03-19-081511.png"
 },  
 {
   question: "Help related to admissions.",
   answer: "You can contact the administration by mail or by Whatsapp",
   hlink: [
     {link: "http://wa.me/+919248727229", 
      text: "+91 9248727229"
     }, 
     {link: "info@cmrec.ac.in", 
      text: "info@cmrec.ac.in"
     }
   ]
 },
 {
   question: "Fee enquiry?",
   answer: "Online mode:: login into student portal... Offline mode:: contact AO chamber",
   hlink: [{link: "cmrecerp.com/BeesERP/Login.aspx", text: "Student login"}]
 }, 
 {
   question: null,
   answer: "We do not offer those courses."
 }, 
 {
   question: "What are the facilities / infrastructure provided in college?",
   answer: "Here is the block diagram showing infrastructure of the college",
   media: "https://i.ibb.co/BPNcMJR/INFRASTRUCTUE-OF-CMREC.jpg"
 },
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
     var misc = null;
     const j = inspect(i.split(" "));
     if(queryResponse[j].hlink) misc = linkGen(queryResponse[j].hlink);
     else if(queryResponse[j].media) misc = imgGen(queryResponse[j].media);
     else if(queryResponse[j].map) misc = mapGen(queryResponse[j].map);
     log(queryResponse[j].answer, "message bot", misc);
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
   if(queryResponse[i].question !== null){
     button = document.createElement("button");
     button.setAttribute('class', "botbutton");
     button.setAttribute('onclick', `main(queryResponse[${i}].question)`);
     button.textContent = queryResponse[i].question;
     buttonDiv.appendChild(button);
   }
 }
 element.appendChild(buttonDiv);
}
function linkGen(link){
 var hyp;
 var elem = document.createElement("div");
 elem.setAttribute("class", "message bot");
 for(var i = 0; i < link.length; i++){
   hyp = document.createElement("a");
   hyp.setAttribute("href", link[i].link);
   hyp.setAttribute("class", "ltext");
   hyp.textContent = link[i].text;
   elem.appendChild(hyp);
 }
 return elem;
}
//booked
function imgGen(link){
 var Image = document.createElement("img");
 Image.setAttribute("src", link);
 Image.setAttribute("class", "image");
 return Image;
}
function mapGen(map){
 var frame = document.createElement("iframe");
 frame.setAttribute("src", map);
 frame.setAttribute("class", "image"); 
 frame.setAttribute("width", "600"); 
 frame.setAttribute("height", "450");  
 return frame;
}
buttongen();
