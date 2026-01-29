{
  onStart(pokemon) {
    pokemon.abilityState.choiceLock = "";
  },
  onBeforeMove(pokemon, target, move) {
    if (move.id === 'struggle') return;
    if (pokemon.abilityState.choiceLock && pokemon.abilityState.choiceLock !== move.id) {
      this.addMove('move', pokemon, move.name);
      this.attrLastMove('[still]');
      this.debug("Disabled by Sage Power");
      this.add('-fail', pokemon);
      return false;
    }
  },
  onModifyMove(move, pokemon) {
    if (pokemon.abilityState.choiceLock || move.id === 'struggle') return;
    pokemon.abilityState.choiceLock = move.id;
  },
  onModifySpAPriority: 1,
  onModifySpA(spa, pokemon) {
    return this.chainModify(1.5);
  },
  onDisableMove(pokemon) {
    if (!pokemon.abilityState.choiceLock) return;
    for (const moveSlot of pokemon.moveSlots) {
      if (moveSlot.id !== pokemon.abilityState.choiceLock) {
        pokemon.disableMove(moveSlot.id, false, "Sage Power");
      }
    }
  },
  onEnd(pokemon) {
    pokemon.abilityState.choiceLock = "";
  }
}