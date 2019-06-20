<template id="modal">
    <transition name="modal-fade">
        <div class="modal-backdrop" role="dialog">
            <div class="modal modal--right" ref="modal">
                <button type="button" class="modal__close modal__close--right" @click="closeModal" aria-label="Close modal"></button>

                <section class="modal__wrapper">
                    <div class="modal__item">
                        <span class="modal__icon">
                            <img src="../assets/images/shoe-icon.svg" alt="icon">
                        </span>
                        <p class="modal__descr">Уведомление на телефон о движении</p>
                    </div>
                    <div class="modal__item">
                        <span class="modal__icon">
                            <img src="../assets/images/store-icon.svg" alt="icon">
                        </span>
                        <p class="modal__descr">Хранение данных на защищенных серверах</p>
                    </div>
                    <div class="modal__item">
                        <span class="modal__icon">
                             <img src="../assets/images/users-icon.svg" alt="icon">
                        </span>
                        <p class="modal__descr">Совместный доступ у членов семьи</p>
                    </div>
                    <div class="modal__item">
                        <span class="modal__icon">
                            <img src="../assets/images/app-icon.svg" alt="icon">
                        </span>
                        <p class="modal__descr">Скачивание/удаление архивных записей</p>
                    </div>
                    <div class="modal__item">
                        <span class="modal__icon">
                            <img src="../assets/images/mapmarker-icon.svg" alt="icon">
                        </span>
                        <p class="modal__descr">Доступ из любой точки мира</p>
                    </div>
                    <div class="modal__item">
                        <span class="modal__icon">
                             <img src="../assets/images/bell-icon.svg" alt="icon">
                        </span>
                        <p class="modal__descr">Уведомление о приходе «Домашних»</p>
                    </div>
                </section>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "app-modal-right",
        methods: {
            closeModal(event) {
                this.$emit('close');
            },
        },
    }
</script>

<style scoped>

</style>