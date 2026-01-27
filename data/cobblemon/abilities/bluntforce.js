{
  onModifyMove(move, pokemon) {
    if (move.flags['contact']) {
      move.hasSheerForce = true;
      
      if (move.secondaries) {
        delete move.secondaries;
      }
      if (move.self && move.self.chance) {
        delete move.self;
      }
    }
  },
  onBasePowerPriority: 21,
  onBasePower(basePower, pokemon, target, move) {
    if (move.hasSheerForce) {
      return this.chainModify([5325, 4096]);
    }
  }
}