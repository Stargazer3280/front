<template>
    <el-container>
        <el-header>灾情管理平台
            <div>
                <el-link :underline="false" @click="$router.push('/upload')">数据上传</el-link>
                <el-link :underline="false" @click="$router.push('/information')">数据展示</el-link>
            </div>
        </el-header>
        <div class="content">
            <el-tabs>
                <el-tab-pane label="人员伤亡及失踪-死亡">
                    <el-card v-for="o in deathStatisticsList" :key="o"
                             style="background-color: rgba(255, 255, 255, 0.2);margin: 20px">
                        编码：{{o.id}}
                        死亡地点：{{o.location}}
                        上报时间：{{o.date}}
                        死亡人数：{{o.number}}
                        上报单位：{{o.reportingUnit}}
                    </el-card>
                </el-tab-pane>
                <el-tab-pane label="房屋破坏-土木">
                    <el-card v-for="o in civilStructureList" :key="o"
                             style="background-color: rgba(255, 255, 255, 0.2);margin: 20px">
                        编码：{{o.id}}
                        上报时间：{{o.date}}
                        地点：{{o.location}}
                        基本完好面积：{{o.basicallyIntactSquare}}
                        破坏面积：{{o.damagedSquare}}
                        毁坏面积：{{destroyedSquare}}
                        破坏情况描述：{{o.note}}
                        上报单位：{{o.reportingUnit}}
                    </el-card>
                </el-tab-pane>
                <el-tab-pane label="生命线工程-灾情">
                    <el-card v-for="o in commDisasterList" :key="o"
                             style="background-color: rgba(255, 255, 255, 0.2);margin: 20px">
                        编码：{{o.id}}
                        上报时间：{{o.date}}
                        地点：{{o.location}}
                        类型：{{o.type}}
                        破坏等级：{{o.grade}}
                        典型照片：{{o.picture}}
                        灾情描述：{{o.note}}
                        上报单位：{{o.reportingUnit}}
                    </el-card>
                </el-tab-pane>

                <el-tab-pane label="次生灾害-崩塌">
                    <el-card v-for="o in collapseRecordList" :key="o"
                             style="background-color: rgba(255, 255, 255, 0.2);margin: 20px">
                        编码：{{o.id}}
                        地名：{{o.location}}
                        上报日期：{{o.date}}
                        类型：{{o.type}}
                        灾害程度：{{o.status}}
                        灾情描述：{{o.note}}
                        典型照片：{{o.picture}}
                        上报单位：{{o.reportingUnit}}
                    </el-card>
                </el-tab-pane>
                <el-tab-pane label="震情-灾情预测">
                    <el-card v-for="o in disasterPredictionList" :key="o"
                             style="background-color: rgba(255, 255, 255, 0.2);margin: 20px">
                        编码：{{o.id}}
                        上报时间：{{o.date}}
                        地点：{{o.location}}
                        经度：{{o.longitude}}
                        纬度：{{o.latitude}}
                        深度：{{o.depth}}
                        震级：{{o.magnitude}}
                        烈度：{{o.intensity}}
                        类型：{{o.type}}
                        典型照片：{{o.picture}}
                        破坏情况描述：{{o.note}}
                        上报单位：{{o.reportingUnit}}
                    </el-card>
                </el-tab-pane>
            </el-tabs>

        </div>
    </el-container>

</template>

<script>
    export default {
        name: "Information",
        data() {
            return {
                deathStatisticsList: [],
                civilStructureList: [],
                commDisasterList: [],
                collapseRecordList: [],
                disasterPredictionList: []
            }
        },
        created() {
            this.getData();
        },
        methods: {
            //获取数据
            async getData() {
                const _this = this;
                await axios.get('http://49.235.13.152:8181/information/getDeathStatistics').then(function (resp) {
                    _this.deathStatisticsList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getCivilStructure').then(function (resp) {
                    _this.civilStructureList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getCommDisaster').then(function (resp) {
                    _this.commDisasterList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getCollapseRecord').then(function (resp) {
                    _this.collapseRecordList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getDisasterPrediction').then(function (resp) {
                    _this.disasterPredictionList = resp.data;
                });
            }
        }
    }
</script>

<style scoped>
    .el-header {
        background-color: #373d41;
        box-shadow: 0 0 10px #7b7b7b;
        font-family: "微软雅黑";
        font-size: 30px;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .el-link {
        margin-left: 20px;
        font-size: 20px;
        color: white;
    }

    .el-aside {
        width: 200px;
        background-color: #373d41;
    }

    .content {
        width: 60%;
        height: 100%;
        margin: 50px auto;
        background-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 10px #373d41;
    }


</style>