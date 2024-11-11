<template>
  <div class="check-box">
    <a-checkbox-group v-model:value="checkedOptions" @change="handleCheckboxChange">
      <a-checkbox v-for="option in checkboxOptions" :key="option" :value="option">
        {{ option }}
      </a-checkbox>
    </a-checkbox-group>
    <PlusOutlined/>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';

const checkboxOptions = ref(['创建时间', '设备ID', '0.3um', '0.5um', '1um', '3um', '5um', '10um', '流量']);

// 一开始全部选中
const checkedOptions = ref(checkboxOptions.value);

// 将选中的选项通过 emit 传递给父组件
import { defineEmits } from 'vue';
const emit = defineEmits(['update:checkedOptions']);

const handleCheckboxChange = (checkedValues) => {
  checkedOptions.value = checkedValues;
  emit('update:checkedOptions', checkedValues);
};
</script>

<style scoped>
.check-box {
  height: 50px;
  width: 100%;
  margin: 20px 0 0 0;
  background-color: rgb(216, 215, 215);
  border: 0.2px solid rgb(161, 160, 160);
  text-align: right;
  line-height: 50px;
}
</style>