<template>
  <el-card style="background-color:#f0f0f0;">
    <template #header>
      <el-carousel :interval="4000" type="card" height="300px" motion-blur>
        <el-carousel-item v-for="item in carouselList" :key="item.title">
          <img :src="item.imgSrc" alt="">
        </el-carousel-item>
      </el-carousel>
    </template>
    <el-space style="margin-top: 10px;" wrap size="large">
      <el-card v-for="item in items" :key="item.id" shadow="hover" body-style="padding: 0;border-radius: 40px;">
        <el-row>
          <el-col :span="24">
            <el-image :src="item.shopImg" fit="contain" style="width: 150px;height: 180px;"></el-image>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <p>{{ item.shopInfo }}</p>
            <p>￥{{ item.shopPrice }} {{ item.shopName }}</p>
            
          </el-col>
        </el-row>
      </el-card>
    </el-space>
  </el-card>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const msg = ref('Hello World!');
const carouselList = ref([
  { imgSrc: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960', title: '0' }, 
  { imgSrc: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960', title: '1' },
  { imgSrc: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960', title: '2' },
  { imgSrc: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960', title: '3' },
  { imgSrc: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960', title: '4' },
  { imgSrc: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960', title: '5' },
  { imgSrc: 'http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960', title: '6' },
])
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

<style scoped>
img {
  width: 100%;
  height: auto;
  text-align: center;
}
</style>
