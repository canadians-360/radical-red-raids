{
  onModifyMove(move) {
    const boneMoves = ['boneclub', 'bonemerang', 'bonerush', 'shadowbone'];
    if (boneMoves.includes(move.id)) {
      move.ignoreImmunity = true;
    }
  },
  onModifyDamage(damage, source, target, move) {
    const boneMoves = ['boneclub', 'bonemerang', 'bonerush', 'shadowbone'];
    if (boneMoves.includes(move.id) && target.getMoveHitData(move).typeMod < 0) {
      this.debug('Bone Zone boost');
			return this.chainModify(2);
    }
  }
}