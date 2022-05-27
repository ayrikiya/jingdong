<template>
  <div class="wrapper">
    <TopArea />
    <ProductList />
    <Order />
  </div>
</template>

<script>
//点击 去结算后 跳转到该订单确认页面
import useCommonAddressEffect from '../../effects/addressEffect'
import TopArea from './TopArea'
import ProductList from './ProductList'
import Order from './Order'

export default {
  name: 'OrderConfirmation',
  components: { TopArea, ProductList, Order },
  setup() {
    const { getAddressList } = useCommonAddressEffect()
    getAddressList()
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: $dark-bgColor;
  overflow-y: scroll;
}
</style>