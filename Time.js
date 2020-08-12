class Time{
    constructor(){
        this.hour = null;
        this.date = null;
    }
    async getDateTime(){
        response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        responseJson = await response.json();
        dateTime = responseJson.datetime;
        this.hour = dateTime.slice(11,13);
        this.date = dateTime.slice(0,10);
        console.log(this.date);
    }
}