{
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon) {
        if (pokemon.activeMoveActions <= 1) return this.chainModify(1.2);
    },
    onModifySpe(spe, pokemon) {
        if (pokemon.activeMoveActions <= 1) return this.chainModify(1.2);
    }
}