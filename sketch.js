var form;
var userCount = 0;
var user,database;
var response, responseJson, dateTime, hour, date;
var time;
var m,s,t1,t = 0;
var c = 0;
var timeD = 0;

function preload(){
  m = loadImage("mainimg.jpg");
  s = loadImage("scheduleimg.png");
  t1 = loadImage("timeimg.jpg")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  time = new Time();

form = new Form();
form.display();
user = new User();
user.getUserCount();

}
function draw() {
if(c === 0){
    background(m);
  }
  if(c === 1){
    background(s);
  }
  if(c === 2){
    background(t1);
  }
  time.getDateTime();
}