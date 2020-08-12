class Form{
    constructor(){
        this.mailId = createInput('Email');
        this.mailId.style('width:250px');
        this.mailId.style('height:50px');
        this.submitButton = createButton('submit');
        this.submitButton.style('width:150px');
        this.submitButton.style('height:40px');
        this.title = createElement('h1');
        //this.title.style('font:')
        this.todayD = createButton('today');
        this.todayD.style('width:150px');
        this.todayD.style('height:40px');
        this.tommorowD = createButton('tommorow');
        this.backButton = createButton('Back');
        this.backButton.hide();
        this.schedule = createButton('schedule');
        this.schedule.style('width:150px');
        this.schedule.style('height:40px');
        this.scheduleD = createElement('h2');
        this.scheduleD.hide();
        this.schedule.hide();
        this.td = createElement('h2');
        this.h1 = createButton('8:00 am');
        this.h1.style('width:100px');
        this.h1.style('height:25px');
        this.h2 = createButton('9:00 am');
        this.h2.style('width:100px');
        this.h2.style('height:25px');
        this.h3 = createButton('10:00 am');
        this.h3.style('width:100px');
        this.h3.style('height:25px');
        this.h4 = createButton('11:00 am');
        this.h4.style('width:100px');
        this.h4.style('height:25px');
        this.h5 = createButton('12:00 pm');
        this.h5.style('width:100px');
        this.h5.style('height:25px');
        this.h6 = createButton('1:00 pm');
        this.h6.style('width:100px');
        this.h6.style('height:25px');
        this.h7 = createButton('2:00 pm');
        this.h7.style('width:100px');
        this.h7.style('height:25px');
        this.h8 = createButton('3:00 pm');
        this.h8.style('width:100px');
        this.h8.style('height:25px');
        this.h9 = createButton('4:00 pm');
        this.h9.style('width:100px');
        this.h9.style('height:25px');
        this.h10 = createButton('5:00 pm');
        this.h10.style('width:100px');
        this.h10.style('height:25px');
        this.h11 = createButton('6:00 pm');
        this.h11.style('width:100px');
        this.h11.style('height:25px');
        this.h12 = createButton('7:00 pm');
        this.h12.style('width:100px');
        this.h12.style('height:25px');
        this.h13 = createButton('8:00 pm');
        this.h13.style('width:100px');
        this.h13.style('height:25px');
        this.h14 = createButton('9:00 pm');
        this.h14.style('width:100px');
        this.h14.style('height:25px');
        this.h15 = createButton('10:00 pm');
        this.h15.style('width:100px');
        this.h15.style('height:25px');
        this.input = createInput('What to do');
        this.input.style('width:700px');
        this.input.style('height:200px');
        this.h1.hide();
        this.h2.hide();
        this.h3.hide();
        this.h4.hide();
        this.h5.hide();
        this.h6.hide();
        this.h7.hide();
        this.h8.hide();
        this.h9.hide();
        this.h10.hide();
        this.h11.hide();
        this.h12.hide();
        this.h13.hide();
        this.h14.hide();
        this.h15.hide();
        this.input.hide();
        this.todayD.hide();
        this.tommorowD.hide();
        this.td.hide();
    }

    hidehour(){
        //background()
        this.h1.hide();
        this.h2.hide();
        this.h3.hide();
        this.h4.hide();
        this.h5.hide();
        this.h6.hide();
        this.h7.hide();
        this.h8.hide();
        this.h9.hide();
        this.h10.hide();
        this.h11.hide();
        this.h12.hide();
        this.h13.hide();
        this.h14.hide();
        this.h15.hide();
        this.input.show();
        this.input.position(350,200);
        this.schedule.show();
        this.schedule.position(650,500);
    }

    display(){
        this.mailId.position(550, displayHeight/2 - 80);
        this.title.html("Scheduler");
        this.title.position(610,20);
        this.submitButton.position(600, displayHeight/2);

        this.submitButton.mousePressed(()=>{
            c = 1;
            this.mailId.hide();
            this.submitButton.hide();
            user.email = this.mailId.value();
            userCount = userCount + 1;
            user.num = userCount;
            this.todayD.show();
            this.tommorowD.show();
            this.td.show();
            //this.tommorowD.position(700,100);
            this.todayD.position(610,250);
            this.td.html(time.date);
            this.td.position(610,310);
        })
        this.todayD.mousePressed(()=>{
            c = 2;
            this.todayD.hide();
            this.tommorowD.hide();
            this.td.hide();
            this.h1.show();
            this.h2.show();
            this.h3.show();
            this.h4.show();
            this.h5.show();
            this.h6.show();
            this.h7.show();
            this.h8.show();
            this.h9.show();
            this.h10.show();
            this.h11.show();
            this.h12.show();
            this.h13.show();
            this.h14.show();
            this.h15.show();
            this.h1.position(600,150);
            this.h2.position(750,150);
            this.h3.position(900,150);
            this.h4.position(600,250);
            this.h5.position(750,250);
            this.h6.position(900,250);
            this.h7.position(600,350);
            this.h8.position(750,350);
            this.h9.position(900,350);
            this.h10.position(600,450);
            this.h11.position(750,450);
            this.h12.position(900,450);
            this.h13.position(600,550);
            this.h14.position(750,550);
            this.h15.position(900,550);

        })

        this.h1.mousePressed(()=>{
            t = 8;
            this.hidehour();
        })

        this.h2.mousePressed(()=>{
            t = 9;
            this.hidehour();
        })

        this.h3.mousePressed(()=>{
            t = 10;
            this.hidehour();
        })

        this.h4.mousePressed(()=>{
            t = 11;
            this.hidehour();
        })

        this.h5.mousePressed(()=>{
            t = 12;
            this.hidehour();
        })

        this.h6.mousePressed(()=>{
            t = 13;
            this.hidehour();
        })

        this.h7.mousePressed(()=>{
            t = 14;
            this.hidehour();
        })

        this.h8.mousePressed(()=>{
            t = 15;
            this.hidehour();
        })

        this.h9.mousePressed(()=>{
            t = 16;
            this.hidehour();
        })

        this.h10.mousePressed(()=>{
            t = 17;
            this.hidehour();
        })

        this.h11.mousePressed(()=>{
            t = 18;
            this.hidehour();
        })

        this.h12.mousePressed(()=>{
            t = 19;
            this.hidehour();
        })

        this.h13.mousePressed(()=>{
            t = 20;
            this.hidehour();
        })

        this.h14.mousePressed(()=>{
            t = 21;
            this.hidehour();
        })

        this.h15.mousePressed(()=>{
            t = 22;
            this.hidehour();
        })

        this.schedule.mousePressed(()=>{
            c = 2;
            this.backButton.show();
            this.backButton.position(displayWidth-100,30);
            var a = this.input.value();
            this.input.hide();
            this.schedule.hide();
            this.scheduleD.show();
            this.scheduleD.html("Your scheduling is done for : "+a);
            this.scheduleD.position(displayWidth/2-300,100);
            if(t === 8){
                user.time1 = t;
                user.msg1 = a;
                user.update();
                user.updateCount(userCount);
            }
            if(t === 9){
                user.time1 = t;
                user.msg1 = a;
                user.update();
                user.updateCount(userCount);
            }
            if(t === 10){
                user.time1 = t;
                user.msg1 = a;
                user.update();
                user.updateCount(userCount);
            }
            if(t === 11){
                user.time1 = t;
                user.msg1 = a;
                user.update();
                user.updateCount(userCount);
            }
            if(t === 12){
                user.time1 = t;
                user.msg1 = a;
                user.update();
                user.updateCount(userCount);
            }
            if(t === 13){
                user.time1 = t;
                user.msg1 = a;
                user.update();
                user.updateCount(userCount);
            }
            if(t === 14){
                user.time1 = t;
                user.msg1 = a;
                user.update();
                user.updateCount(userCount);
            }
            if(t === 15){
                user.time1 = t;
                user.msg1 = a;
                user.update();
                user.updateCount(userCount);
            }
            if(t === 16){
                user.time1 = t;
                user.msg1 = a;
                user.update();
                user.updateCount(userCount);
            }
            if(t === 17){
                user.time1 = t;
                user.msg1 = a;
                user.update();
                user.updateCount(userCount);
            }
            if(t === 18){
                user.time1 = t;
                user.msg1 = a;
                user.update();
                user.updateCount(userCount);
            }
            if(t === 19){
                user.time1 = t;
                user.msg1 = a;
                user.update();
                user.updateCount(userCount);
            }
            if(t === 20){
                user.time1 = t;
                user.msg1 = a;
                user.update();
                user.updateCount(userCount);
            }
            if(t === 21){
                user.time1 = t;
                user.msg1 = a;
                user.update();
                user.updateCount(userCount);
            }
            if(t === 22){
                user.time1 = t;
                user.msg1 = a;
                user.update();
                user.updateCount(userCount);
            }
        })
        this.backButton.mousePressed(()=>{
            this.h1.show();
            this.h2.show();
            this.h3.show();
            this.h4.show();
            this.h5.show();
            this.h6.show();
            this.h7.show();
            this.h8.show();
            this.h9.show();
            this.h10.show();
            this.h11.show();
            this.h12.show();
            this.h13.show();
            this.h14.show();
            this.h15.show();
            this.scheduleD.hide();
        })
    }
    
}