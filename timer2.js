/*
The user can press b and it should beep right away
The user can input any number from 1 to 9 and it should
immediately output "setting timer for x seconds...", and
beep after that number of seconds has passed
The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
*/



//pseudocode
// need user input: prcoess.stdin.on()
// need callback to apply the user input to
//  if 'b': beep immediately
//  if '1' to '9', set timer
//  if 'ctrl + c', console.log(Thanks for using me, ciao!'); process.exit()

process.stdin.setRawMode(true); // will apply callback immediately to user input
process.stdin.setEncoding('utf8'); // can use utf characters as conditions (pressing b, 1-9 and ctrl+c)


process.stdin.on('data', key => {
  if (key === 'b') { // if 'b' beep or write '.' right away
    process.stdout.write('.\n');
  } else if (key >= '1' && key <= '9') { // if numbers 1 - 9 set timer
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write(`.\n`);
    }, key * 1000);
  } else if (key === '\u0003') { // if ctrl + C, log message and exit
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});
