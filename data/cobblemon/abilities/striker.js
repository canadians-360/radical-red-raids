{
  onBasePowerPriority: 23,
  onBasePower(basePower, attacker, defender, move) {
    const kickMoves = [
      'axekick', 'blazekick', 'doublekick', 'highjumpkick', 'jumpkick', 
      'lowkick', 'megakick', 'rollingkick', 'triplekick', 'tripleaxel', 'triplearrows',
      'tropkick', 'thunderouskick', 'lowsweep', 'stomp', 'pyroball', 'highhorsepower'
    ];
    
    if (kickMoves.includes(move.id)) {
      return this.chainModify([4915, 4096]);
    }
  }
}