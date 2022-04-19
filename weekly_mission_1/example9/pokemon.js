export default class MyPokemon {
  constructor(name){
    // Al crear este objeto se guardarán estos valores
    this.name = name
  }

  sayHello() {
    console.log(`Mi pokemon ${this.name} te saluda!!!`);
  }

}
