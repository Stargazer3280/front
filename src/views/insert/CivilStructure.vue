<template>
    <el-container>
        <el-header>灾情管理平台
            <div>
                <el-link :underline="false" @click="$router.push('/upload')">数据上传</el-link>
                <el-link :underline="false" @click="$router.push('/information')">数据展示与修改</el-link>
            </div>
        </el-header>
        <div class="content">
            <span style="font-size: 20px">-土木结构房屋破坏-</span>
            <el-form ref="formRef" :model="form" :rules="formRules"
                     label-width="100px" style="margin: 50px 50px 0 0" status-icon>
                <el-form-item prop="id" label="编码">
                    <el-input v-model="form.id"></el-input>
                </el-form-item>
                <el-form-item prop="date" label="上报时间">
                    <el-input v-model="form.date"></el-input>
                </el-form-item>
                <el-form-item prop="location" label="地点">
                    <el-input v-model="form.location"></el-input>
                </el-form-item>
                <el-form-item prop="location" label="地点">
                    <el-input v-model="form.location"></el-input>
                </el-form-item>
                <el-form-item prop="basicallyIntactSquare" label="基本完好面积">
                    <el-input v-model="form.basicallyIntactSquare"></el-input>
                </el-form-item>
                <el-form-item prop="damagedSquare" label="破坏面积">
                    <el-input v-model="form.damagedSquare"></el-input>
                </el-form-item>
                <el-form-item prop="destroyedSquare" label="毁坏面积">
                    <el-input v-model="form.destroyedSquare"></el-input>
                </el-form-item>
                <!--                <el-form-item prop="picture" label="典型照片">-->
                <!--                    <el-input v-model="form.picture"></el-input>-->
                <!--                </el-form-item>-->
                <el-form-item prop="note" label="破坏情况描述">
                    <el-input v-model="form.note"></el-input>
                </el-form-item>
                <el-form-item prop="reportingUnit" label="上报单位">
                    <el-input v-model="form.reportingUnit"></el-input>
                </el-form-item>
                <el-form-item style="display: flex;justify-content: center">
                    <el-button type="primary" @click="insert">添加</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-container>
</template>

<script>
    export default {
        name: "CivilStructure",
        data() {
            return {
                //表单数据对象
                form: {},
                //表单的验证规则对象

                formRules: {
                    id: [
                        {required: true, message: '请输入编码', trigger: 'blur'},
                        {min: 19, max: 19, message: '必须为19个字符', trigger: 'blur'}
                    ],
                    date: [
                        {required: true, message: '请输入上报时间', trigger: 'blur'},
                        {max: 12, message: '长度不超过12个字符', trigger: 'blur'}
                    ],
                    location: [
                        {required: true, message: '请输入地点', trigger: 'blur'},
                        {max: 100, message: '长度不超过100个字符', trigger: 'blur'}
                    ],
                    basicallyIntactSquare: [
                        {required: true, message: '基本完好面积', trigger: 'blur'},
                        {max: 6, message: '长度不超过6个字符', trigger: 'blur'}
                    ],
                    damagedSquare: [
                        {required: true, message: '请输入破坏面积', trigger: 'blur'},
                        {max: 6, message: '长度不超过6个字符', trigger: 'blur'}
                    ],
                    destroyedSquare: [
                        {required: true, message: '请输入毁坏面积', trigger: 'blur'},
                        {max: 6, message: '长度不超过6个字符', trigger: 'blur'}
                    ],
                    note: [
                        {required: true, message: '请输入破坏情况描述', trigger: 'blur'},
                        {max: 200, message: '长度不超过200个字符', trigger: 'blur'}
                    ],
                    reportingUnit: [
                        {required: true, message: '请输入上报单位', trigger: 'blur'},
                        {max: 45, message: '长度不超过45个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            insert() {
                this.$refs.formRef.validate(async valid => {
                    //valid为假则验证不通过
                    if (!valid) return;
                    //valid为真则发送数据并登录
                    const {data: result} = await axios.post('http://49.235.13.152:8181/information/insert/civilStructure', this.form);
                    this.$message.success(result);
                    this.$router.push('/information');
                });
            },
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
        text-align: center;
        width: 50%;
        height: 100%;
        margin: 50px auto;
        background-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 0 10px #373d41;
    }
</style>