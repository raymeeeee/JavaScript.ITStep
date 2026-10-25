/* let obj = {
	score: 100,
	email: 'vasya_2015@gmail.com',
	increment: function() {
		console.log(++this.score)
	}
};
console.log(obj);
obj.firstName = 'Вася';
obj['lastname'] = 'Пупкин';
obj.increment();
obj.increment();
console.log(obj);

let obj1 = new Object({
	email: 'kolobkov@meta.ua'
});
console.log(obj1)
obj1.firstname = 'Дима';

obj1["lastname"] = 'Колобков';
console.log(obj1); */

/* let chair={ 
	Модель:  'Кресло Примтекс Плюс Ultra Chrome',
	 'Материал корпуса': ['Металл','Пластик'], 
	'Материал обивки': 'Ткань', 
	Цвет: 'Черный', 
	Тип: 'Кресло руководителя' 
	} 
	console.log(chair.Модель); // Кресло Примтекс Плюс Ultra Chrome console.log(chair["Материал обивки"]); // Ткань
	 for(let prop in chair){ 
		document.write(`<p><b>${prop}</b>: ${chair[prop]}</p>`); 
	} */

/* function Human (firstName, lastName) {
	return {
		firstName,
		lastName,
		showInfo: function(){
				document.write(`<p>Let me introduce you <strong>${firstName} ${lastName} </strong></p>`);
		}  
	}
}

const lola = Human('Lola', 'Medows');
console.log(lola);
lola.showInfo();
const michael = Human('Michael', 'Paper');
console.log(michael);
michael.showInfo(); */

function Student(firstName, lastName) {
	this.firstname = firstName;
	this.lastname = lastName;
}
/* Student.prototype.showInfo = function() {
		document.write(`<p>${this.firstname} ${this.lastname}</p>`)
}
Student.prototype.getName = function() {
		return this.firstname + ' ' + this.lastname
};
Student.prototype.setName = function(newName) {
		let parts = newName.split(' ');
		this.firstname = parts[0];
		this.lastname = parts[1];
}; */

/* Object.assign(Student.prototype, {
	showInfo() { 
		document.write(`<p>${this.firstname} ${this.lastname}</p>`); 
	},
	getName() { 
		return this.firstname + ' ' + this.lastname 
	},
	setName(newName) {
		let parts = newName.split(' ');
		this.firstname = parts[0];
		this.lastname = parts[1];
	}
});

let st1 = new Student('Игорь', 'Степанов');
console.log(st1);
console.log(st1.getName());
let st2 = new Student('Ирина', 'Кононова');
console.log(st2);
console.log(st2.getName());
st2.setName('Ирина Собинова');
console.log(st2.getName()); */


/* function TodoModel() {
	this.todos = Array.from(arguments);
}
TodoModel.prototype.showList = function() {
	document.write(`<ol><li>${this.todos.join('<li>')}</ol>`);
}
TodoModel.prototype.add = function() {
	this.todos.push(...arguments);
	this.showList();
}

TodoModel.prototype.remove = function(ind) {
	this.todos.splice(ind-1, 1);
	this.showList();
}


let schoolTasks = new TodoModel('выслушать 6 уроков', "пообедать", "сделать ДЗ", "успеть на пары в ШАГ", "сделать ДЗ в ШАГе");

console.log(schoolTasks.todos);

schoolTasks.showList()
schoolTasks.add('погулять', "повтыкать в телефон")
schoolTasks.remove(3); */


/* let monthes = new Map([
	["January", 'lightblue'],
	["Fabruary", 'blue'],
	["March", 'green'],
	["April", 'lightgreen'],
	["May", 'lime']
])

console.log(monthes.get('May'))
monthes.forEach((value, key ) => {
	document.write(`<div style="background-color: ${value}; padding: 10px; text-align: center">${key}</div>`); 
});

const numArray = [20, 12, -1, 19, 20, 5, 12,  5, -1, 19, 12];
let set = new Set(numArray );

console.log(set)
const uniqueNumArray = Array.from(set);
 console.log( uniqueNumArray ); */


class Human {
	#id
	constructor(firstname, lastname, birthday) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.birthday = birthday;
		this.#id = Math.floor(Math.random() * 10e6);
	}
	showInfo() {
		console.log(this.firstname + ' ' + this.lastname);
	}
	showAge() {
		const deltaTime = Date.now() - Date.parse(this.birthday);
		const age = Math.floor(deltaTime / (365 * 24 * 60 * 60 * 1000));
		console.log(this.firstname + ' ' + this.lastname + ' is ' + age + ' years old.');
	}
	get id() {
		return this.#id;
	}
	set id(value) {
		this.#id = value;
	}
	toString() {
		return this.firstname + ' ' + this.lastname + ' is a ' + this.constructor.name;
	}

}
const john = new Human('John', 'Smith', '09-17-2003');
john.showInfo();
john.showAge();
console.log(john)
console.log(john.firstname)
console.log(john.id)
john.id = 123;
console.log(john)


class Teacher extends Human {
	constructor(firstname, lastname, birthday, subjects = []) {
		super(firstname, lastname, birthday);
		this.subjects = subjects;
	}
	showSubjects() {
		console.log(this.firstname + ' ' + this.lastname + ' can teach you ' + this.subjects.join(', '));
	}
}
let kate = new Teacher('Kate', "Middlton", '03-23-2001', ['biology', 'geography'])
kate.showInfo();
kate.showAge();
kate.showSubjects();
console.log(kate)

class ITMentor extends Teacher {
	constructor(firstname, lastname, birthday, subjects = [], level) {
		super(firstname, lastname, birthday, subjects);
		this.level = level;
	}
	showLevel() {
		console.log(this.firstname + ' ' + this.lastname + ' has level ' + this.level);
	}
	showSubjects() {
		console.log('With ' + this.firstname + ' ' + this.lastname + ' you can get such IT skills: ' + this.subjects.join(', '));
		document.write('<p>With ' + this.firstname + ' ' + this.lastname + ' you can get such IT skills: </p><ol><li>' + this.subjects.join('<li>') + '</ol>');
	}

}

const andrew = new ITMentor("Andrew", "Phillipov", '07/22/1986', ['HTML', 'CSS', 'JavaScript', 'React', 'Angular'], 'Senior');
andrew.showInfo();
andrew.showAge();
andrew.showSubjects();
andrew.showLevel();
console.log(andrew)

document.write('Class Human: ' + john + '<br>');
document.write('Class Teacher: ' + kate + '<br>');
document.write('Class ITMentor: ' + andrew + '<br>');




	String.prototype.calcLetter = function(letter) {
		let count = 0;
		let index = this.indexOf(letter);
		while (index != -1) {
			count++;
			index = this.indexOf(letter, index + 1);
		}
		return count;
	}

let myStr = new String("When the going gets tough, the tough get going.");
console.log('g in "' + myStr + '" = ' + myStr.calcLetter('g'));
console.log('going in "' + myStr + '" = ' + myStr.calcLetter('going'));
console.log('"text" in "' + myStr + '" = ' + myStr.calcLetter('text'));



