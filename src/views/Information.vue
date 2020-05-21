<template>
    <el-container>
        <el-header>灾情管理平台
            <div>
                <el-link :underline="false" @click="$router.push('/upload')">数据上传</el-link>
                <el-link :underline="false" @click="$router.push('/information')">数据展示与修改</el-link>
            </div>
        </el-header>
        <div class="content">
            <el-tabs>
                <el-tab-pane label="人员死亡">
                    <div style="display: flex;flex-direction: row-reverse">
                        <el-button type="success" plain @click="$router.push('/insert/deathStatistics')"
                                   style="margin-right: 20px">添加数据行
                        </el-button>
                    </div>
                    <el-card v-for="o in deathStatisticsList" :key="o"
                             style="background-color: rgba(255, 255, 255, 0.2);margin: 20px">
                        <el-row>
                            <el-col :span="8">
                                <img width="200px" height="200px"
                                     src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590072819222&di=7f57509f03714e498ae60c9abb6a652b&imgtype=0&src=http%3A%2F%2Fwww.people.com.cn%2Fmediafile%2Fpic%2F20150129%2F42%2F18324605294148067862.jpg"/>
                            </el-col>
                            <el-col :span="8">
                                <p>编码：{{o.id}}</p>
                                <p>死亡地点：{{o.location}}</p>
                                <p>上报时间：{{o.date}}</p>
                            </el-col>
                            <el-col :span="8">
                                <p>死亡人数：{{o.number}}</p>
                                <p>上报单位：{{o.reportingUnit}}</p>
                            </el-col>
                        </el-row>
                        <el-button style="margin-left: 20px" type="primary" plain
                                   @click="updateL('deathStatistics',o.no)">修改
                        </el-button>
                        <el-button type="danger" plain @click="deleteL('deathStatistics',o.no)">删除</el-button>
                    </el-card>
                </el-tab-pane>
                <el-tab-pane label="土木结构房屋破坏">
                    <div style="display: flex;flex-direction: row-reverse">
                        <el-button type="success" plain @click="$router.push('/insert/civilStructure')"
                                   style="margin-right: 20px">添加数据行
                        </el-button>
                    </div>
                    <el-card v-for="o in civilStructureList" :key="o"
                             style="background-color: rgba(255, 255, 255, 0.2);margin: 20px">
                        <el-row>
                            <el-col :span="8">
                                <img width="200px" height="200px"
                                     src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590072819222&di=7f57509f03714e498ae60c9abb6a652b&imgtype=0&src=http%3A%2F%2Fwww.people.com.cn%2Fmediafile%2Fpic%2F20150129%2F42%2F18324605294148067862.jpg"/>
                            </el-col>
                            <el-col :span="8">
                                <p>编码：{{o.id}}</p>
                                <p>上报时间：{{o.date}}</p>
                                <p>地点：{{o.location}}</p>
                                <p>基本完好面积：{{o.basicallyIntactSquare}}</p>
                            </el-col>
                            <el-col :span="8">
                                <p>破坏面积：{{o.damagedSquare}}</p>
                                <p>毁坏面积：{{o.destroyedSquare}}</p>
                                <p>破坏情况描述：{{o.note}}</p>
                                <p>上报单位：{{o.reportingUnit}}</p>
                            </el-col>
                        </el-row>
                        <el-button style="margin-left: 20px" type="primary" plain
                                   @click="updateL('civilStructure',o.no)">修改
                        </el-button>
                        <el-button type="danger" plain @click="deleteL('civilStructure',o.no)">删除</el-button>
                    </el-card>
                </el-tab-pane>
                <el-tab-pane label="通信系统灾情">
                    <div style="display: flex;flex-direction: row-reverse">
                        <el-button type="success" plain @click="$router.push('/insert/commDisaster')"
                                   style="margin-right: 20px">添加数据行
                        </el-button>
                    </div>
                    <el-card v-for="o in commDisasterList" :key="o"
                             style="background-color: rgba(255, 255, 255, 0.2);margin: 20px">
                        <el-row>
                            <el-col :span="8">
                                <img width="200px" height="200px"
                                     src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590072819222&di=7f57509f03714e498ae60c9abb6a652b&imgtype=0&src=http%3A%2F%2Fwww.people.com.cn%2Fmediafile%2Fpic%2F20150129%2F42%2F18324605294148067862.jpg"/>
                            </el-col>
                            <el-col :span="8">
                                <p>编码：{{o.id}}</p>
                                <p>上报时间：{{o.date}}</p>
                                <p>地点：{{o.location}}</p>
                                <p>类型：{{o.type}}</p>
                            </el-col>
                            <el-col :span="8">
                                <p>破坏等级：{{o.grade}}</p>
                                <p>灾情描述：{{o.note}}</p>
                                <p>上报单位：{{o.reportingUnit}}</p>
                            </el-col>
                        </el-row>
                        <el-button style="margin-left: 20px" type="primary" plain @click="updateL('commDisaster',o.no)">
                            修改
                        </el-button>
                        <el-button type="danger" plain @click="deleteL('commDisaster',o.no)">删除</el-button>
                    </el-card>
                </el-tab-pane>
                <el-tab-pane label="崩塌">
                    <div style="display: flex;flex-direction: row-reverse">
                        <el-button type="success" plain @click="$router.push('/insert/collapseRecord')"
                                   style="margin-right: 20px">添加数据行
                        </el-button>
                    </div>
                    <el-card v-for="o in collapseRecordList" :key="o"
                             style="background-color: rgba(255, 255, 255, 0.2);margin: 20px">
                        <el-row>
                            <el-col :span="8">
                                <img width="200px" height="200px"
                                     src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590072819222&di=7f57509f03714e498ae60c9abb6a652b&imgtype=0&src=http%3A%2F%2Fwww.people.com.cn%2Fmediafile%2Fpic%2F20150129%2F42%2F18324605294148067862.jpg"/>
                            </el-col>
                            <el-col :span="8">
                                <p>编码：{{o.id}}</p>
                                <p>地点：{{o.location}}</p>
                                <p>上报日期：{{o.date}}</p>
                                <p>类型：{{o.type}}</p>
                            </el-col>
                            <el-col :span="8">
                                <p>灾害程度：{{o.status}}</p>
                                <p>灾情描述：{{o.note}}</p>
                                <p>上报单位：{{o.reportingUnit}}</p>
                            </el-col>
                        </el-row>
                        <el-button style="margin-left: 20px" type="primary" plain
                                   @click="updateL('collapseRecord',o.no)">修改
                        </el-button>
                        <el-button type="danger" plain @click="deleteL('collapseRecord',o.no)">删除</el-button>
                    </el-card>
                </el-tab-pane>
                <el-tab-pane label="灾情预测">
                    <div style="display: flex;flex-direction: row-reverse">
                        <el-button type="success" plain @click="$router.push('/insert/disasterPrediction')"
                                   style="margin-right: 20px">添加数据行
                        </el-button>
                    </div>
                    <el-card v-for="o in disasterPredictionList" :key="o"
                             style="background-color: rgba(255, 255, 255, 0.2);margin: 20px">
                        <el-row>
                            <el-col :span="8">
                                <img width="200px" height="200px"
                                     src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590072819222&di=7f57509f03714e498ae60c9abb6a652b&imgtype=0&src=http%3A%2F%2Fwww.people.com.cn%2Fmediafile%2Fpic%2F20150129%2F42%2F18324605294148067862.jpg"/>
                            </el-col>
                            <el-col :span="8">
                                <p>编码：{{o.id}}</p>
                                <p>上报时间：{{o.date}}</p>
                                <p>地点：{{o.location}}</p>
                                <p>经度：{{o.longitude}}</p>
                                <p>纬度：{{o.latitude}}</p>
                                <p>深度：{{o.depth}}</p>
                            </el-col>
                            <el-col :span="8">
                                <p>震级：{{o.magnitude}}</p>
                                <p>烈度：{{o.intensity}}</p>
                                <p>类型：{{o.type}}</p>
                                <p>破坏情况描述：{{o.note}}</p>
                                <p>上报单位：{{o.reportingUnit}}</p>
                            </el-col>
                        </el-row>
                        <el-button style="margin-left: 20px" type="primary" plain
                                   @click="updateL('disasterPrediction',o.no)">修改
                        </el-button>
                        <el-button type="danger" plain @click="deleteL('disasterPrediction',o.no)">删除</el-button>
                    </el-card>
                </el-tab-pane>
            </el-tabs>
        </div>
    </el-container>

</template>

<script>
    export default {
        inject: ['reload'],
        name: "Information",
        data() {
            return {
                deathStatisticsList: [],
                civilStructureList: [],
                commDisasterList: [],
                collapseRecordList: [],
                disasterPredictionList: [],

            }
        },
        created() {
            this.getData();
        },
        methods: {
            //获取数据
            async getData() {
                const _this = this;
                await axios.get('http://49.235.13.152:8181/information/getAll/deathStatistics').then(function (resp) {
                    _this.deathStatisticsList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getAll/civilStructure').then(function (resp) {
                    _this.civilStructureList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getAll/commDisaster').then(function (resp) {
                    _this.commDisasterList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getAll/collapseRecord').then(function (resp) {
                    _this.collapseRecordList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getAll/disasterPrediction').then(function (resp) {
                    _this.disasterPredictionList = resp.data;
                });
            },
            async updateL(database, no) {
                switch (database) {
                    case 'deathStatistics':
                        this.$router.push({path: '/update/deathStatistics', query: {no: no}});
                        break;
                    case 'civilStructure':
                        this.$router.push({path: '/update/civilStructure', query: {no: no}});
                        break;
                    case 'commDisaster':
                        this.$router.push({path: '/update/commDisaster', query: {no: no}});
                        break;
                    case 'collapseRecord':
                        this.$router.push({path: '/update/collapseRecord', query: {no: no}});
                        break;
                    case 'disasterPrediction':
                        this.$router.push({path: '/update/disasterPrediction', query: {no: no}});
                        break;
                }
            },
            async deleteL(database, no) {
                let _resp = '';
                await axios.get('http://49.235.13.152:8181/information/delete', {
                    params: {
                        database: database,
                        no: no
                    }
                }).then(function (resp) {
                    _resp = resp.data;
                });
                this.$message.success(_resp);
                this.reload();
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