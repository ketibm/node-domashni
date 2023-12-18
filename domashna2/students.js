// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
// 4. Градови подредени по групна висина на просек.
// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.
const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Bitola" },
  { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
  { ime: "Vancho", prosek: 10, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];
function taskOne(studenti) {
  return studenti
    .filter(
      (stud) =>
        stud.ime.endsWith("a") && stud.grad === "Skopje" && stud.prosek >= 7
    )
    .sort((a, b) => a.ime.localeCompare(b.ime));
}
console.log(taskOne(studenti));

// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.

function taskTwo(studenti) {
  return studenti
    .filter((stud) => stud.prosek > 9 && stud.grad !== "Skopje")
    .sort((a, b) => b.prosek - a.prosek);
}
console.log(taskTwo(studenti));

// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.

function taskThree(studenti) {
  return studenti
    .filter((stud) => stud.ime.length === 5)
    .sort((a, b) => a.prosek - b.prosek)
    .slice(0, 3);
}
console.log(taskThree(studenti));

// 4. Градови подредени по групна висина на просек.

function taskFour(studenti) {
  const gradBt = studenti.filter((stud) => stud.grad === "Bitola");
  const prosekBt =
    gradBt.reduce((sum, grad) => sum + grad.prosek, 0) / gradBt.length;
  const gradSk = studenti.filter((stud) => stud.grad === "Skopje");
  const prosekSk =
    gradSk.reduce((sum, grad) => sum + grad.prosek, 0) / gradSk.length;
  const gradKu = studenti.filter((stud) => stud.grad === "Kumanovo");
  const prosekKu =
    gradKu.reduce((sum, grad) => sum + grad.prosek, 0) / gradKu.length;
  const gradSr = studenti.filter((stud) => stud.grad === "Strumica");
  const prosekSr =
    gradSr.reduce((sum, grad) => sum + grad.prosek, 0) / gradSr.length;
  const gradTe = studenti.filter((stud) => stud.grad === "Tetovo");
  const prosekTe =
    gradTe.reduce((sum, grad) => sum + grad.prosek, 0) / gradTe.length;
  const gradOh = studenti.filter((stud) => stud.grad === "Ohrid");
  const prosekOh =
    gradOh.reduce((sum, grad) => sum + grad.prosek, 0) / gradOh.length;
  const gradovi = [
    { Bitola: prosekBt },
    { Skopje: prosekSk },
    { Kumanovo: prosekKu },
    { Strumica: prosekSr },
    { Tetovo: prosekTe },
    { Ohrid: prosekOh },
  ];
  const prosekGrad = gradovi.sort(
    (a, b) => Object.values(a)[0] - Object.values(b)[0]
  );
  return prosekGrad;
}

console.log(taskFour(studenti));

// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.
function taskFive(studenti) {
  const studentiA = studenti.filter((stud) => stud.ime.endsWith("a"));
  const prosekA =
    studentiA.reduce((sum, stud) => sum + stud.prosek, 0) / studentiA.length;
  const studentiB = studenti.filter((stud) => !stud.ime.endsWith("a"));
  const prosekB =
    studentiB.reduce((sum, stud) => sum + stud.prosek, 0) / studentiB.length;
  return { prosekA, prosekB };
}
console.log(taskFive(studenti));
module.exports = { taskOne, taskTwo, taskThree, taskFour, taskFive };
