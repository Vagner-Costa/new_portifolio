<template>
    <section class="w-full pt-5">
        <!-- Tag Section abertura -->
        <div class="w-full flex flex-row">
            <p class="box_numero">9</p>
            <Section class="mgm1" classe="cont_sobreMim" ident="sobreMim"></Section>
        </div>

            <!-- Tag h3 subtitulo abertura -->
            <div class="w-full flex flex-row">
                <p class="box_numero">10</p>
                <H3 class="mgm2" classe="subtitulo" ident="txt_sobreMim"></H3>
            </div>

            <!-- Titulo SOBRE MIM -->
            <div class="w-full flex flex-row items-end my-10">
                <p class="box_numero">11</p>
                <div class="w-full flex flex-row justify-center items-end">
                    <h1 class="subtitulo leading-[40px]"> SOBRE MIM</h1>
                </div>
            </div>

            <!-- Tag h3 subtitulo fechamento -->
            <div class="w-full flex flex-row">
                <p class="box_numero">12</p>
                <Fechamento class="mgm2" titulo="h3"></Fechamento>
            </div>

            <!-- Tag article abertura  -->
            <div class="w-full flex flex-row">
                <p class="box_numero">13</p>
                <Article class="mgm2" classe="cont_img_txt" ident="img_txt"></Article>
            </div>

            <!-- Tag img foto perfil -->
            <div class="w-full flex flex-row">
                <p class="box_numero">14</p>
                <Image class="mgm3" classe="perfil" txt_alt="perfil" source="../assets/foto.jpg"></Image>
            </div>

            <!-- Container Foto perfil-->
            <div class="w-full flex flex-row items-end my-10">
                <p class="box_numero">15</p>
                <div class="w-full flex flex-row justify-center">
                    <figure class="w-[150px] h-[150px] border-[3px] border-branco flex 
                        justify-center items-center rounded-full my-10 overflow-hidden
                        md:w-[200px] md:h-[200px] "
                    >
                        <img src="../assets/perfil/foto_eu.jpeg" alt="foto">
                    </figure>
                </div>
            </div>

            <!-- Tag p primeiro parágrafo  -->
            <div class="w-full flex flex-row">
                <p class="box_numero">16</p>
                <P class="mgm3" classe="paragrafo" ident="txt_paragrafo1"></P>
            </div>
            
            <!-- Paragrafo 1 -->
            <div class="w-full px-10 sm:px-40 md:px-60 lg:px-80 xl:px-[110px] 2xl:px-[120px] my-10">
                <p class="texto text-branco text-justify indent-30">
                    Como desenvolvedor front end, estou sempre animado para criar 
                    interfaces incríveis e interativas para os usuários. Com habilidades 
                    em HTML, CSS, JavaScript, Vuejs, Nodejs, Mongodb, entre outras posso 
                    transformar designs em páginas da web responsivas e atraentes.
                </p>
            </div>

            <!-- Tag p fechamento primeiro paragrafo -->
            <div class="w-full flex flex-row">
                <p class="box_numero">17</p>
                <Fechamento class="mgm3" titulo="p"></Fechamento>
            </div>

            <!-- Tag p segundo parágrafo  -->
            <div class="w-full flex flex-row">
                <p class="box_numero">18</p>
                <P class="mgm3" classe="paragrafo" ident="txt_paragrafo2"></P>
            </div>

            <!-- Paragrafo 2 -->
            <div class="w-full px-10 sm:px-40 md:px-60 lg:px-80 xl:px-[110px] 2xl:px-[120px] my-10">
                <p class="texto text-branco text-justify  indent-30">
                    Além disso, estou sempre em busca de novas tecnologias e técnicas 
                    para melhorar a experiência do usuário e a eficiência do desenvolvimento. 
                    Priorizo sempre a acessibilidade e a usabilidade em minhas criações, 
                    garantindo que todos os usuários possam acessar e desfrutar do conteúdo 
                    da melhor maneira possível.
                </p>
            </div>

            <!-- Tag p fechamento segundo paragrafo -->
            <div class="w-full flex flex-row">
                <p class="box_numero">19</p>
                <Fechamento class="mgm3" titulo="p"></Fechamento>
            </div>

            <!-- Tag p terceiro parágrafo  -->
            <div class="w-full flex flex-row">
                <p class="box_numero">20</p>
                <P class="mgm3" classe="paragrafo" ident="txt_paragrafo3"></P>
            </div>

            <!-- Paragrafo 3 -->
            <div class="w-full px-10 sm:px-40 md:px-60 lg:px-80 xl:px-[110px] 2xl:px-[120px] my-10">
                <p class="texto text-branco text-justify  indent-30">
                    Se você precisar de ajuda para criar ou atualizar seu site, não 
                    hesite em entrar em contato comigo. Vamos trabalhar juntos para 
                    criar algo incrível e eficiente!
                </p>
            </div>

            <!-- Tag p fechamento terceiro paragrafo -->
            <div class="w-full flex flex-row">
                <p class="box_numero">21</p>
                <Fechamento class="mgm3" titulo="p"></Fechamento>
            </div>

            <!-- Tag p quarto parágrafo  -->
            <div class="w-full flex flex-row">
                <p class="box_numero">22</p>
                <P class="mgm3" classe="paragrafo" ident="txt_paragrafo4"></P>
            </div>

            <!-- Paragrafo 4 -->
            <div class="w-full px-10 sm:px-40 md:px-60 lg:px-80 xl:px-[110px] 2xl:px-[120px] my-10">
                <p class="texto text-branco text-justify  indent-30">
                    Atenciosamente, Vagner Costa.
                </p>
            </div>

            <!-- Tag p fechamento quarto paragrafo -->
            <div class="w-full flex flex-row">
                <p class="box_numero">23</p>
                <Fechamento class="mgm3" titulo="p"></Fechamento>
            </div>

            <!-- Tag article fechamento -->
            <div class="w-full flex flex-row">
                <p class="box_numero">24</p>
                <Fechamento class="mgm2" titulo="article"></Fechamento>
            </div>

        <!-- Tag section fechamento -->
        <div class="w-full flex flex-row">
            <p class="box_numero">25</p>
            <Fechamento class="mgm1" titulo="section"></Fechamento>
        </div>
    </section>
</template>

<script setup>
    import Section from './tags/section.vue'
    import Article from './tags/article.vue'
    import Fechamento from './tags/fechamento.vue'
    import H3 from './tags/h3.vue'
    import Image from './tags/img.vue'
    import P from './tags/p.vue'
</script>

<style scoped>

</style>