const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
];

//extraer nombre con foreach
console.log("Nombres de los explorers")
explorers.forEach((explorer) => console.log(explorer.name))

//mostrar el stack de cada explorer
console.log("\nStack de los explorers")
explorers.forEach((explorer) =>
  console.log(`Nuestro ${explorer.name} maneja el stack ${explorer.stack}`))

//creacion de lista de stack con map
console.log("\nLista de stacks")
const stackList= explorers.map((explorer) => explorer.stack)
console.log(stackList)

console.log("\nViajeros con js en su stack")
const explorersJS = explorers.filter((explorer) => // esta es una función
  explorer.stack.includes('js') // indicación para solo filtrar elementos que incluyan "js"
)
console.log(explorersJS)

console.log("\nViajeros que vienen de la CDMX")
const explorersCDMX=explorers.find((explorer)=> explorer.city ==='CDMX')
console.log(explorersCDMX)

console.log("\nSuma de todos los exercises_completed")
const suma_exercise= explorers.reduce((n,m) => n + m.exercises_completed,0)
console.log(suma_exercise)

console.log("\nBandera true en exercisesFinished en frontend")
const bandera=explorers.some((b) => b.missions.frontend.exercisesFinished === true)
console.log("\nLa existencia de la bandera es: " + bandera)

console.log("\nBandera true en isFinished del onboarding")
const banderaOnboarding= explorers.every((explorer) => explorer.missions.onboarding.isFinished === true)
console.log("\nLa existencia de la bandera del onboarding es: " + banderaOnboarding)
