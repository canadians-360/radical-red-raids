{
  onResidualOrder: 26,
  onResidualSubOrder: 1,
  onResidual(pokemon) {
    this.heal(pokemon.maxhp / 16);
  }
}