<template>
  <div class="hello">

    <b-table :data="tasks" :columns="columnSettings"/>

<!--    <table>-->
<!--      <tr>-->
<!--        <td>名前</td>-->
<!--        <td>部署</td>-->
<!--      </tr>-->
<!--    </table>-->
<!--    <table>-->
<!--      <tr>-->
<!--        <td>id</td>-->
<!--        <td>title</td>-->
<!--      </tr>-->
<!--      <tr v-for="task in tasks" :key="task.id">-->
<!--        <td>{{ task.id }}</td>-->
<!--        <td>{{ task.title }}</td>-->
<!--      </tr>-->
<!--    </table>-->
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ColumnSetting } from '@/types/table/Table'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  private tasks: { id: number; title: string }[] = [
    { id: 100, title: 'sample title' }
  ];

  private columnSettings: ColumnSetting[] = [
    {
      field: 'id',
      label: 'ID',
      width: 50
    },
    {
      field: 'title',
      label: 'Title',
      width: 80
    }
  ]

  private mounted () {
    this.loadTasks()
  }

  private loadTasks () {
    this.axios
      .get('http://localhost:8080/task/list')
      .then(response => {
        this.tasks = response.data.tasks
      })

      .catch(error => {
        alert('catch')
        console.log(error)
        if (error.response) {
          // 要求がなされたとサーバがステータスコードで応答した
          // 2XXの範囲外
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // 要求がなされたが、応答が受信されなかった
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
          // トリガーしたリクエストの設定に何かしらのエラーがある
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
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
