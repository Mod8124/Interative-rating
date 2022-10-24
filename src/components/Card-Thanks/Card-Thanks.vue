<template>
  
  <article class="bg-gradient-to-t from-softDarkBlue to-darkBlue rounded-[20px] w-11/12 max-w-md p-[30px]">

    <div class="pt-5 text-center pb-5">
        <img class=" m-auto" src="../../assets/images/illustration-thank-you.svg" alt="ilustration thank you">
    </div>
    <h3 class="w-[65%] text-center m-auto text-Orange rounded-[40px] pt-1 pb-1 bg-darkBlue text-[18px] font-bold">You selected {{keyIndex}} out of 5</h3>
    <h2 class="pt-10 text-[24px] pb-5 text-white font-bold text-center"> Thank you!</h2>
    <Paragraph class="text-center" :para="text.para.second"/>
    
  </article>

</template>

<script>
import Text from '../../helpers/text';
import Paragraph from '../Paragraph/Paragraph.vue';

export default {
    components:{
        Paragraph
    },
    props:{
        keyIndex:Number
    },
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