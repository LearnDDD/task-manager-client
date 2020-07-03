<template>
  <div>
    <SimpleField v-model="data.title" label="タイトル" />
    <SimpleField v-model="data.details" label="内容" />
    <SimpleField v-model="data.taskTypeId" label="タスク種類" />
    <SimpleField v-model="data.parentTaskId" label="親タスク" />

    <b-button @click="register" label="登録" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { TaskRegisterRequest } from "@/types/task/TaskRegisterRequest"
import SimpleField from "@/components/template/SimpleField.vue"
@Component({
  components: { SimpleField }
})
export default class TaskRegister extends Vue {
  private data: TaskRegisterRequest = {
    title: '',
    details: '',
    parentTaskId: null,
    taskTypeId: null,
  };

  private register() {
    this.axios.post('http://localhost:8080/task/register', this.data)
      .then(response => {
        console.log('success')
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
</style>
