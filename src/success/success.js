export default {
  name: 'success',
  data() {
    return {
      msg: '点餐系统',
      getSelectedList:''
    };
  },
  created(){
  	this.fetchData();
  },
  methods:{
  	fetchData(){
  		this.$http.get('http://localhost:3003/getSelectedList')
	    .then((res) => {
	      this.getSelectedList = res.data;
	      for(let i = 0; i < this.getSelectedList.length; i++) {
	      	this.getSelectedList[i].number = 0;
	      }
	    }, (err) => {
	      console.log(err)
	    })
  	 }
  }
 };
 
