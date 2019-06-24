<template lang="html">
    <div class="rew">
        <h3 class="section-title">Отзывы</h3>
        <div id="rew-slider"  class="rew__slider">
            <div v-for="slide in slides" v-bind:class="['rew__item', (slide.isActive) ? 'rew__item--active': '']">
                <div class="rew__avatar">
                    <img src="../assets/images/ic-avatar.png" alt="ava">
                </div>
                <div class="rew__about">
                    <h3>{{slide.title}}</h3>
                    <p>{{slide.text}}</p>
                </div>
            </div>
            <button id="rew-trigger" @click="nextSlide" class="rew__trigger"></button>
        </div>
    </div>
</template>

<script lang="js">

    export default {
        name: "app-rew-slider",
        data() {
            return {
                slides: [
                    {
                        title: 'Алексей Гоно',
                        text: 'Отличное и удобное приложение. Классные возможности, отзывчивая поддержка.',
                        isActive: true
                    },
                    {
                        title: 'Гоно Алексей',
                        text: 'Отличное и удобное приложение. Классные возможности, отзывчивая поддержка.',
                        isActive: false
                    },
                    {
                        title: 'Иван Юрьев',
                        text: 'Отличное и удобное приложение. Классные возможности, отзывчивая поддержка.',
                        isActive: false
                    },
                    {
                        title: 'Алексей Васильев',
                        text: 'Отличное и удобное приложение. Классные возможности, отзывчивая поддержка.',
                        isActive: false
                    }
                ]
            }

        },
        methods: {
            nextSlide: function () {
                for (let i = 0; i < this.slides.length; i++) {
                    if (this.slides[i].isActive) {
                        if (i === this.slides.length - 1) {
                            this.slides[i].isActive = false;
                            this.slides[0].isActive = true;
                            break;
                        } else {
                            this.slides[i].isActive = false;
                            this.slides[i + 1].isActive = true;
                            break;
                        }
                    }
                }
            }
        }
    }

</script>

<style scoped>
</style>