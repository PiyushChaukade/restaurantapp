<template>
   
      <section>
        <div>
        
        <h1>LogIn</h1>

        <div class="register">
        
        <input v-model="email" placeholder="Enter Email">
        <input v-model="password" placeholder="Enter Password">

        <button @click="login" >LogIn</button>
        <p>
            <router-link to="signup">SignUp</router-link>
        </p>

         </div>
        </div>
    </section>
</template>

<script >
import axios from "axios"


export default{
    name:"LogIn",

data(){
    return {
        email:'',
        password:''
    }
},
methods:{
    async login(){
        let ResultLogin = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
       // console.log(this.email, this.password)
        if(ResultLogin.status == 200 && ResultLogin.data.length>0 ){
                // alert("Sign up Successfully")
                localStorage.setItem("user-info", JSON.stringify(ResultLogin.data[0]))
                this.$router.push({name:'HomePage'})
            }
        //console.log('login',ResultLogin)

    },
},  
 mounted(){
        let user = localStorage.getItem('user-info')
        if(user){
          this.$router.push({name:'HomePage'})
        }

    }  
   
}
</script>
<style scoped>
.register input{
    width: 300px;
    height: 30px;
    padding-left: 20px;
    margin-bottom: 30px;
    display: block;
    margin-right: auto;
    margin-left:auto;
    border: 1px solid skyblue;
}
.register button{
    width: 320px;
    height: 30px;
    padding-left: 20px;
    margin-bottom: 30px;
    border: 1px solid skyblue;
    background: skyblue;
    color:white;
    cursor: pointer;
}

</style>

