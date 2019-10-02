var vm = new Vue({
	el: '#app',
	data: {
        rollsLog:[],
        "dices":
        [
            //{название дайса, кол-во роллов, модификатор, результат бросков, макс результат}
            {name:'d4', numOfRolls:1,rollMod:0,rollRes:[null], roll:4},
            {name:'d6', numOfRolls:1,rollMod:0,rollRes:[null], roll:6},
            {name:'d8', numOfRolls:1,rollMod:0,rollRes:[null], roll:8},
            {name:'d10', numOfRolls:1,rollMod:0,rollRes:[null], roll:10},
            {name:'d12', numOfRolls:1,rollMod:0,rollRes:[null], roll:12},
            {name:'d20', numOfRolls:1,rollMod:0,rollRes:[null], roll:20},
            {name:'d100', numOfRolls:1,rollMod:0,rollRes:[null], roll:100},
            {name:'dX', numOfRolls:1,rollMod:0,rollRes:[null], roll:null},
        ]
	},
	mounted: function(){
		console.log('after mount counter is '+ this.counter);
	},
	methods: {
        //бросок дайса
		roll: function(dice){ 
            dice.rollRes = []
            var res = 0
            for(var i=0;i<dice.numOfRolls;i++){
                res = this.randomNum(dice.roll,dice.rollMod)
                dice.rollRes.push(res)
               
            }
            this.rollsLog.unshift('\n\nRoll('+dice.numOfRolls+dice.name+')+'+dice.rollMod+'\nRes: '+dice.rollRes + '\nTotal: '+ this.rollSumm(dice.rollRes))
        },
        //возврат случайного числа
        randomNum: function(max,mod){
            return Math.floor(Math.random() * Math.floor(max)) + 1 + parseInt(mod,10)
            //+1 потому что Math.random() возвращает числа в диапазоне [0,max)
        },
        rollSumm:function(a){
            var sum = 0
            for(var i = 0; i < a.length; i++) {sum += a[i]}
            return sum
        },
        clearLog: function(){
            this.rollsLog = ''
        }
	}
})

