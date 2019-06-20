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
                <form action="" id="order-form" class="order__form">
                    <p>Оставьте заявку, и мы позвоним вам в ближайшее время</p>
                    <input id="form-phone" type="text" value="" min-length="10" max-length="10">

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src


    export default {
        data() {
            return {

            }
        },
        name: 'home',
        components: {},
        methods: {
            addPhone () {
                let phone = document.getElementById('form-phone');

            }
        }
    }
</script>