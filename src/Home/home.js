
export default {
  name: 'hello',
  data() {
    return {
      msg: '点餐系统',
      newsList: null,
      number: null
    };
  },
  watch: {
    number () {
      this.$emit('on-change', this.number)
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
  	fetchData() {
  		this.$http.get('http://localhost:3003/getNewsList')
	    .then((res) => {
	      this.newsList = res.data;
	      for(let i = 0; i < this.newsList.length; i++) {
	      	this.newsList[i].number = 0;
	      }
	    }, (err) => {
	      console.log(err)
	    })
  	 },
    minus (index) {
    	  let obj = this.newsList[index];
    	  obj.number--;
    	  this.newsList.splice(index, 1, obj);
    },
    add (index) {
    	  let obj = this.newsList[index];
    	  obj.number++;
    	  this.newsList.splice(index, 1, obj);
    },
    confirm() {
    		let data = [];
    		for(let i = 0; i < this.newsList.length; i++){
    			if(this.newsList[i].number > 0 ){
    				data.push({
    					id: this.newsList[i].id,
    					number: this.newsList[i].number,
    					title: this.newsList[i].title,
    					imgUrl: this.newsList[i].imgUrl
    				});
    			}
    		}
    		this.$http.post('http://localhost:3003/getSelectedList',data)
    		.then((res) => {
    				this.$router.push('success')    			
    		}, (err) => {
    			console.log(err)
    		})
     }
  }
};
