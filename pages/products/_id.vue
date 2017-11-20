<template>
  <div class="content">
      <div class="hero is-light">
        <div class="hero-body">
          <div class="container">
            <p class="title">{{product.name}}</p>
            <img :src="'http://www.iotrain.com/' + product.picture.path" alt="">
            <p class="subtitle is-6">{{product.description}}</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="tabs is-boxed">
          <ul>
            <li @click="problemSelected" :class="{'is-active': probActive}"><a>Problem</a></li>
            <li @click="solusiSelected" :class="{'is-active': solActive}"><a>Solusi</a></li>
            <li @click="benefitSelected" :class="{'is-active': benActive}"><a>Benefit</a></li>
            <li @click="dokumenSelected" :class="{'is-active': docActive}"><a>Dokumen</a></li>
          </ul>
        </div>
        <div class="section">
          <div class="container">
            <div v-if="probActive">
              <h1>Problem</h1>
              <div v-html="product.problem"></div>
            </div>
            <div v-if="solActive">
              <div>
                <h1>Solusi</h1>
                <p class="subtitle is-6">{{product.description}}</p>
              </div>
              <br><br>
              <div>
                <h2>Cara Kerja System</h2>
                <div v-html="product.system"></div>
              </div>
            </div>
            <div v-if="benActive">
              <h1>Benefit</h1>
              <div v-html="product.benefit"></div>
            </div>
            <div v-if="docActive">
              <h1>Dokumen</h1>
              <span class="icon is-large">
                <i class="fa fa-file-pdf-o"></i>
              </span>
              <a :href="'http://www.iotrain.com/' + product.brochure" target="_blank">Product Brochure</a>
              
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ params }) {
    return axios.get(process.env.cockpit.apiUrl + '/collections/get/arproducts?token=' + process.env.cockpit.apiToken)
      .then((res) => {
        console.log(res.data.entries[params.id])
        return {product: res.data.entries[params.id]}
      })
  },
  data () {
    return {
      probActive: true,
      solActive: false,
      benActive: false,
      docActive: false
    }
  },
  methods: {
    problemSelected () {
      this.probActive = true
      this.solActive = false
      this.benActive = false
      this.docActive = false
    },
    solusiSelected () {
      this.probActive = false
      this.solActive = true
      this.benActive = false
      this.docActive = false
    },
    benefitSelected () {
      this.probActive = false
      this.solActive = false
      this.benActive = true
      this.docActive = false
    },
    dokumenSelected () {
      this.probActive = false
      this.solActive = false
      this.benActive = false
      this.docActive = true
    }
  }

}
</script>

<style>

</style>
