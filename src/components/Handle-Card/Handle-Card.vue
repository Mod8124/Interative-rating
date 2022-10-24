<template>
  <section v-if="active" class="self-end">
    <Card  @handleActive="handleActive" :keyIndex="keyIndex" @handleKeyIndex="handleKeyIndex"/>
  </section>

 <section v-else class="self-end">
  <CardThanks :keyIndex="keyIndex"></CardThanks>
 </section>

  <section>
    
  </section>
</template>

<script>
import { ref } from 'vue';
import CardThanks from '../Card-Thanks/Card-Thanks.vue';
import Card from '../Card/Card.vue';

export default {
    components:{
        CardThanks,
        Card
    },
    setup() {
       const active = ref(true);
       const keyIndex = ref('');

        const handleKeyIndex = index => {
            keyIndex.value = index;
        }

        const handleActive = () => {
            if (keyIndex.value !== '') active.value = false
        };

        return {
            active,
            keyIndex,
            handleActive,
            handleKeyIndex
        }
    }
}
</script>

<style>

</style>