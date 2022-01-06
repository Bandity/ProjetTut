<template>
    <rpg-dialog message="Oups, tu as été déconnecté. Veuillez vous attendre!" position="middle" :autoClose="true" />
</template>

<script>
export default {
    name: 'rpg-disconnect',
    inject: ['rpgStage'],
    mounted() {
        const blur = new PIXI.filters.BlurFilter()
        this.rpgStage.filters = [blur]
    },
    unmounted() {
        this.rpgStage.filters = []
    }
}
</script>