// OS - operating system - מערכת הפעלה

// The os module provides operating system-related utility methods and properties.

// We must import that module: 
const os = require('os');

console.log(os.platform()); // win32 - windows - type of OS (can return also - linux). 

// Returns an array of objects containing information about each logical CPU core.
console.log(os.cpus());



/*
[
  {
    model: 'Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz',
    speed: 1992,
    times: {
      user: 3470390,
      nice: 0,
      sys: 2244203,
      idle: 60689656,
      irq: 679718
    }
  },
  {
    model: 'Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz',
    speed: 1992,
    times: {
      user: 2687781,
      nice: 0,
      sys: 1101671,
      idle: 62614484,
      irq: 31640
    }
  },
  {
    model: 'Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz',
    speed: 1992,
    times: {
      user: 11854765,
      nice: 0,
      sys: 1850312,
      idle: 52698859,
      irq: 31843
    }
  },
  {
    model: 'Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz',
    speed: 1992,
    times: { user: 2160234, nice: 0, sys: 997031, idle: 63246640, irq: 16687 }
  },
  {
    model: 'Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz',
    speed: 1992,
    times: {
      user: 4725562,
      nice: 0,
      sys: 1617265,
      idle: 60061078,
      irq: 34062
    }
  },
  {
    model: 'Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz',
    speed: 1992,
    times: {
      user: 2471078,
      nice: 0,
      sys: 1153468,
      idle: 62779359,
      irq: 19468
    }
  },
  {
    model: 'Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz',
    speed: 1992,
    times: {
      user: 4340703,
      nice: 0,
      sys: 1319984,
      idle: 60743218,
      irq: 26109
    }
  },
  {
    model: 'Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz',
    speed: 1992,
    times: { user: 2369781, nice: 0, sys: 920296, idle: 63113843, irq: 10687 }
  }
]
*/

// Class task: run the command os.cpus() and get:
// 1. all the cpus
// 2. only the models
// 3. only the users + id
// 4. only the speed

// [{},{},{}]
for (const cpu of os.cpus()) {
    console.log(cpu.model)
}

for (const cpu of os.cpus()) {
    console.log(`user: ${cpu.times.user}`)
}

for (const cpu of os.cpus()) {
    console.log(`speed: ${cpu.speed}`)
}

// using forEach:
os.cpus().forEach(cpu => console.log(cpu.model));

// total memory & free memory
console.log(os.totalmem()); // 8458481664 bytes
console.log(os.freemem());  // 2541248512 bytes

// we can use the 2 functions above to calculate the space we use:
console.log(os.totalmem() - os.freemem()); // 5891235840 bytes

// Returns an object containing network interfaces that have been assigned a network address.
console.log(os.networkInterfaces());





