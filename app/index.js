'use strict';
// const gitConfig = require('git-config');
const gitconfig = require('gitconfiglocal');
const Generator = require('yeoman-generator');

module.exports = class extends Generator{
  constructor(args, opts){
    super(args, opts);
    this.argument('name', {
       type: String,
       required: true,
       description:'nome of activity'
    });
  }
  initializing(){
    this.log('初始化生成器');
    var done = this.async();
    gitconfig('./',function(err, config){
      console.log(config)
      done(err);
    })
  }
  test(){
    this.log('功能未实现，暂时不能用')
  }
};
