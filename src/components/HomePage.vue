<template>



   
   <headerpage-new></headerpage-new>
   <section >
    <h1>
        Welcome {{name}} to home page
    </h1>
     <table class="home" border="1px" >
         <tr>
             <td>Id</td>
             <td>Restaurant name</td>
             <td>Contact</td>
             <td>Address</td>
             <td>Actions</td>

         </tr>
            <tr v-for="item in restaurant" :key="item.id">

                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.contact}}</td>
                <td>{{item.address}}</td>
                <td>
                    <router-link :to="'/updateres/'+ item.id ">Update</router-link>
                    <button @click="deleterestaurant(item.id)">Delete</button>
                </td>

                        
            </tr>
        </table>
        </section>
</template>

<script >
import HeaderpageNew from './HeaderPage.vue'
import axios from 'axios'


export default{
    name:"HomePage",
    data(){
        return{
            name:'',
           restaurant:[],
        }
    },
    components:{
   HeaderpageNew
    
   },

   methods:{
    
   async deleterestaurant(id){
       
        let result =await axios.delete(`http://localhost:3000/restaurant/${id}`);
        if(result.status == 200){
         this.loadData()
        }
    },
    async loadData(){

     let user = localStorage.getItem('user-info')
        this.name=JSON.parse(user).name;
        if(!user){
          this.$router.push({name:'SignUp'})
        }

        let result =await axios.get("http://localhost:3000/restaurant");

       // console.log("restaurant", result)
        this.restaurant=result.data;
    }


   },

      async  mounted(){
       this.loadData()
    }
}
</script>
<style scoped>
td{
    width: 160px;
    height: 50px;
}
.home{
    
    margin: auto;
    
}
</style>
