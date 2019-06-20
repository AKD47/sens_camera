<template id="modal">
    <transition name="modal-fade">
        <div class="modal-backdrop" role="dialog">
            <div class="modal" ref="modal">
                <header class="modal-header">
                    <slot name="header">
                        <h2>
                            This is the default tile!
                        </h2>

                        <button type="button" class="btn-close btn-right" @click="close" aria-label="Close modal">
                            x
                        </button>
                    </slot>
                </header>

                <section class="modal-body">
                    <slot name="body">
                        I'm the default body!
                    </slot>
                </section>

                <footer class="modal-footer">
                    <slot name="footer">
                        <button type="button" class="btn btn-green" @click="close" aria-label="Close modal">
                            Close me!
                        </button>
                    </slot>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "app-modal-left",
        methods: {
            close(event) {
                this.$emit('close');
            },
        },
    }
</script>

<style scoped>

</style>