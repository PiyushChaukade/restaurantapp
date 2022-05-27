<template>
    
    <section>
        <div>
        
        <h1>SignUp</h1>
        <div class="register">
        
        <input v-model="name" placeholder="Enter Name">
        <input v-model="email" placeholder="Enter Email">
        <input v-model="password" placeholder="Enter Password">

        <button @click="SignUp">Sign up</button>
        <p>
            <router-link to="login">LogIn</router-link>
        </p>

         </div>
        </div>
    </section>

</template>

<script >
import axios from "axios"
export default{
    
    name:'SignUp',
    data(){
        return {
            name:'',
            email:'',
            password:'',

        }
    },
    methods:{
       async SignUp(){
           // console.log("singup")
            // console.log(this.name)
            // console.log(this.email)
            // console.log(this.password)
            let Result =await axios.post("http://localhost:3000/users",{

                name:this.name,
                email:this.email,
                password:this.password,
                
            })
            
            if(Result.status == 201  ){
                // alert("Sign up Successfully")
                localStorage.setItem("user-info", JSON.stringify(Result.data))
                this.$router.push({name:'HomePage'})
               // console.log("signup",Result)
            }

        },
    },
    mounted(){
        let user = localStorage.getItem('user-info')
        if(user){
                //console.log("user in")

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
