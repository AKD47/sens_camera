<template id="modal">
    <transition name="modal-fade">
        <div class="modal-backdrop" role="dialog">
            <div class="modal modal--left" ref="modal">
                <button type="button" class="modal__close" @click="closeModal" aria-label="Close modal"></button>

                <section class="modal__wrapper">
                    <div class="modal__item">
                        <span class="modal__icon">
                            <img src="../assets/images/union-icon.svg" alt="icon">
                        </span>
                        <p class="modal__descr">Работает по Wi-Fi или кабелю</p>
                    </div>
                    <div class="modal__item">
                        <span class="modal__icon">
                            <img src="../assets/images/union2-icon.svg" alt="icon">
                        </span>
                        <p class="modal__descr">Разрешение 1280х960 (HD)</p>
                    </div>
                    <div class="modal__item">
                        <span class="modal__icon">
                             <img src="../assets/images/union3-icon.svg" alt="icon">
                        </span>
                        <p class="modal__descr">Ночная съемка</p>
                    </div>
                    <div class="modal__item">
                        <span class="modal__icon">
                            <img src="../assets/images/union4-icon.svg" alt="icon">
                        </span>
                        <p class="modal__descr">Запись звука и видео</p>
                    </div>
                    <div class="modal__item">
                        <span class="modal__icon">
                            <img src="../assets/images/union5-icon.svg" alt="icon">
                        </span>
                        <p class="modal__descr">Угол обзора 100°</p>
                    </div>
                    <div class="modal__item">
                        <span class="modal__icon"></span>
                        <p class="modal__descr">Длина кабеля 1.5 метра</p>
                    </div>
                </section>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "app-modal-left",
        methods: {
            closeModal(event) {
                this.$emit('close');
            },
        },
    }
</script>

<style scoped>

</style>