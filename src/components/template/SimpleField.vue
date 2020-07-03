<template>
  <b-field :label="label">
    <b-input v-model="inputValue" @change="changeHandler"></b-input>
  </b-field>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator"

@Component
export default class SimpleField extends Vue {
  @Prop({ type: [String, Number], required: true })
  private value!: string | number

  @Prop({ required: true })
  private label!: string

  @Emit()
  private input(value: string | number) {
    return
  }

  private set inputValue(value: string | number) {
    this.input(value)
  }

  private get inputValue() {
    return this.value
  }

  private changeHandler() {
    this.changed(this.value)
  }

  @Emit()
  private changed(value: string | number) {
    return
  }
}
</script>

<style scoped>

</style>
