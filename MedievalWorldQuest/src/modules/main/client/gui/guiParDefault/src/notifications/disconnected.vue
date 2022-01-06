<template>
    <rpg-dialog message="Oups, vous avez été déconnecté. Veuillez patienter !" position="middle" :autoClose="true" />
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