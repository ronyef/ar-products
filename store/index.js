import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      products: {}
    },
    mutations: {
      setProducts (data) {
        this.state.products = data.entries
        console.log(this.state.products)
      }
    }
  })
}

export default createStore
