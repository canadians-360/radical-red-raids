({
  name: "Sonic Slash",
  accuracy: 100,
  basePower: 60,
  category: "Physical",
  type: "Flying",
  pp: 15,
  priority: 0,
  flags: { contact: 1, protect: 1, mirror: 1, slicing: 1 },
  basePowerCallback(pokemon, target, move) {
    let speed = pokemon.getStat('spe', false, true);
    let power = 60 + Math.floor(speed / 50) * 10; 
    if (power > 140) power = 140;
    return power;
  },
  secondary: null,
  target: "normal",
  contestType: "Beautiful"
})