<template>

<section>
 
    <header-page></header-page>

    <h1>
        Welcome to add restaurant page
    </h1>

    <form class="addresform" >

        <input type="text" name="name" placeholder="Enter restaurant name" v-model="restaurant.name"/>
        <input type="text" name="address" placeholder="Enter restaurant address" v-model="restaurant.address"/>
        <input type="number" name="contact" placeholder="Enter restaurant contact number" v-model="restaurant.contact"/>
        <button type="button" @click="addRestaurant">Add Restaurant Here</button>
    </form>

</section>
</template>

<script >
 import HeaderPage from './HeaderPage.vue'
 import axios from 'axios'

export default{
   
    name:"AddRes",
    data(){
       return{
       restaurant:{
           name:'',
           address:'',
           contact:''
        }
       }
    },
    methods:{
    async addRestaurant(){
        
        let result =await axios.post("http://localhost:3000/restaurant", {
            name:this.restaurant.name,
            address:this.restaurant.address,
            contact:this.restaurant.contact

        })
        if(result.status == 201){
               console.log("add Res",result)
            this.$router.push({name:'HomePage'})
        }
     
    },
    },
    components:{
     HeaderPage
 
    
},

        mounted(){
        let user = localStorage.getItem('user-info')
        if(!user){
          this.$router.push({name:'LogIn'})
        }

    }
}
</script>

<style scoped>

.addresform input{
    width: 300px;
    height: 30px;
    padding-left: 20px;
    margin-bottom: 30px;
    display: block;
    margin-right: auto;
    margin-left:auto;
    border: 1px solid skyblue;
}
.addresform button{
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
