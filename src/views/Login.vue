<template>
    <div>
        <div class="box">
            <p style="font-size: 20px;text-align: center">-多源灾情数据管理服务系统-</p>
            <el-table :data="list">
                <el-table-column label="编码" prop="id"/>
                <el-table-column label="上报时间" prop="date"/>
                <el-table-column label="地点" prop="location"/>
                <el-table-column label="类型" prop="grade"/>
                <el-table-column label="破坏等级" prop="grade"/>
                <el-table-column label="典型照片" prop="picture"/>
                <el-table-column label="灾情描述" prop="note"/>
                <el-table-column label="上报单位" prop="reportingUnit"/>
            </el-table>
        </div>
    </div>

</template>

<script>
    export default {
        name: "主页",
        data() {
            return {
                list: [],
            }
        },
        created() {
            this.getData();
        },
        methods: {
            //获取数据
            getData() {
                const _this = this;
                axios.get('http://localhost:8181/getData').then(function (resp) {
                    _this.list = resp.data;
                });
            }
        }
    }
</script>

<style scoped>
    .box {
        background-color: rgba(255, 255, 255, 0.8);
        width: 80%;
        height: 100%;
        border-radius: 10px;
        margin: 40px auto;
        box-shadow: 0 0 10px #7b7b7b;
    }
</style>