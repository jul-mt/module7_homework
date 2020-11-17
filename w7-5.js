class ChelovekSosed {
  constructor(status, powerNeed) {
    this.power = powerNeed * (status == "on" ? 1 : 0);
  }
}


const puncher = new ChelovekSosed("off", 500);
const loudspeaker = new ChelovekSosed("on", 450);



puncher.noise = "very noisy";
puncher.says = function () {
  if (this.power === 0){
    console.log("...");
  } else {
    console.log("BRRR");
 }
}


loudspeaker.noise = "noisy";
loudspeaker.says = function () {
  if (this.power === 0){
    console.log("...");
  } else {
    console.log("La-la");
 }
}



console.log(puncher.power+loudspeaker.power);
//puncher.says();
//loudspeaker.says();
  