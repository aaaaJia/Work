<template>
    <dv-full-screen-container>
      <div class="container">
        <div>
          <Select @update:timeRange="handleTimeRangeChange" />
        </div>
        <div>
          <Check @update:checkedOptions="handleCheckedOptionsChange" />
        </div>
        <div>
          <Table :time-range="timeRange" :checked-options="checkedOptions" />
        </div>
      </div>
    </dv-full-screen-container>
  </template>
  
  <script setup>
  import Select from './components/Select.vue';
  import Table from './components/Table.vue';
  import Check from './components/Check.vue';
  import { ref } from 'vue';
  
  const timeRange = ref([null, null]);
  const checkedOptions = ref(['创建时间', '设备ID', '0.3um', '0.5um', '1um', '3um', '5um', '10um', '流量']);
  
  const handleTimeRangeChange = (newTimeRange) => {
    timeRange.value = newTimeRange;
  };
  
  const handleCheckedOptionsChange = (newCheckedOptions) => {
    checkedOptions.value = newCheckedOptions;
  };
  </script>
  
  <style scoped>
  .container {
    width: 95%;
    margin: 0 auto;
  }
  </style>