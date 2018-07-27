<template>
    <div>
        <section class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                <h1 class="title">
                    {{title}}
                </h1>
                <nav>
                    <li><a @click="logout()">Sair</a></li>
                </nav>
                </div>
            </div>
        </section>
        <section class="conteudo">
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                    <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-primary">
                            <p class="title">Meus Orçamento:</p>
                            <p class="subtitle">confira seu orçamento</p>
                            <p>
                                Valor aplicado mês de Janeiro 2018: R$ 15.000,00
                            </p>
                             <p>
                                Valor aplicado mês de Fevereiro 2018: R$ 45.000,00
                            </p>
                             <p>
                                Valor aplicado mês de Agosto 2018: R$ 15.000,00
                            </p>
                            <p>Total: R$ 125.000,00</p>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-primary">
                        <p class="title">Empreendimentos</p>
                        <p class="subtitle">Imagens empreendimentos</p>
                        <figure class="image is-4by3">
                            <img src="http://itaipavaempreendimentos.com.br/wp-content/uploads/2015/07/6cc12cc7-aa07-49f3-a82a-e902dfb023ee.jpg">
                        </figure>
                        </article>
                    </div>
                    </div>
                    <div class="tile is-parent">
                    <article class="tile is-child notification is-primary">
                        <p class="title">Outra coluna</p>
                        <p class="subtitle">Outra coisa</p>
                        <div class="content">
                        <!-- Content -->
                        </div>
                    </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-success">
                    <div class="content">
                        <p class="title">Outra Coluna</p>
                        <p class="subtitle">Outra coisa</p>
                        <div class="content">
                        <!-- Content -->
                        </div>
                    </div>
                    </article>
                </div>
                </div>
        </section>
        
    </div>
</template>

<script>
export default {
    name: 'Investimentos',
    data() {
        return {
            title: 'Meus Investimentos',
        }
    },
    methods: {
        logout() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
section.conteudo {
    margin-top: 1em;
}
nav a{
    color: #fff
}
h2{
    font-size: 30px!important;
    font-weight: bold
}
</style>
