<template>
  <div>
<!--    <Menu/>-->
    <el-button id="create" type="primary" size="small" @click="createFormVisible = true">新增教师</el-button>
    <el-table id="table" :data="pageData.records" style="width: 100%">
      <el-table-column prop="id" label="序号" width="50"/>
      <el-table-column prop="name" label="姓名" width="100"/>
      <el-table-column prop="gender" label="性别" width="100"/>
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button link type="danger" text @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        :page-size="pageData.size"
        :pager-count="pageData.pageCount"
        layout="prev, pager, next"
        :total="pageData.total"
        @prev-click="prevClick()"
        @next-click="nextClick()"
        @current-change="handleCurrentChange"
        :current-page="pageData.current"
    />
    <el-dialog v-model="createFormVisible" title="新增" align-center>
      <el-form :model="createForm">
        <el-form-item label="姓名" :label-width="180">
          <el-input v-model="createForm.name" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="性别" :label-width="180">
          <el-input v-model="createForm.gender" autocomplete="off"/>
        </el-form-item>

      </el-form>
      <template #footer>
                <span class="dialog-footer">
                  <el-button @click="createFormVisible = false">取消</el-button>
                  <el-button type="primary" @click="handleSave()">新增</el-button>
                </span>
      </template>
    </el-dialog>
    <el-dialog v-model="editFormVisible" title="编辑" align-center>
      <el-form :model="updateForm">
        <el-input v-model="updateForm.id" hidden/>
        <el-form-item label="名称" :label-width="180">
          <el-input v-model="updateForm.name" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="性别" :label-width="180">
          <el-input v-model="updateForm.gender" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <template #footer>
                <span class="dialog-footer">
                  <el-button @click="editFormVisible = false">取消</el-button>
                  <el-button type="primary" @click="handleUpdateForm()">更新</el-button>
                </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import {page, update, save, destroy} from '../apis/teacher.ts'
import Menu from "./Menu.vue";
import {ref, reactive} from "vue";
import {ElMessage, ElMessageBox} from 'element-plus'
//编辑框的可见性
const editFormVisible = ref(false)
const createFormVisible = ref(false)
const updateForm = reactive({
  name: '',
  gender: '',
  id: ''
})
const createForm = reactive({
  name: '',
  gender: '',
})
const success = (str) => {
  ElMessage({
    message: str,
    type: 'success'
  })
}
const handleDelete = (row) => {
  ElMessageBox.confirm(
      '要删除这条数据么',
      '警告!',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }
  )
      .then(() => {
        destroy(row.id).then(res => {
          console.log(res)
          if (res.code == 200) {
            loadTableData();
          }
        });
        ElMessage({
          type: 'success',
          message: '删除成功',
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '取消',
        })
      })
};

function loadTableData() {
  page({page: pageData.value.current, size: pageData.value.size}).then(res => {
    pageData.value = res.body;
  })
}

const handleUpdateForm = () => {
  update(updateForm).then(response => {
    if (response.code == 200) {
      success("修改成功")
      editFormVisible.value = false
      loadTableData()
    }
  })
}


const handleEdit = (row) => {
  editFormVisible.value = true
  updateForm.id = row.id;
  updateForm.name = row.name;
  updateForm.gender = row.gender;
};

const pageData = ref({
  current: 1,
  size: 10,
  pages: 0,
  records: ref([]),
  total: 0,
});

page({page: pageData.value.current, size: pageData.value.size}).then(res => {
  pageData.value = res.body;
})

const handleSave = () => {
  save(createForm).then(res => {
    console.log(res)
    if (res.code == 200) {
      createFormVisible.value = false
      loadTableData()
      success("新增成功")
    }
  })
}

function prevClick() {
  pageData.value.current = pageData.value.current - 1;
  loadTableData();
}

function nextClick() {
  console.log("next");
  pageData.value.current = pageData.value.current + 1;
  loadTableData();
}

function handleCurrentChange(num: number) {
  console.log(num);
  pageData.value.current = num;
  loadTableData();
}


</script>

<style scoped>
#table {
  margin-top: 10px;
}

#create {
  margin-top: 30px;
}
</style>
