const studyMinutes: number[] = [30, 45, 60];
let totalMinutes = 0;
let longestSession = 0;

for (const minutes of studyMinutes) {
  totalMinutes = totalMinutes + minutes;

  if (minutes > longestSession) {
    longestSession = minutes;
  }
}

console.log(`Sessions: ${studyMinutes.length}`);
console.log(`Total minutes: ${totalMinutes}`);
console.log(`Longest session: ${longestSession}`);
