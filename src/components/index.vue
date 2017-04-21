<template>
<div class="user-container">
    <el-row>
        <el-col :md="24" >
            <section class="user-container-wrapper">
                <div class="user-search-container">
                    <user-search></user-search>
                </div>
                <!--个人属性-->
                <div class="product-search-result" v-if="product_datas">
                    <!--<div class="person-feature">
                        <person-feature></person-feature>
                    </div>
                    <div class="person-trace">
                        <person-trace></person-trace>
                    </div>-->
                    <div>
                        <basic></basic>
                    </div>
                    <div>
                        <age-sex></age-sex>
                    </div>
                    <div>
                        <product-area></product-area>
                    </div>
                    <div>
                        <lenovo-id></lenovo-id>
                    </div>
                    <div>
                        <family-status></family-status>
                    </div>
                    <div>
                        <internet-feature></internet-feature>
                    </div>
                    <div>
                        <action-feature></action-feature>
                    </div>
                </div>
            </section>
        </el-col>
    </el-row>
</div>
</template>

<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import userSearch from '@/components/user/userSearch.vue'
    import personFeature from '@/components/user/personFeature.vue'
    import personTrace from '@/components/user/personTrace.vue'
    import basic from '@/components/product/basic.vue'
    import internetFeature from '@/components/product/internetFeature.vue'
    import ageSex from '@/components/product/ageSex.vue'
    import area from '@/components/product/area.vue'
    import familyStatus from '@/components/product/familyStatus.vue'
    import lenovoID from '@/components/product/lenovoID.vue'
    import actionFeature from '@/components/product/actionFeature.vue'
    import wordArt from '@/components/user/wordArt.vue'
    import { mapGetters } from 'vuex'

    export default {
          name: 'index',
          components: {
            'userSearch': userSearch,
            'personFeature': personFeature,
            'personTrace': personTrace,
            'basic': basic,
            'internetFeature': internetFeature,
            'ageSex': ageSex,
            'productArea': area,
            'familyStatus': familyStatus,
            'lenovoId': lenovoID,
            'actionFeature': actionFeature,
            'wordArt': wordArt
          },
        data() {
            return {
               labelPosition: 'right'
            }
        },
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                product_datas: 'product_datas'
            })
        },
        created () {
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
<style lang="less">
    .chart-container {
        width: 100%;
        height: 100%;
        // min-width: 300px;
        min-height: 300px;
        // max-width: 330px;
        // max-height: 330px;
    }
</style>
<style lang="less">
  .el-collapse {
    margin-top: 20px;
    .el-collapse-item__wrap {
        background-color: white;
    }
  }
</style>
<style lang="less" scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }

  .user-container{
    position: relative;
    background-color: #ffffff;
    padding: 10px 40px;
    min-height: 800px;
    .toggle-menu{
      position: absolute;
      z-index: 100000;
      top: 10px;
      right: 5px;
      .active{

    color: #fff;
    background-color: #13ce66;
    border-color: #13ce66;

      }
    }
    .box-card{
      margin-top: 20px;
    }
    .user-container-wrapper{
      .product-search-result{
        > h2{
          font-weight: 400;
          color: #1f2f3d;
        }
      }
    }
  }

  .user-search-container {
      text-align: center;
  }
</style>
