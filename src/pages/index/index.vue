<template>
  <div>
    <div>
      <button @click="add('add')">添加</button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="180">
      </el-table-column>
      <el-table-column
        prop="content"
        label="描述">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <button @click="edit(scope.row, scope.$index,'edit')">编辑</button>
          <button @click="deleteUsers(scope.row.id)">删除</button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="添加"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form v-model="userForm">
        <el-form-item label="姓名">
          <el-input v-model="userForm.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="userForm.age" type="number"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="userForm.content"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        subStr: '',
        userForm: {
          name: '',
          age: 0,
          content: ''
        },
        msg: 'welcome liker !',
        activeIndex: '1',
        tableData: [],
        dialogVisible: false,
        editID: null
      }
    },
    mounted () {
      this.getUserList()
    },
    methods: {
      deleteUsers (e) {
        let param = {
          id: e
        }
        this.$store.dispatch('deleteUser', param).then(res => {
          if (res.code === 1) {
            this.getUserList()
          }
        })
      },
      emty () {
        this.userForm = {
          name: '',
          age: 0,
          content: ''
        }
        this.subStr = ''
        this.editID = null
      },
      submit () {
        console.log(this.userForm)
        let param = {
          name: this.userForm.name,
          age: this.userForm.age,
          content: this.userForm.content,
          id: this.editID
        }
        if (this.subStr === 'add') {
          this.$store.dispatch('addUserLists', param).then(res => {
            if (res.code === 1) {
              this.getUserList()
              this.handleClose()
            }
          })
        } else {
          this.$store.dispatch('editUser', param).then(res => {
            if (res.code === 1) {
              this.getUserList()
              this.handleClose()
            }
          })
        }
      },
      handleClose () {
        this.dialogVisible = false
        this.emty()
      },
      add (e) {
        this.dialogVisible = true
        this.subStr = e
      },
      edit (e, i, t) {
        const {name, age, id, content} = e
        this.subStr = t
        this.dialogVisible = true
        this.editID = id
        this.userForm = {
          name: name,
          age: age,
          content: content
        }
      },
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      getUserList () {
        this.$store.dispatch('getUserLists').then(res => {
          if (res.code === 1) {
            this.tableData = res.list
          }
        })
      }
    }
  }
</script>

<style>
  .index-top {
    color: #409EFF;
    margin-top: 20%;
  }
</style>
