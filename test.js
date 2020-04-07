let 人名 = "jack normany"
let 事情 = "things"
let 动词 = "do"
let 主语 = [
   "你",
   "我",
   "他",
   "她",
   "它",
   人名,
]
let 谓语 =[
    "的",
    "是",
    "做",
    "去",
    "说",
    "让",
    "定义",
    "编写",
    "使",
    "讨厌",
    "学习",
]
let 宾语 = [
    "西瓜",
    "东西",
    "滑板",
    "工具",
    "头文件",
    "C++编程语言",
    "编译指令",
    事情,
]
function 随机读取(列表){
    let 坐标 = Math.floor( Math.random() * 列表.length );
    return 列表[坐标];
}
function 随便取一个数(最小值 = 0,最大值 = 100){
    let 数字 = Math.random()*( 最大值 - 最小值 ) + 最小值;
    return 数字;
}
function 生成句子(){
    let 句子 = []
    句子 = 随机读取(主语)+随机读取(谓语)+随机读取(宾语)
    return 句子   
}
for (let i = 0; i < 10; i++) {
   console.log(生成句子())
}