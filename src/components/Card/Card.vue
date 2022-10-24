<template>
    <article class="bg-gradient-to-t from-softDarkBlue to-darkBlue rounded-[20px] w-11/12 max-w-md p-[30px]">

        <div class="rounded-[50%] bg-darkBlue max-w-[50px] h-[50px] flex items-center justify-center">
             <img src="../../assets/images/icon-star.svg" alt="icon-start">
        </div>
    
    <h1 class="pt-10 pb-5 text-white text-[32px]">{{text.title.main}}</h1>

    <Paragraph :para="text?.para.main"/>

    <article class="grid grid-cols-5 justify-between">
      <div v-for="index in 5" :key="index" :class="keyIndex === index ? 'cursor pointer p-2 rounded-[50%] border-none h-[50px] w-[50px] flex items-center justify-center bg-lightGrey  cursor-pointer text-darkBlue transition ease-in-out duration-1000 hover:bg-Orange hover:text-white':'cursor pointer p-2 rounded-[50%] border-none h-[50px] w-[50px] flex items-center justify-center bg-darkBlue cursor-pointer text-lightGrey transition ease-in-out duration-1000 hover:bg-Orange hover:text-white'" @click="$emit('handleKeyIndex', index)">{{index}}</div>
    </article>

    <div class="pt-5">
      <button class="w-full bg-Orange rounded-[20px] pt-3 pb-3 text-white border-none uppercase cursor-pointer transition ease-in-out duration-700 hover:bg-white hover:text-Orange" @click="$emit('handleActive')">Submit</button>
    </div>
    
    </article>

</template>

<script>
import Text from '../../helpers/text';
import Paragraph from '../Paragraph/Paragraph.vue';
export default {
    components:{
        Paragraph
    },
    props:[
        'keyIndex'
    ],
    setup() {
        const { text } = Text();

        return {
            text
        }
    }
}
</script>

<style>

</style>