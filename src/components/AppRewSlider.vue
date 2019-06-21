<template lang="html">
    <div class="rew">
        <h3 class="section-title">Отзывы</h3>
       <div class="rew__slider">
           <div class="rew__item rew__item--active" data-index="0">
               <div class="rew__avatar">
                   <img src="../assets/images/ic-avatar.png" alt="ava">
               </div>
               <div class="rew__about">
                   <h3>Алексей Гоно</h3>
                   <p>Отличное и удобное приложение. <br> Классные возможности, отзывчивая поддержка.</p>
               </div>
           </div>
           <div class="rew__item" data-index="2">
               <div class="rew__avatar">
                   <img src="../assets/images/ic-avatar.png" alt="ava">
               </div>
               <div class="rew__about">
                   <h3>Алексей Гоно</h3>
                   <p>Отличное и удобное приложение. <br> Классные возможности, отзывчивая поддержка.</p>
               </div>
           </div>
           <button class="rew__trigger"></button>
       </div>
    </div>
</template>

<script>
    export default {
        name: "app-rew-slider"
    }
</script>

<style scoped>
</style>