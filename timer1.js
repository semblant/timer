const alarms = process.argv.slice(2); // get alarms arguments


for (let alarm of alarms) { // loop through arguments
  alarm = Number(alarm); // turn into numbers
  if (alarm > 0 && typeof alarm === 'number') { // check if alarm is non-negative and not a string
    setTimeout(()=> {
      process.stdout.write(`${alarm} seconds: .\n`); // print '.' when alarm goes off
    }, alarm * 1000); // timeout is set for each alarm argument
  }
}
