<template>
  <el-row style="margin-top: 10px;">
    <el-col :span="8">
      <el-form>
        <el-form-item label="商品名称">
          <el-input placeholder="请输入商品名称" :row="1" style="width: 300px;">
            <template #append>
              <el-button :icon="Search" />
            </template>
          </el-input>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="11">
      <el-form>
        <el-form-item label="上架时间">
          <el-date-picker v-model="dateValue" type="daterange" start-placeholder="开始时间" end-placeholder="结束时间"
            style="margin-right: 58px;" />
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="5">
      <el-form>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
          <el-button type="primary">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-table :data="currentPageData" stripe>
    <el-table-column label="编号" prop="id" fixed></el-table-column>
    <el-table-column label="商品名称" prop="shopName" fixed></el-table-column>
    <el-table-column label="商品类型" prop="shopType" fixed></el-table-column>
    <el-table-column label="上架时间" prop="shopTime" fixed></el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          Edit
        </el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination layout="prev, pager, next" :total="productList.length" :page-size="pageSize"
    :current-page="currentPage" @size-change="handleSizeChange" @current-change="handleCurrentChange" background
    style="float: right; padding: 10px 88px 0 0;" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { Search } from '@element-plus/icons-vue';
const dateValue = ref('');

// 表格操作
//修改
const handleEdit = (index, row) => {
  console.log(index, row)
}
// 删除
const handleDelete = (index, row) => {
  console.log(index, row)
}

const currentPage = ref(1)//当前显示页码
const pageSize = ref(11)//每页显示的条数
//处理页码变化
const handleSizeChange = (size) => {
  pageSize.value = size
  currentPage.value = 1
}
//处理每页条数变化
const handleCurrentChange = (Page) => {
  currentPage.value = Page;
}
const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return productList.value.slice(start, end);
});
//模拟数据
let productList = ref([
  {
    id: '0001',
    shopName: '商品名称1',
    shopType: '商品类型1',
    shopTime: '2022-01-01'
  },
  {
    id: '0002',
    shopName: '商品名称2',
    shopType: '商品类型2',
    shopTime: '2022-01-02'
  },
  {
    id: '0002',
    shopName: '商品名称2',
    shopType: '商品类型2',
    shopTime: '2022-01-02'
  },
  {
    id: '0002',
    shopName: '商品名称2',
    shopType: '商品类型2',
    shopTime: '2022-01-02'
  },
  {
    id: '0002',
    shopName: '商品名称2',
    shopType: '商品类型2',
    shopTime: '2022-01-02'
  },
  {
    id: '0002',
    shopName: '商品名称2',
    shopType: '商品类型2',
    shopTime: '2022-01-02'
  },
  {
    id: '0002',
    shopName: '商品名称2',
    shopType: '商品类型2',
    shopTime: '2022-01-02'
  },
  {
    id: '0002',
    shopName: '商品名称2',
    shopType: '商品类型2',
    shopTime: '2022-01-02'
  },
  {
    id: '0002',
    shopName: '商品名称2',
    shopType: '商品类型2',
    shopTime: '2022-01-02'
  },
  {
    id: '0002',
    shopName: '商品名称2',
    shopType: '商品类型2',
    shopTime: '2022-01-02'
  },
  {
    id: '0002',
    shopName: '商品名称2',
    shopType: '商品类型2',
    shopTime: '2022-01-02'
  },
  {
    id: '0002',
    shopName: '商品名称2',
    shopType: '商品类型2',
    shopTime: '2022-01-02'
  },
  {
    id: '0002',
    shopName: '商品名称2',
    shopType: '商品类型2',
    shopTime: '2022-01-02'
  },
  {
    id: '0002',
    shopName: '商品名称2',
    shopType: '商品类型2',
    shopTime: '2022-01-02'
  },
  {
    id: '0002',
    shopName: '商品名称2',
    shopType: '商品类型2',
    shopTime: '2022-01-02'
  },
  {
    id: '0002',
    shopName: '商品名称2',
    shopType: '商品类型2',
    shopTime: '2022-01-02'
  },
])
</script>

<style scoped>

</style>