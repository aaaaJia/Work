<template>
    <div style="font-size: small;" class="content">
        <span>
      <a-radio-group v-model:value="size">
        <a-radio-button value="large">今日</a-radio-button>
        <a-radio-button value="default">近一周</a-radio-button>
        <a-radio-button value="small">近一月</a-radio-button>
      </a-radio-group>
    </span>
    <span>
      <a-range-picker v-model:value="timeRange" show-time />
    </span>
        产品id:
        <span>
            <a-select
                v-model:value="selectedProductId"
                placeholder="请选择产品"
                style="width: 200px;"
                @change="handleProductChange"
            >
                <a-select-option
                    v-for="item in data[0].result.data"
                    :key="item.id"
                    :value="item.id"
                >
                    {{ item.name }}
                </a-select-option>
            </a-select>
        </span>
        设备id:
        <span>
            <a-select
                v-model:value="selectedValue"
                placeholder="请选择设备"
                style="width: 200px;"
            >
                <a-select-option
                    v-for="item in filteredData2"
                    :key="item.id"
                    :value="item.id"
                >
                    {{ item.name }}
                </a-select-option>
            </a-select>
        </span>
        <span style="margin-left: 10px;">
            <a-button type="primary" :icon="h(SearchOutlined)">搜索</a-button>
        </span>
        <span style="width: 80px;height: 30px;display: inline-block;line-height: 30px;text-align: center;color: white;background-color: dodgerblue;margin-left: 40px;">
            <ExportOutlined />导出Excel
        </span>
        <span style="width: 80px;height: 30px;display: inline-block;line-height: 30px;text-align: center;color: white;background-color: dodgerblue;margin-left: 10px;">
            <ExportOutlined />导出PDF
        </span>
    </div>
</template>

<script setup>
import { ref,watch } from 'vue';
import { h } from 'vue';
import { defineEmits } from 'vue';
import { SearchOutlined } from '@ant-design/icons-vue';
import { ExportOutlined,ImportOutlined} from '@ant-design/icons-vue';

const size = ref('default');
const selectedProductId = ref(null);
const selectedValue = ref(null);
const timeRange = ref([null, null]); // 存储时间范围

const data = ref([
{
    "message": "success",
    "result": {
        "pageIndex": 0,
        "pageSize": 9999,
        "total": 20,
        "data": [
            {
                "id": "JC-6FZ",
                "name": "在线浮游菌采样器-JC-6FZ",
                "photoUrl": "http://119.136.32.69:9000/images/device/instance/device-card.png",
                "describe": "在线浮游菌采样器-JC-6FZ",
                "classifiedId": "",
                "classifiedName": "",
                "messageProtocol": "1780826262248849408",
                "protocolName": "HJ-消息协议",
                "metadata": "",
                "transportProtocol": "MQTT",
                "deviceType": {
                    "text": "网关子设备",
                    "value": "childrenDevice"
                },
                "configuration": {
                    "secureId": "937e74f7b02ee6b6",
                    "secureKey": "G85RAIltKF9BxEIM3JBwK44hjcoH5O5xtbwV9AFBk0SeG"
                },
                "state": 1,
                "creatorId": "1199596756811550720",
                "createTime": 1715923669626,
                "accessId": "1780838498942025728",
                "accessProvider": "mqtt-client-gateway",
                "accessName": "EMQXClient接入",
                "storePolicy": "default-column",
                "modifierId": "1199596756811550720",
                "modifyTime": 1729146941081,
                "samplingInterval": ""
            },
          
            {
                "id": "WD4120A",
                "name": "风速测量仪-WD4120A",
                "photoUrl": "http://119.136.32.69:9000/images/device/instance/device-card.png",
                "classifiedId": "-301-",
                "classifiedName": "智能园区",
                "messageProtocol": "1780826262248849408",
                "protocolName": "HJ-消息协议",
                "metadata": "{\"properties\":[{\"id\":\"wsp\",\"name\":\"风速\",\"expands\":{\"source\":\"device\",\"type\":[\"report\",\"read\"]},\"valueType\":{\"unit\":\"mPerSec\",\"scale\":2,\"type\":\"float\"},\"formula\":\"wsp/100\"}]}",
                "transportProtocol": "MQTT",
                "deviceType": {
                    "text": "网关子设备",
                    "value": "childrenDevice"
                },
                "configuration": {
                    "secureId": "bb0d6e3120c921a2",
                    "secureKey": "I9BTaKki7OEM69AQJpVffeX9CgpEHjEu9BFvpOhiHMWqBZB"
                },
                "state": 1,
                "creatorId": "1199596756811550720",
                "createTime": 1715839726002,
                "accessId": "1780838498942025728",
                "accessProvider": "mqtt-client-gateway",
                "accessName": "EMQXClient接入",
                "storePolicy": "default-column",
                "modifierId": "1199596756811550720",
                "modifyTime": 1728367390377
            },
          
            {
                "id": "JC-601",
                "name": "尘埃粒子计数器-JC-601",
                "photoUrl": "/upload/20240830/1829421451590168576.jpg",
                "describe": "尘埃粒子计数器 (适用于JC-601P\\JC-601Z)",
                "classifiedId": "-301-",
                "classifiedName": "智能园区",
                "messageProtocol": "1780826262248849408",
                "protocolName": "HJ-消息协议",
                "metadata": "",
                "transportProtocol": "MQTT",
                "deviceType": {
                    "text": "网关子设备",
                    "value": "childrenDevice"
                },
                "configuration": {
                    "secureId": "937e74f7b02ee6b6",
                    "secureKey": "G85RAIltKF9BxEIM3JBwK44hjcoH5O5xtbwV9AFBk0SeG"
                },
                "state": 1,
                "creatorId": "0c5a3e8915871b710c2cc98073748424",
                "createTime": 1713431451677,
                "accessId": "1780838498942025728",
                "accessProvider": "mqtt-client-gateway",
                "accessName": "EMQXClient接入",
                "storePolicy": "default-column",
                "modifierId": "1199596756811550720",
                "modifyTime": 1729146853409,
                "samplingInterval": "80"
            },
            {
                "id": "JC-B-6",
                "name": "多点系统变送器-JC-B-6",
                "photoUrl": "http://119.136.32.69:9000/images/device/instance/device-card.png",
                "describe": "多点系统变送器 JC-B-6",
                "classifiedId": "-301-",
                "classifiedName": "智能园区",
                "messageProtocol": "1780826262248849408",
                "protocolName": "HJ-消息协议",
                "metadata": "",
                "transportProtocol": "MQTT",
                "deviceType": {
                    "text": "网关子设备",
                    "value": "childrenDevice"
                },
                "configuration": {
                    "secureId": "937e74f7b02ee6b6",
                    "secureKey": "G85RAIltKF9BxEIM3JBwK44hjcoH5O5xtbwV9AFBk0SeG"
                },
                "state": 1,
                "creatorId": "0c5a3e8915871b710c2cc98073748424",
                "createTime": 1713415968914,
                "accessId": "1780838498942025728",
                "accessProvider": "mqtt-client-gateway",
                "accessName": "EMQXClient接入",
                "storePolicy": "default-column",
                "modifierId": "1199596756811550720",
                "modifyTime": 1730768565198
            }
        ]
    },
    "status": 200,
    "timestamp": 1731291958713
}


]);

const data2=ref([
{
    "message": "success",
    "result": {
        "pageIndex": 0,
        "pageSize": 8,
        "total": 4,
        "data": [
            {
                "id": "JC-601P-020",
                "photoUrl": "/upload/20240926/1839133198569295872.jpg",
                "name": "JC-601P-020-样间尘埃粒子计数器",
                "deviceType": {
                    "text": "网关子设备",
                    "value": "childrenDevice"
                },
                "describe": "样间尘埃粒子计数器（进门右手边）, SID: 4",
                "productId": "JC-601",
                "productName": "尘埃粒子计数器-JC-601",
                "state": {
                    "text": "离线",
                    "value": "offline"
                },
                "creatorId": "1199596756811550720",
                "creatorName": "超级管理员",
                "createTime": 1715841540818,
                "registryTime": 1715841549513,
                "parentId": "HJ-IPC-001",
                "features": [],
                "modifyTime": 1727318499537,
                "modifierId": "1199596756811550720",
                "modifierName": "超级管理员",
                "samplingInterval": "120"
            },
            {
                "id": "JC-601P-010",
                "photoUrl": "/upload/20240828/1828592571101532160.jpg",
                "name": "JC-601P-010-样间尘埃粒子计数器",
                "deviceType": {
                    "text": "网关子设备",
                    "value": "childrenDevice"
                },
                "describe": "样间尘埃粒子计数器（进门左手边）SID: 3",
                "productId": "JC-601",
                "productName": "尘埃粒子计数器-JC-601",
                "state": {
                    "text": "离线",
                    "value": "offline"
                },
                "creatorId": "1199596756811550720",
                "creatorName": "超级管理员",
                "createTime": 1715840821994,
                "registryTime": 1715840826036,
                "parentId": "HJ-IPC-001",
                "features": [],
                "modifyTime": 1729041617309,
                "modifierId": "1199596756811550720",
                "modifierName": "超级管理员",
                "samplingInterval": "120"
            },
            {
                "id": "JC-601P-001",
                "photoUrl": "/upload/20240926/1839132999323078656.jpg",
                "name": "一车间尘埃粒子计数器",
                "deviceType": {
                    "text": "网关子设备",
                    "value": "childrenDevice"
                },
                "productId": "JC-601",
                "productName": "尘埃粒子计数器-JC-601",
                "state": {
                    "text": "离线",
                    "value": "offline"
                },
                "creatorId": "1199596756811550720",
                "creatorName": "超级管理员",
                "createTime": 1715162435692,
                "registryTime": 1715656849538,
                "parentId": "MyMac",
                "features": [],
                "modifyTime": 1727318455103,
                "modifierId": "1199596756811550720",
                "modifierName": "超级管理员"
            },
            {
                "id": "JC-601P-002",
                "photoUrl": "/upload/20240911/1833812611099537408.jpg",
                "name": "二车间尘埃粒子计数器",
                "deviceType": {
                    "text": "网关子设备",
                    "value": "childrenDevice"
                },
                "productId": "JC-601",
                "productName": "尘埃粒子计数器-JC-601",
                "deriveMetadata": "",
                "state": {
                    "text": "离线",
                    "value": "offline"
                },
                "creatorId": "0c5a3e8915871b710c2cc98073748424",
                "creatorName": "Libin",
                "createTime": 1713431870539,
                "registryTime": 1713431877222,
                "parentId": "MyMac",
                "features": [],
                "modifyTime": 1726049972608,
                "modifierId": "1199596756811550720",
                "modifierName": "超级管理员",
                "samplingInterval": ""
            }
        ]
    },
    "status": 200,
    "timestamp": 1731292681023
}

])



const filteredData2 = ref([]);

const handleProductChange = (value) => {
    const productData = data.value[0].result.data.find(item => item.id === value);
    if (productData) {
        const devices = data2.value[0].result.data.filter(item => item.productId === productData.id);
        filteredData2.value = devices;
    } else {
        filteredData2.value = [];
    }
    selectedValue.value = null;
};

const emit = defineEmits(['update:timeRange']);
watch(timeRange, (newValue) => {
  emit('update:timeRange', newValue);
})
</script>

<style scoped>
span {
    margin: 0 1px;
}
.content{
    margin-top: 20px;
    margin-bottom: 0;
}
</style>