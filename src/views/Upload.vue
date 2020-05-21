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
            <div style="text-align: center">
                <div class="content">
                    <div style="padding-top: 20px">
                        <span class="demonstration">请选择数据来源</span>
                        <el-cascader v-model="MSValue" :options="MSOptions" :props="{ expandTrigger: 'hover' }"
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
                        <el-button slot="trigger" size="small" type="warning" style="margin: 10px" plain>选择json文件
                        </el-button>
                        <el-button size="small" type="success" @click="upload" style="margin: 10px" plain>确认上传
                        </el-button>
                    </el-upload>
                </div>
            </div>
        </el-container>
    </div>

</template>

<script>
    export default {
        name: "Upload",
        data() {
            return {
                form: {
                    fileUrl: '',
                    formData: new FormData()
                },
                url1: 'http://49.235.13.152:8181/json.json',
                url2: 'http://49.235.13.152:8181/manual.json',

                MSValue: [],
                MSOptions: [{
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
                }]
            }
        },
        created() {
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
                if (this.MSValue.join() === '') {
                    this.$message.error('请选择MSCode类型');
                    return;
                }
                this.form.formData.append('MSCode', this.MSValue.join().replace(',', ''));
                const {data: result} = await axios.post('http://49.235.13.152:8181/upload', this.form.formData);
                this.$message.success(result);
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
        width: 30%;
        height: 300px;
        margin: 50px auto;
        background-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 10px #373d41;
    }
</style>