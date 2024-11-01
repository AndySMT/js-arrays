const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE
console.log(teachers);
// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(teachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter((name) => name.length >= 5);
console.log(longNames);

// 2.a
const name5 = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    name5.push(teachers[i]);
  }
}
console.log(name5);

// 3. Rimuovi 'Ed' dall'array teachers
const removeED = teachers.splice(5, 1);
console.log(teachers);
