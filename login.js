var login = new Vue({
  el: "#loginForm",
  data: {
    username: "",
    password: "",
  },
  mounted() {},
  updated() {},
  methods: {
    authenticate: function () {
        var credentials  = { password: this.password, username: this.username};

        axios.post('http://localhost:3000/user/authenticate',credentials)
        .then((res) => {

            if(res.status == 200){
                window.location.href = './index.html'
                alert("Welcome, " + userName + "!");
            }

        })
        .catch((err)=>{
            console.log(err)
            alert('Incorrect username or password');
        });

        console.log("check");
      
    },
  },
});
