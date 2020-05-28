<template>
    <div>
        <el-container>
            <el-header>灾情管理平台
                <div>
                    <el-link :underline="false" @click="$router.push('/upload')">数据上传</el-link>
                    <el-link :underline="false" @click="$router.push('/information')">数据展示与修改</el-link>
                </div>
            </el-header>
            <div class="title">
                <span>灾情管理平台</span>
            </div>
            <el-row>
                <el-col :span="12">
                    <div style="text-align: center">
                        <div class="content">
                            <div style="padding-top: 20px">
                                <p style="font-size: 20px">本地上传json数据</p>
                                <span class="demonstration">请选择数据来源</span>
                                <el-cascader v-model="MSValue1" :options="MSOptions1"
                                             :props="{ expandTrigger: 'hover' }"
                                             style="margin: 20px"></el-cascader>
                                <div>
                                    <el-link :href="url1" target="_blank">获取测试用json</el-link>
                                    <el-link :href="url2" target="_blank">获取操作说明</el-link>
                                </div>
                            </div>
                            <el-upload
                                    class="upload-demo"
                                    action=""
                                    :auto-upload="false"
                                    :on-change="handleChange"
                                    :on-exceed="handleExceed"
                                    :before-remove="beforeRemove"
                                    :before-upload="beforeUpload"
                                    multiple
                                    :limit="1"
                                    style="margin-top: 50px">
                                <div slot="tip" style="color: white">只能上传json文件（只含单条信息），且不超过1MB</div>
                                <el-button slot="trigger" size="small" type="warning" style="margin: 10px" plain>
                                    选择json文件
                                </el-button>
                                <el-button size="small" type="success" @click="upload" style="margin: 10px" plain>确认上传
                                </el-button>
                            </el-upload>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div style="text-align: center">
                        <div class="content">
                            <div style="padding-top: 20px">
                                <p style="font-size: 20px">向目标url发送数据库数据</p>
                                <span class="demonstration">请选择灾情信息代码</span>
                                <el-cascader v-model="MSValue2" :options="MSOptions2"
                                             :props="{ expandTrigger: 'hover' }"
                                             style="margin: 20px"></el-cascader>
                                <div>
                                    <span class="demonstration">请输入URL</span>
                                    <el-input v-model="inputUrl" placeholder="请输入URL"
                                              style="margin: 20px;width: 200px"></el-input>
                                </div>
                            </div>
                            <el-button size="small" type="success" @click="postRequest" style="margin: 10px" plain>确认发送
                            </el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-container>
    </div>

</template>

<script>
    export default {
        name: "Upload",
        data() {
            return {
                inputUrl: '',
                deathStatisticsList: [],
                missingStatisticsList: [],
                civilStructureList: [],
                masonryStructureList: [],
                trafficDisasterList: [],
                commDisasterList: [],
                collapseRecordList: [],
                landslideRecordList: [],
                disasterInfoList: [],
                disasterPredictionList: [],

                form: {
                    fileUrl: '',
                    formData: new FormData()
                },
                url1: 'http://49.235.13.152:8181/json.json',
                url2: 'http://49.235.13.152:8181/manual.json',

                MSValue1: [],
                MSValue2: [],
                MSOptions1: [{
                    value: '1',
                    label: '业务报送数据',
                    children: [{
                        value: '01',
                        label: '公网'
                    }, {
                        value: '02',
                        label: '北斗短报文'
                    }, {
                        value: '03',
                        label: '卫星通讯'
                    }, {
                        value: '04',
                        label: '卫星定位'
                    }, {
                        value: '05',
                        label: '专用救灾（例如车载通信）'
                    }, {
                        value: '06',
                        label: '其他'
                    }]
                }, {
                    value: '2',
                    label: '泛在感知数据',
                    children: [{
                        value: '01',
                        label: '互联网'
                    }, {
                        value: '02',
                        label: '通信网'
                    }, {
                        value: '03',
                        label: '电网'
                    }, {
                        value: '04',
                        label: '其他'
                    }]
                }, {
                    value: '3',
                    label: '舆情感知数据',
                    children: [{
                        value: '01',
                        label: '微博'
                    }, {
                        value: '02',
                        label: '博客'
                    }, {
                        value: '03',
                        label: '论坛'
                    }, {
                        value: '04',
                        label: '微信'
                    }, {
                        value: '05',
                        label: '其他'
                    }]
                }, {
                    value: '4',
                    label: '承载体基础数据',
                    children: [{
                        value: '01',
                        label: '川滨'
                    }, {
                        value: '02',
                        label: '其他'
                    }]
                }, {
                    value: '5',
                    label: '其他',
                    children: [{
                        value: '01',
                        label: '1-其他'
                    }, {
                        value: '02',
                        label: '2-其他'
                    }, {
                        value: '03',
                        label: '3-其他'
                    },]
                }],
                MSOptions2: [{
                    value: '111',
                    label: '人员伤亡及失踪-死亡',
                }, {
                    value: '113',
                    label: '人员伤亡及失踪-失踪',
                }, {
                    value: '221',
                    label: '房屋破坏-土木',
                }, {
                    value: '223',
                    label: '房屋破坏-砖混',
                }, {
                    value: '331',
                    label: '生命线工程灾情-交通',
                }, {
                    value: '336',
                    label: '生命线工程灾情-通信'
                }, {
                    value: '441',
                    label: '次生灾害-崩塌'
                }, {
                    value: '442',
                    label: '次生灾害-滑坡'
                }, {
                    value: '551',
                    label: '震情-基本震情'
                }, {
                    value: '552',
                    label: '震情-灾情预测'
                }]
            }
        },
        async created() {
            await this.getData();
        },
        methods: {
            beforeUpload(file) {
                const isJson = file.name.substr(file.name.lastIndexOf(".") + 1) === 'json';
                const isLt2M = file.raw.size / 1024 / 1024 < 1;
                if (!isJson) {
                    this.$message.error('上传图片只能是 json 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过 1MB!');
                }
                return isJson && isLt2M;
            },
            handleChange(file) {
                if (this.beforeUpload(file)) {
                    this.form.fileUrl = URL.createObjectURL(file.raw);
                    this.form.formData.append('file', file.raw);
                }
            },
            handleExceed(file) {
                this.$message.warning(`只允许同时上传一个文件`);
            },
            beforeRemove(file) {//删除文件，故清空fileUrl
                this.form.fileUrl = '';
            },
            async upload() {
                if (this.form.fileUrl === '') {
                    this.$message.error('请选择json文件');
                    return;
                }
                if (this.MSValue1.join() === '') {
                    this.$message.error('请选择MSCode类型');
                    return;
                }
                this.form.formData.append('MSCode', this.MSValue1.join().replace(',', ''));
                const {data: result} = await axios.post('http://49.235.13.152:8181/upload', this.form.formData);
                this.$message.success(result);
                this.$router.push('/information');
            },
            ///////////////////////////////////////
            //获取数据
            async getData() {
                const _this = this;
                await axios.get('http://49.235.13.152:8181/information/getAll/deathStatistics').then(function (resp) {
                    _this.deathStatisticsList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getAll/missingStatistics').then(function (resp) {
                    _this.missingStatisticsList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getAll/civilStructure').then(function (resp) {
                    _this.civilStructureList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getAll/masonryStructure').then(function (resp) {
                    _this.masonryStructureList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getAll/trafficDisaster').then(function (resp) {
                    _this.trafficDisasterList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getAll/commDisaster').then(function (resp) {
                    _this.commDisasterList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getAll/collapseRecord').then(function (resp) {
                    _this.collapseRecordList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getAll/landslideRecord').then(function (resp) {
                    _this.landslideRecordList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getAll/disasterInfo').then(function (resp) {
                    _this.disasterInfoList = resp.data;
                });
                await axios.get('http://49.235.13.152:8181/information/getAll/disasterPrediction').then(function (resp) {
                    _this.disasterPredictionList = resp.data;
                });
            },
            async postRequest() {
                if (this.MSValue2.join() === '') {
                    this.$message.error('请选择要发送的灾情信息代码');
                    return;
                }
                if (this.inputUrl === '') {
                    this.$message.error('请输入url');
                    return;
                }
                switch (this.MSValue2) {
                    case "111"://死亡DeathStatistics
                        await axios.post(this.inputUrl + '/111/DisasterPrediction', this.deathStatisticsList);
                        break;
                    case "113"://失踪MissingStatistics
                        await axios.post(this.inputUrl + '/113/DisasterPrediction', this.missingStatisticsList);
                        break;
                    case "221"://土木CivilStructure
                        await axios.post(this.inputUrl + '/221/DisasterPrediction', this.civilStructureList);
                        break;
                    case "223"://砖混MasonryStructure
                        await axios.post(this.inputUrl + '/223/DisasterPrediction', this.masonryStructureList);
                        break;
                    case "331"://交通TrafficDisaster
                        await axios.post(this.inputUrl + '/331/DisasterPrediction', this.trafficDisasterList);
                        break;
                    case "336"://通信CommDisaster
                        await axios.post(this.inputUrl + '/336/DisasterPrediction', this.commDisasterList);
                        break;
                    case "441"://崩塌CollapseRecord
                        await axios.post(this.inputUrl + '/441/DisasterPrediction', this.collapseRecordList);
                        break;
                    case "442"://滑坡LandslideRecord
                        await axios.post(this.inputUrl + '/442/DisasterPrediction', this.landslideRecordList);
                        break;
                    case "551"://基本震情DisasterInfo
                        await axios.post(this.inputUrl + '/551/DisasterPrediction', this.disasterInfoList);
                        break;
                    case "552"://灾情预测DisasterPrediction
                        await axios.post(this.inputUrl + '/552/DisasterPrediction', this.disasterPredictionList);
                        break;
                }
                this.$message.success('数据已经发送至该URL');
                this.$router.push('/information');
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

    .title {
        text-align: center;
        color: white;
        font-family: "微软雅黑";
        font-size: 50px;
        margin-top: 100px;
    }

    .content {
        width: 50%;
        height: 400px;
        margin: 50px auto;
        background-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 10px #373d41;
    }
</style>