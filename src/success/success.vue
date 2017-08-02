<template>
	<div class="container">
		<div class="nav-top">
	 		<div class="nav-top-hendline">
		  		<h1>{{ msg }}</h1>
		  		<h2>提交订单</h2>
	  		</div>
	  		<div class="nav-top-bg">
	  			<img src="../../static/assets/nav-top-bg-min.png" />
	  		</div>
	  	</div>
		 <div class="container-1">
		 	<div class="headline">
		    		<hr/><p>订单已提交</p><hr />
		    </div>
		    <div class="tip"><p>您选择了：</p></div>	    
		    <div class="menu">
		    		<li v-for="(item, index) in getSelectedList">
		 		<img :src="item.imgUrl"/>
		 		<p>{{ item.title }}*{{ item.number }}</p>
		 		<div class="clear"></div>
		 		</li>
		    </div>
		 </div>
		 <div class="nav-botttom">
	  		<div class="confirm-btn" >
	  			<router-link to="/">返回菜单</router-link>
	  		</div>
	  	</div>
	</div>
</template>

<script src="./success.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./success.css" scoped></style>
