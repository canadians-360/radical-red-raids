{
  onModifyDamage(damage, source, target, move) {
    if (move && target.getMoveHitData(move).typeMod > 0) {
      return this.chainModify([4915, 4096]);
    }
  },
  onSourceModifyAccuracyPriority: 10,
  onSourceModifyAccuracy(accuracy, target, source, move) {
    if (move && typeof accuracy === 'number') {
      const typeMod = this.dex.getEffectiveness(move.type, target.getTypes());
      if (typeMod > 0) {
        return true;
      }
    }
  }
}