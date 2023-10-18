<template>
  <div>
    <button class="btn btn-primary navbar-btn" data-toggle="modal" data-target="#shoppingCart">
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      ( {{ 1 }} )
    </button>
    <div id="shopingCard fm ts" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      Shopping cart
                      </h5>
                    <button class="close" data-dismiss="modal">
                    &times;
                    </button>
                </div>
                <div class="modal-body">
                    <table class="table">
                        <tbody>
                            <tr v-for="(item,idx) in inCart" :key="idx">
                                <td>{{ item.title }}</td>
                                <td>${{ item.title }}</td>
                                <td>
                                    <button class="btn btn-sm btn-danger" @click="removeFromCart(item)">&times;</button>
                                </td>
                            </tr>
                            <tr>
                                <th></th>
                                <th>${{ .bakf }}</th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
                    <button class="btn btn-primary" @click="checkout()">Check out</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
