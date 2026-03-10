const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] > 30) {
        console.log(studentReport[i]);
    }
    }
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] > 30) {
        console.log(studentReport[i]);
    }
    i++;
}
studentReport.forEach(function(score) {
    if (score > 30) {
        console.log(score);
    }
});
for (let index in studentReport) {
    if (studentReport[index] > 30) {
        console.log(studentReport[index]);
    }
}