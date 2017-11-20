<template>
<div>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <p class="title">Quality Products</h1>
              <p class="subtitle">Produk yang berkualitas dan after sales support prima dari kami membantu meningkatkan availability dan reliability fleet anda.</p>
            </div>
            <div class="column">
              <img src="http://www.rnulc.com/wp-content/uploads/2016/05/Hero-Machinery.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
        <div v-for="(product, index) in products" class="box">
            <article class="media">
                <div class="media-left">
                <figure class="image is-128x128">
                    <img :src="'http://www.iotrain.com/' + product.picture.path" alt="">
                </figure>
                </div>
                <div class="media-content">
                <div class="content">
                    <p class="title is-4">
                    {{product.name}}</p>
                    <p>
                    {{product.description}}</p>
                </div>
                <nav class="level is-mobile">
                    <div class="level-left">
                    <a class="level-item">
                        <span class="icon is-small"><i class="fa fa-info"></i></span>
                    </a>
                    <!-- <a class="level-item">
                        <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                    </a> -->
                    <a class="level-item">
                        <span class="icon is-small"><i class="fa fa-heart"></i></span>
                    </a>
                    </div>
                    <a :href="'/products/' + index">Lebih detail ...</a>
                </nav>
                </div>
            </article>
        </div>
    </section>
    
</div>
  
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      products: {}
    }
  },
  created () {
    axios.get(process.env.cockpit.apiUrl + '/collections/get/arproducts?token=' + process.env.cockpit.apiToken)
      .then(res => {
        this.products = res.data.entries
        console.log(this.products)
        // this.$store.commit('setProducts', res.data.entries)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>
