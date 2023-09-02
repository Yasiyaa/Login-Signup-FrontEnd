var signup = new Vue({
    el: "#signupForm",
    data: {
        name:"",
        email:"",
        username:"",
        password:""
     
    },
    mounted() {},
    updated() {},
    methods: {
      addUser: function () {
          var userData  = {
            name: this.name,
            email:this.email,
            username:this.username,
            password:this.password
          };
  
          axios.post('http://localhost:3000/user/add',userData)
          .then((res) => {
  
              if(res.status == 200){
                 alert("user added !");
              }
  
          })
          .catch((err)=>{
              console.log(err)
              alert("cannot add ");
          });
  
        console.log("check");
        
      },
    },
  });
  