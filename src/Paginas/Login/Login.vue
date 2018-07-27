<template>
    <div class="container">
        <h1>{{message}}</h1>
        <form action="#" autocomplete="on">
            <b-field label="Usuário">
                <b-input v-model="username" placeholder="digite seu email"></b-input>
            </b-field>
            <b-field label="Password">
                <b-input type="password"
                    placeholder="digite sua senha"
                    v-model="password"
                    password-reveal>
                </b-input>
            </b-field>
            <button class="button is-success" @click.prevent="loginUser()">Enviar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data(){
        return {
            message: 'Login',
            username: '',
            password: '',
            isFullPage: true
        }
    },
    methods: {
        open() {
            const loadingComponent = this.$loading.open({
                container: this.isFullPage ? null : this.$refs.element.$el
            })
            setTimeout(() => loadingComponent.close(), 3 * 1000)
        },
        alertCustomError() {
            this.$dialog.alert({
                title: 'Erro ao logar',
                message: 'Seu usuario ou senha estão \ <b>errados</b> por favor tente novamente',
                type: 'is-danger',
                hasIcon: true,
                icon: 'times-circle',
                iconPack: 'fa'
            })
        },
        loginUser() {
            const dadosUser = {
                username: this.username,
                password: this.password
            }
            console.log('dados informados: ', dadosUser)
            axios.get('http://localhost:3000/users?username=' + dadosUser.username + '&password=' + dadosUser.password)
            .then(response => {
                if(response.data.length > 0){
                    console.log('Usuário encontrado! : ', response.data)
                    this.open()
                    this.$router.push('/investimentos')
                }else{
                    console.log('user não existe')
                    this.alertCustomError()
                }
            })
            .catch(err => {
                console.error(err)
            })
        }
    }
}
</script>

<style scoped>
    input{
    height: 25px;
    background: rgb(255, 255, 255);
    border: none;
    padding: 0.5em;
    margin-bottom: 15px;
    width: 305px;
    }
</style>
