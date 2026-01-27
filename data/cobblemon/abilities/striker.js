{
  onBasePowerPriority: 23,
  onBasePower(basePower, attacker, defender, move) {
    const kickMoves = [
      'axekick', 'blazekick', 'doublekick', 'highjumpkick', 'jumpkick', 
      'lowkick', 'megakick', 'rollingkick', 'triplekick', 
      'tropkick', 'thunderouskick', 'lowsweep', 'stomp'
    ];
    
    if (kickMoves.includes(move.id)) {
      return this.chainModify([4915, 4096]);
    }
  }
}