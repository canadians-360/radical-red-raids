{
  onModifyPriority(priority, pokemon, target, move) {
    if (move?.type === 'Fire' && pokemon.hp === pokemon.maxhp) {
      return priority + 1;
    }
  }
}