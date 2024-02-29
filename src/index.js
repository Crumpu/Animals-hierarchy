class Animals {
  static maxAge =
    'The longest-lived known animal is the mollusk Arctica islandica, known as the Icelandic cyprine or ocean quahog. Some individuals of this species have lived for over 500 years.';
  static maxWeight =
    'The heaviest animal on Earth is the blue whale (Balaenoptera musculus). An adult blue whale typically weighs around 200 tons, but can reach weights of over 200 tons.';

  constructor(age, name, weight, limbAmount) {
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
  }
  move(meansOfTransportation) {
    return `${this.constructor.name} ${meansOfTransportation}`;
  }

  say(asItSays) {
    return `${this.constructor.name} say ${asItSays}`;
  }

  eat(whatEats) {
    return `${this.constructor.name} eats ${whatEats}`;
  }
}

console.log(Animals.maxAge);
console.log(Animals.maxWeight);

// -----------------------------------------------------------------------------

// -----------------------FISH--------------------------------------------------

// -----------------------------------------------------------------------------
class Fish extends Animals {
  static maxAge = 'Oldest fish: grouper, 112 years';
  static maxWeight = 'Atlantic halibut, 900+ kg';
  static isFish(obj) {
    return obj instanceof this;
  }
  constructor(age, name, weight, limbAmount, roleInFilms) {
    super(age, name, weight, limbAmount);
    this.roleInFilms = roleInFilms;
  }
  move() {
    return `${this.constructor.name} is swims`;
  }
  say() {
    return `${this.constructor.name} - as silent as a clam`;
  }

  eat() {
    return `${this.name} eats seaweed`;
  }
  filmography() {
    return `${this.name} appeared in the movie/animation "${this.roleInFilms}"`;
  }
}

console.log(Fish.maxAge);
console.log(Fish.maxWeight);

let nemo = new Fish(1, 'Nemo', 2, 1.5, 'Finding Nemo'); // полтора плавника это не ошибка, у Немо, один плавник был плохо развит :)
console.log(nemo);
console.log(Fish.isFish(nemo));
console.log(nemo.move());
console.log(nemo.say());
console.log(nemo.eat());
console.log(nemo.filmography());

let doris = new Fish(3, 'Doris', 3, 2);
console.log(doris);
console.log(Fish.isFish(doris));
console.log(doris.move());
console.log(doris.say());
console.log(doris.eat());
console.log(doris.filmography());

// -----------------------------------------------------------------------------

// -----------------------BIRD--------------------------------------------------

// -----------------------------------------------------------------------------

class Birds extends Animals {
  static maxAge = 'Wisdom, albatross, 70 years.';
  static maxWeight = 'Argentavis: largest, weighed about 70-72 kg';
  static isBird(obj) {
    return obj instanceof this;
  }
  constructor(age, name, weight, limbAmount, roleInFilms) {
    super(age, name, weight, limbAmount);
    this.roleInFilms = roleInFilms;
  }
  move() {
    return `${this.constructor.name} is flies`;
  }
  say() {
    return `${this.constructor.name} - can speak like a human`;
  }

  eat() {
    return `${this.name} eats grain`;
  }
  filmography() {
    return `${this.name} appeared in the movie/animation "${this.roleInFilms}"`;
  }
}

console.log(Birds.maxAge);
console.log(Birds.maxWeight);

let yago = new Birds(8, 'Yago', 4, 4, 'The Adventures of Aladdin');

console.log(yago);
console.log(Birds.isBird(yago));
console.log(yago.move());
console.log(yago.say());
console.log(yago.eat());
console.log(yago.filmography());

let zazu = new Birds(10, 'Zazu', 8, 4, 'The Lion King');

console.log(zazu);
console.log(Birds.isBird(zazu));
console.log(zazu.move());
console.log(zazu.say());
console.log(zazu.eat());
console.log(zazu.filmography());
// -----------------------------------------------------------------------------

// -----------------------MAMMALS-----------------------------------------------

// -----------------------------------------------------------------------------

class Mammals extends Animals {}

class Predators extends Mammals {}

class Whales extends Mammals {}

class Primates extends Mammals {}

// ----------------------DOG----------------------------------------------------

class Dog extends Predators {
  static maxAge = 'Oldest dog: Blue, 29 years';
  static maxWeight = 'Heaviest dog: English Mastiff, 140+ kg';
  static isDog(obj) {
    return obj instanceof this;
  }
  constructor(age, name, weight, limbAmount, ...roleInFilms) {
    super(age, name, weight, limbAmount);
    this.roleInFilms = roleInFilms;
  }
  move() {
    return `${this.constructor.name} is runs`;
  }
  say() {
    return `${this.constructor.name} -  says "woof-woof"`;
  }

  eat() {
    return `${this.name} eats what they give her :) `;
  }
  filmography() {
    return `${
      this.name
    } appeared in the movie/animation "${this.roleInFilms.join('", "')}"`;
  }
}

console.log(Dog.maxAge);
console.log(Dog.maxWeight);

let scoobyDoo = new Dog(5, 'Scooby-Doo', 25, 4, 'Scooby-Doo');

console.log(scoobyDoo);
console.log(Dog.isDog(scoobyDoo));
console.log(scoobyDoo.move());
console.log(scoobyDoo.say());
console.log(scoobyDoo.eat());
console.log(scoobyDoo.filmography());

let sharic = new Dog(
  15,
  'Sharic',
  18,
  4,
  'Heart of a Dog',
  'Three from Prostokvashino'
);
console.log(sharic);
console.log(Dog.isDog(sharic));
console.log(sharic.move());
console.log(sharic.say());
console.log(sharic.eat());
console.log(sharic.filmography());

// ---------------------------Dolphin----------------------------------------------

class Dolphin extends Whales {
  static maxAge = 'Oldest dolphin: Nellie, 61 years';
  static maxWeight = 'Heaviest dolphin: Delimitis, 10+ tons.';
  static isDolphin(obj) {
    return obj instanceof this;
  }
  constructor(age, name, weight, limbAmount, roleInFilms) {
    super(age, name, weight, limbAmount);
    this.roleInFilms = roleInFilms;
  }
  move() {
    return `${this.constructor.name} swim gracefully, using their flippers and flexible bodies for fast and smooth movements.`;
  }
  say() {
    return `Так сразу и не скажешь:) ${this.constructor.name} produce a wide range of sounds, including whistles, clicks, cries, squeaks, and trills. They use these sounds for communication, navigating their environment, finding food, and other purposes.`;
  }

  eat() {
    return `${this.constructor.name} feed on a variety of food, including fish, squid, shrimp, and other marine invertebrates.`;
  }
  filmography() {
    return `${this.name} appeared in the movie/animation "${this.roleInFilms}"`;
  }
}

console.log(Dolphin.maxAge);
console.log(Dolphin.maxWeight);

let zeus = new Dolphin(15, 'Zeus', 250, 3, 'Zeus and Roxanne');

console.log(zeus);
console.log(Dolphin.isDolphin(zeus));
console.log(zeus.move());
console.log(zeus.say());
console.log(zeus.eat());
console.log(zeus.filmography());

let willy = new Dolphin(17, 'Willy', 265, 3, 'Free Willy');

console.log(willy);
console.log(Dolphin.isDolphin(willy));
console.log(willy.move());
console.log(willy.say());
console.log(willy.eat());
console.log(willy.filmography());
// ---------------------------HUMAN-----------------------------------------------

class Human extends Primates {
  static maxAge =
    'The oldest person in the world was Jeanne Calment, who lived to be 122 years and 164 days old.';
  static maxWeight =
    'The heaviest man ever recorded was Jon Brower Minnoch from the USA, who weighed over 635 kg.';
  static isHuman(obj) {
    return obj instanceof this;
  }
  constructor(age, name, weight, limbAmount, ...roleInFilms) {
    super(age, name, weight, limbAmount);
    this.roleInFilms = roleInFilms;
    console.log(this.roleInFilms);
  }
  move() {
    return ` If ${this.constructor.name} sober, then walks, but if drunk, movement is restricted only by the laws of physics.`;
  }
  say() {
    return `${this.constructor.name} -  says too much`;
  }

  eat(food) {
    return `${this.name} eats ${food}`;
  }
  filmography() {
  return  this.roleInFilms.length > 1
      ? `${this.name} appeared in the movie/animation "${this.roleInFilms.join(
          '", "'
        )}"`
      : `${this.name} appeared in the movie/animation "${this.roleInFilms}"`;
  }
}

console.log(Human.maxAge);
console.log(Human.maxWeight);

let jackieChan = new Human(
  69,
  'Jackie Chan',
  65,
  4,
  'Thunderbolt',
  'Who Am I?'
);

console.log(jackieChan);
console.log(Human.isHuman(jackieChan));
console.log(jackieChan.move());
console.log(jackieChan.say());
console.log(jackieChan.eat('all'));
console.log(jackieChan.filmography());

let imogenPoots = new Human(
  34,
  'Imogen Poots',
  55,
  4,
  'Need for speed',
  'That Awkward Moment'
);

console.log(imogenPoots);
console.log(Human.isHuman(imogenPoots));
console.log(imogenPoots.move());
console.log(imogenPoots.say());
console.log(imogenPoots.eat('all'));
console.log(imogenPoots.filmography());