
    
    class Ninja {

        constructor(name, health = 100, speed = 3, strength = 3)  {
        this.name = name;
        this.health = health;
        var speed = speed;
        var strength = strength;

        this.getspeed  = () => { return speed;}
        this.getstrength  = () => { return strength;}


        }

        sayName() {
            console.log('My name is ' + this.name);
        }


        showStats() {
            console.log('Name : ' + this.name  );
            console.log('Health : ' + this.health );
            console.log('Speed : ' + this.getspeed() );
            console.log('Stregth : ' + this.getstrength());
        }   

        drinkSake() {
            this.health = this.health + 10;
            console.log('Health is ' + this.health);
        
        }

    }
    n1 = new Ninja('Yadula', 20, 20, 20);

    n1.sayName();
    n1.showStats();

    n1.drinkSake();
