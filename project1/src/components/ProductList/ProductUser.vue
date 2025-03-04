<template>
  <el-card>
    <!-- <el-row v-for="item in shopType" :key="item.bigName">
      <el-col :span="2">
        <el-button type="info" style="width: 100px;" size="large">{{ item.bigName }}</el-button>
      </el-col>
      <el-col :span="22">
        <el-button type="info" plain v-for="item2 in item.smallName" :key="item2" size="large">
          {{ item2 }}
        </el-button>
      </el-col>
      <el-divider style="margin: 10px 0;"></el-divider>
    </el-row> -->
    <!-- <el-row>
      <el-col>综合排序</el-col>
      <el-col>价格</el-col>
    </el-row> -->

    <el-row>
      <el-col>综合排序</el-col>
    </el-row>

    <el-row v-for="item in items" :key="item.id" :gutter="20">
      <el-col :span="3"><el-image :src="item.shopImg" fit="contain"></el-image></el-col>
      <el-col :span="21">
        <el-row>
          <el-col :span="24">${{ item.shopPrice }}  <el-link href="">{{ item.shopName }}</el-link></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">

          </el-col>
          <el-col :span="12">

          </el-col>
        </el-row>
      </el-col>
      <el-divider style="margin: 10px 0;"></el-divider>
    </el-row>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
// const shopType = ref([
//   {
//     bigName: '价格',
//     smallName: [
//       '价格从低到高',
//       '价格从高到低',
//     ]
//   },
//   {
//     bigName: '国产/进口',
//     smallName: [
//       '国产',
//       '进口',
//     ]
//   },
//   {
//     bigName: '评分',
//   }
// ])


const items = ref([
  {
    id: 1, //商品编号
    shopName: 'Shop1',//商品名称 
    shopPrice: 100, //商品价格
    shopImg: 'https://www.baidu.com/img/flexible/logo/pc/result.png',//商品展示图 
    numState: true, //商品库存
    shopType: '电子产品',//商品类型
    shopInfo: 'apple新产品',//商品简介
    shopTime: '2022-01-01'//商品上架时间
  },
  {
    id: 1, //商品编号
    shopName: 'Shop1',//商品名称 
    shopPrice: 100, //商品价格
    shopImg: 'https://www.baidu.com/img/flexible/logo/pc/result.png',//商品展示图 
    numState: true, //商品库存
    shopType: '电子产品',//商品类型
    shopInfo: 'apple新产品',//商品简介
    shopTime: '2022-01-01'//商品上架时间
  },
  {
    id: 1, //商品编号
    shopName: 'Shop1',//商品名称 
    shopPrice: 100, //商品价格
    shopImg: 'https://www.baidu.com/img/flexible/logo/pc/result.png',//商品展示图 
    numState: true, //商品库存
    shopType: '电子产品',//商品类型
    shopInfo: 'apple新产品',//商品简介
    shopTime: '2022-01-01'//商品上架时间
  },
  {
    id: 1, //商品编号
    shopName: 'Shop1',//商品名称 
    shopPrice: 100, //商品价格
    shopImg: 'https://www.baidu.com/img/flexible/logo/pc/result.png',//商品展示图 
    numState: true, //商品库存
    shopType: '电子产品',//商品类型
    shopInfo: 'apple新产品',//商品简介
    shopTime: '2022-01-01'//商品上架时间
  },
  {
    id: 1, //商品编号
    shopName: 'Shop1',//商品名称 
    shopPrice: 100, //商品价格
    shopImg: 'https://www.baidu.com/img/flexible/logo/pc/result.png',//商品展示图 
    numState: true, //商品库存
    shopType: '电子产品',//商品类型
    shopInfo: 'apple新产品',//商品简介
    shopTime: '2022-01-01'//商品上架时间
  },
  {
    id: 1, //商品编号
    shopName: 'Shop1',//商品名称 
    shopPrice: 100, //商品价格
    shopImg: 'https://www.baidu.com/img/flexible/logo/pc/result.png',//商品展示图 
    numState: true, //商品库存
    shopType: '电子产品',//商品类型
    shopInfo: 'apple新产品',//商品简介
    shopTime: '2022-01-01'//商品上架时间
  },
  {
    id: 1, //商品编号
    shopName: 'Shop1',//商品名称 
    shopPrice: 100, //商品价格
    shopImg: 'https://www.baidu.com/img/flexible/logo/pc/result.png',//商品展示图 
    numState: true, //商品库存
    shopType: '电子产品',//商品类型
    shopInfo: 'apple新产品',//商品简介
    shopTime: '2022-01-01'//商品上架时间
  },
  {
    id: 1, //商品编号
    shopName: 'Shop1',//商品名称 
    shopPrice: 100, //商品价格
    shopImg: 'https://www.baidu.com/img/flexible/logo/pc/result.png',//商品展示图 
    numState: true, //商品库存
    shopType: '电子产品',//商品类型
    shopInfo: 'apple新产品',//商品简介
    shopTime: '2022-01-01'//商品上架时间
  },
  {
    id: 1, //商品编号
    shopName: 'Shop1',//商品名称 
    shopPrice: 100, //商品价格
    shopImg: 'https://www.baidu.com/img/flexible/logo/pc/result.png',//商品展示图 
    numState: true, //商品库存
    shopType: '电子产品',//商品类型
    shopInfo: 'apple新产品',//商品简介
    shopTime: '2022-01-01'//商品上架时间
  },
  {
    id: 1, //商品编号
    shopName: 'Shop1',//商品名称 
    shopPrice: 100, //商品价格
    shopImg: 'https://www.baidu.com/img/flexible/logo/pc/result.png',//商品展示图 
    numState: true, //商品库存
    shopType: '电子产品',//商品类型
    shopInfo: 'apple新产品',//商品简介
    shopTime: '2022-01-01'//商品上架时间
  },
  {
    id: 1, //商品编号
    shopName: 'Shop1',//商品名称 
    shopPrice: 100, //商品价格
    shopImg: 'https://www.baidu.com/img/flexible/logo/pc/result.png',//商品展示图 
    numState: true, //商品库存
    shopType: '电子产品',//商品类型
    shopInfo: 'apple新产品',//商品简介
    shopTime: '2022-01-01'//商品上架时间
  },
  {
    id: 1, //商品编号
    shopName: 'Shop1',//商品名称 
    shopPrice: 100, //商品价格
    shopImg: 'https://www.baidu.com/img/flexible/logo/pc/result.png',//商品展示图 
    numState: true, //商品库存
    shopType: '电子产品',//商品类型
    shopInfo: 'apple新产品',//商品简介
    shopTime: '2022-01-01'//商品上架时间
  },
  {
    id: 1, //商品编号
    shopName: 'Shop1',//商品名称 
    shopPrice: 100, //商品价格
    shopImg: 'https://www.baidu.com/img/flexible/logo/pc/result.png',//商品展示图 
    numState: true, //商品库存
    shopType: '电子产品',//商品类型
    shopInfo: 'apple新产品',//商品简介
    shopTime: '2022-01-01'//商品上架时间
  },
  {
    id: 1, //商品编号
    shopName: 'Shop1',//商品名称 
    shopPrice: 100, //商品价格
    shopImg: 'https://www.baidu.com/img/flexible/logo/pc/result.png',//商品展示图 
    numState: true, //商品库存
    shopType: '电子产品',//商品类型
    shopInfo: 'apple新产品',//商品简介
    shopTime: '2022-01-01'//商品上架时间
  },
])
</script>

<style></style>