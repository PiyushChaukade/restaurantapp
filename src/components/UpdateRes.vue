<template>

    <header-page></header-page>
    <h1>
        Welcome to Update Main page
    </h1>
       <form class="addresform" >

        <input type="text" name="name" placeholder="Enter restaurant name" v-model="restaurant.name"/>
        <input type="text" name="address" placeholder="Enter restaurant address" v-model="restaurant.address"/>
        <input type="number" name="contact" placeholder="Enter restaurant contact number" v-model="restaurant.contact"/>
        <button type="button" @click="UpdateRestaurant">Add Restaurant Here</button>
    </form>


</template>

<script >
 import HeaderPage from './HeaderPage.vue'
 import axios from 'axios'

export default{
    name:"UpdateRes",
      data(){
       return{
       restaurant:{
           name:'',
           address:'',
           contact:''
        }
       }
    },
   components:{
     HeaderPage
 
    
  },
   methods:{

   async UpdateRestaurant(){
    //console.log(this.restaurant)
         let result =await axios.put(`http://localhost:3000/restaurant/${this.$route.params.id}`, {
            name:this.restaurant.name,
            address:this.restaurant.address,
            contact:this.restaurant.contact

        })
        if(result.status == 200){
               console.log("update Res",result)
            this.$router.push({name:'HomePage'})
        }

    }

   },

       async mounted(){
        let user = localStorage.getItem('user-info')
        if(!user){
          this.$router.push({name:'LogIn'})
        }
        let result = await axios.get(`http://localhost:3000/restaurant/${this.$route.params.id}`)
       // console.log(this.$route.params.id)
       //console.log(result.data)
       this.restaurant = result.data

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
