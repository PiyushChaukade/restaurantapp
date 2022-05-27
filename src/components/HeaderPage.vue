<template>
   
   <section>
    
       <div class="navbar">
        
   <!-- <h1>Header</h1>
   <a>Home</a>
   <a>res</a>

   <a>upd</a> -->

  

             <router-link to="/">Home</router-link>
           <router-link to="/addres"> Add Restaurant</router-link> 
         <!-- <router-link to="/updateres"> Update Restaurant</router-link>  -->
             <a @click="logout">logout</a>

       </div>
   </section>
</template>

<script >

export default{
    name:"HeaderpageNew",
    methods:{
        logout(){
            //console.log("logout")
            localStorage.clear();
             this.$router.push({name:'LogIn'})

        },
    },

     
     
}
</script>

<style scoped>

.navbar{
    background-color:burlywood;
    overflow: hidden;

padding: 15px;
}
.navbar>a{

text-align: left;
margin-left: 10px;

}
.navbar>a:hover{

background-color: white;


}



</style>