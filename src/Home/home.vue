<template>
	<div class="home">
	 	<div class="nav-top">
	 		<div class="nav-top-hendline">
		  		<h1>{{ msg }}</h1>
		  		<h2>精选菜单</h2>
	  		</div>
	  		<div class="nav-top-bg">
	  			<img src="../../static/assets/nav-top-bg-min.png" />
	  		</div>
	  </div>
	  	<div class="menu">
	  		<ul>
	        		<div class="container">
			          <li v-for="(item, index) in newsList">
				          	<img :src="item.imgUrl"/>
				          	
				          	<div class="item-right">
					            <p>{{ item.title }}</p>
					            <div class="counter-component">
						            	<div class="counter-btn" @click="minus(index)"> - </div>
						            	<div class="counter-show">
						            		<input type="text" v-model="item.number" />
						            	</div>
						            	<div class="counter-btn" @click="add(index)"> + </div>
					            </div>
				            </div>
			          </li>
	          	</div>
	       	</ul>
	  	</div>
	  	<div class="nav-botttom">
	  		<div class="confirm-btn" @click="confirm">确认购买</div>
	  	</div>
	</div>	
</template>

<script src="./home.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./home.css" scoped></style>
