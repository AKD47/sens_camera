<template>
    <div class="wrapper">
        <div class="container">
            <div class="banner">
                <div class="banner__title">
                    <span class="banner__icon"></span>
                    <h1 class="banner__descr">Датчик <br> спокойствия</h1>
                </div>
                <div class="banner__subtitle">
                    <p>Комплекс из камеры и мобильного приложения,
                        который помогает в любой момент убедиться, что с
                        близкими и домом всё в порядке.</p>
                </div>
            </div>
            <div class="type">
                <a @click="showLeftModal" class="type__item">
                    <div class="type__wrapper">
                        <span class="type__photo">
                            <img src="../assets/images/camera.png" alt="Camera">
                        </span>
                    </div>
                    <span class="type__link">Подробнее</span>
                </a>
                <app-modal-left v-show="isLeftModalVisible" @close="closeLeftModal"></app-modal-left>
                <a @click="showRightModal" class="type__item">
                    <div class="type__wrapper">
                        <span class="type__photo">
                            <img src="../assets/images/camera.png" alt="Camera">
                        </span>
                    </div>
                    <span class="type__link">Подробнее</span>
                </a>
                <app-modal-right v-show="isRightModalVisible" @close="closeRightModal"></app-modal-right>
            </div>
            <div class="buy">
                <h3 class="section-title">Приобрести</h3>
                <div class="buy__box">
                    <div class="buy__item">
                        <span class="buy__icon buy__icon--first"></span>
                        <h3 class="buy__descr">Покупка</h3>
                    </div>
                    <div class="buy__item">
                        <span class="buy__icon buy__icon--second"></span>
                        <h3 class="buy__descr">Рассрочка</h3>
                    </div>
                    <div class="buy__item">
                        <span class="buy__icon buy__icon--third"></span>
                        <h3 class="buy__descr"><span>Пакет</span> <br> “Все под контролем”</h3>
                    </div>
                    <div class="buy__item">
                        <span class="buy__icon buy__icon--fourth"></span>
                        <h3 class="buy__descr"><span>Пакет</span> <br> “Тысяча пятьсот”</h3>
                    </div>
                </div>
            </div>
            <div class="order">
                <form action="" id="order-form" @submit.prevent="addPhone" autocomplete="off" class="order__form">
                    <h3 class="order__title">Оставьте заявку, и мы позвоним вам <br> в ближайшее время</h3>
                    <masked-input id="phone" v-model="phone" value="" mask="\+\7 111 111 1111" placeholder="+7 ___ ___ ____" />
                    <button class="order__submit" type="submit">
                        <span class="order__submit--title">отправить заявку</span>
                        <span class="order__submit--icon"></span>
                    </button>
                </form>
            </div>
            <app-rew-slider></app-rew-slider>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import MaskedInput from 'vue-masked-input';
    import AppModalLeft from '@/components/AppModalLeft';
    import AppModalRight from '@/components/AppModalRight';
    import AppRewSlider from '@/components/AppRewSlider';
    export default {
        data() {
            return {
                value: '',
                isLeftModalVisible: false,
                isRightModalVisible: false
            }
        },
        name: 'home',
        components: {
            MaskedInput,
            AppModalLeft,
            AppModalRight,
            AppRewSlider
        },
        methods: {
            showLeftModal() {
                this.isLeftModalVisible = true;
            },
            closeLeftModal() {
                this.isLeftModalVisible = false;
            },
            showRightModal() {
                this.isRightModalVisible = true;
            },
            closeRightModal() {
                this.isRightModalVisible = false;
            },
            addPhone () {
                let phone = document.getElementById('phone');
                console.log(phone.value);
            }
        }
    }
</script>