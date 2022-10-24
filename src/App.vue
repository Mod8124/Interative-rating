<template>
 <main class=" h-screen bg-veryDarkBlue flex flex-wrap justify-center items-center">
  <HandleCard/>
  <Footer></Footer>
 </main>
</template>

<script>
import Footer from './components/Footer/Footer.vue';
import HandleCard from './components/Handle-Card/Handle-Card.vue';
export default {
    components:{
    Footer,
    HandleCard
}
}
</script>


