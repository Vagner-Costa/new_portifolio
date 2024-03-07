<template>
    <section class="w-full pt-5">
        <!-- Tag FOOTER abertura -->
        <div class="w-full flex flex-row">
            <p class="box_numero">73</p>
            <Footer class="mgm1" classe="cont_rodape" ident="rodape"></Footer>
        </div>

            <!-- Tag p abertura  -->
            <div class="w-full flex flex-row">
                <p class="box_numero">74</p>
                <P class="mgm2" classe="paragrafo" ident="tecs_utilizadas"></P>
            </div>

                <!-- Paragrafo -->
                <div class="w-full px-10 sm:px-40 md:px-60 lg:px-80 xl:px-[110px] 2xl:px-[120px]">
                    <p class="texto text-branco text-justify" translate="no">
                        Projeto todo desenvolvido utilizando vuejs, tailwind css e javascript.
                    </p>
                </div>

            <!-- Tag p fechamento -->
            <div class="w-full flex flex-row">
                <p class="box_numero">75</p>
                <Fechamento class="mgm2" titulo="p"></Fechamento>
            </div>

            <!-- Tag p abertura  -->
            <div class="w-full flex flex-row">
                <p class="box_numero">76</p>
                <P class="mgm2" classe="paragrafo" ident="txt_fim"></P>
            </div>

                <!-- Paragrafo -->
                <div class="w-full px-10 sm:px-40 md:px-60 lg:px-80 xl:px-[110px] 2xl:px-[120px]">
                    <p class="texto text-branco text-justify" translate="no">
                        ATENÇÃO! O conteúdo de programação descrito nessa
                        página não necessariamente corresponde ao código original 
                        do sistema. Código meramente ilustrativo.
                    </p>
                </div>

            <!-- Tag p fechamento -->
            <div class="w-full flex flex-row">
                <p class="box_numero">77</p>
                <Fechamento class="mgm2" titulo="p"></Fechamento>
            </div>

        <!-- Tag FOOTER fechamento -->
        <div class="w-full flex flex-row">
            <p class="box_numero">78</p>
            <Fechamento class="mgm1" titulo="footer"></Fechamento>
        </div>
    </section>
</template>

<script setup>
    import Footer from './tags/footer.vue'
    import Fechamento from './tags/fechamento.vue'
    import P from './tags/p.vue'
</script>

<style lang="scss" scoped>

</style>
