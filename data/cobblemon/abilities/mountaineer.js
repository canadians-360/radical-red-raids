{
  onDamage(damage, target, source, effect) {
    if (effect && effect.id === 'stealthrock') {
      return false;
    }
  },
  onTryHit(target, source, move) {
    if (target !== source && move.type === 'Rock') {
      this.add('-immune', target, '[from] ability: Mountaineer');
      return null;
    }
  }
}