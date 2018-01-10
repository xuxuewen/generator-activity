'use strict';
const Generator = require('yeoman-generator');
module.exports = class extends Generator{
  constructor(args, opts){
    super(args, opts);
    this.argument('name', {
       type: String,
       required: true,
       description:'页面名称'
    });
  }

  prompting(){
    return this.prompt([
      // question 1: 选择页面的类型，web/mobile
      {
        type:'list',
        name:'type',
        default:'mobile',
        message:'请选择需要创建的页面类型',
        store:true,
        choices:[
          {
            name:'mobile',
            value:'mobile'
          },
          {
            name:'web',
            value:'web'
          }
        ]
      }
    ])
    .then(answers=>{
      this.log(`开始构建 ${answers.type} 页面`);
    })
  }

  writing(){
    let promptValues = this.config.get('promptValues');
    if(promptValues.type === 'mobile'){
      this.fs.copy(
       this.templatePath('mobile/**/*.*'),
       this.destinationPath(`${this.options.name}/`)
     );
   }else{
     this.fs.copy(
      this.templatePath('web/**/*.*'),
      this.destinationPath(`${this.options.name}/`)
    );
   }
  }
  end(){
    this.log('页面构建完成')
  }
};
