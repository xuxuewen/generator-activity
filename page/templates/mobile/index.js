// 页面样式重置
import '../../common/styles/reset.scss';
// 移动端适配代码
import '../../common/scripts/rem.js';
// 工具函数 api:
import Utils from '../../common/scripts/utils.js';
// 当前页面样式表
import './index.scss';
/**
 * 页面业务代码开始
 * @author ltn-front-team
 */
;(function($){
  Utils.run($,function($){
    // 页面业务代码开始
    console.log('hello')
  })
})(window.jQuery);
