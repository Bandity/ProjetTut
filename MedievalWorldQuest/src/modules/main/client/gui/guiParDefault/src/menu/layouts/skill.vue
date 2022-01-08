<template>
   <div class="skill-menu">
        <rpg-window :fullWidth="true" height="80%" :arrow="arrow">
            <div class="row">
               <rpg-choice :choices="mapSkills" :column="1" @change="selected" @selected="choiceSkill" ref="choice" @canScroll="arrow = $event">
                   <template v-slot:default="{ choice }">
                       <p class="space-between skill" :class="{'not-consumable': !choice.consumable}">
                           <span>{{ choice.text }}</span> 
                           <span>{{ choice.nb }}</span> 
                        </p>
                   </template>
               </rpg-choice>
            </div>
        </rpg-window>
        <rpg-window :fullWidth="true" height="20%">
            <p>{{ description }}</p>
        </rpg-window>
   </div>
</template>

<script>
import Icon from '../../components/icon.vue'

export default {
    inject: ['rpgCurrentPlayer', 'rpgKeypress', 'rpgSocket'],
    data() {
        return {
            description: '',
            skills: [],
            arrow: null
        }
    },
    computed: {
        mapSkills() {
            return this.skills.map(s => ({
                text: s.skill,
            }))
        }
    },
    mounted() {
        this.obsCurrentPlayer = this.rpgCurrentPlayer.subscribe(({ object }) => {
           this.skills = Object.values(object.skills)
           console.log(this.skills)
        })
        this.obsKeyPress = this.rpgKeypress.subscribe(({ control }) => {
            if (!control) return
            if (control.actionName == 'back') {
                this.$emit('changeLayout', 'MainLayout')
            }
        })
        this.selected(0)
    },
    unmounted() {
        this.obsKeyPress.unsubscribe()
        this.obsCurrentPlayer.unsubscribe()
    },
    methods: {
        selected(index) {
            if (!this.skills[index]) return
            this.description = this.skills[index].skill.description
        },
        choiceSkill(index) {
            if (!this.skills[index]) return
            const { id, consumable } = this.skills[index].skill
            if (!consumable) return
            this.$rpgSocket.emit('gui.interaction', {
                guiId: 'rpg-main-menu',
                name: 'useSkill',
                data: id
            })
        }
    },
    components: {
        Icon
    }
}
</script>

<style scoped>
.row {
   height: 100%;
}

.skill-menu {
    height: 100%;
}

.not-consumable {
    opacity: 0.5;
}

.skill {
    margin: 0;
    position: relative;
    padding: 10px;
}

.space-between {
    justify-content: space-between;
    display: flex;
}
</style>