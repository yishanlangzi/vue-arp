import {
  resolve
} from 'lib/util';
export var base = resolve(__dirname);

export {
  layoutState as parentState
}
  from '../layout';


export var stateName = 'protal';

export var protaTemplateUrl = base + '/protal.html';
export var editorTemplateUrl = base + '/editor.html';
export var addTemplateUrl = base + '/add.html';
export var addColumnTemplateUrl = base + '/addColumn.html';

export var saveStaffConfigUri = '/api/portal/saveOrUpdateUser';
export var saveRoleConfigUri = '/api/protal/saveOrUpdateRole';
export var getConfigUri = '/api/portal/getCurrentUserPortalConfig';



// 取会议室信息
export var meetingroomUri='/api/meetingInfo/queryMyApplyAndJion';
//取新闻信息
// export var getNewsUri = '/api/v1/category/queryContentsByListByType/1';

//取通知信息
// export var getNoticeUri = '/api/v1/category/queryContentsByListByType/3';

// 取日程表信息
export var getCalendarUri = 'coa/api/calendar/queryMyCalendarByDate';
export var getTodayCalendarUri = 'coa/api/calendar/queryMyCalendarToByToday';
//取栏目信息
export var getColumnUri = 'cms/api/category/queryAll';

// export var getChilColumnUri = 'cms/api/category/queryAll/{id}';

//取内容发布的信息
export var getContentsUri = 'cms/api/category/queryContentsByList';

//获取待办
export var getTodos= "todos/todos";
export var getBoxs= "todos/boxs";
export var getOfficelTodos = "todos/arp2.4/official";
// export var getOtherTodos = "todos/arp2.4";

export var allTypes = {
  leftType: [{
    name: '快捷方式',
    value: 'shortcut'
  }, {
    name: '待办工作',
    value: 'waitHandling'
  }, {
    name: '集成服务',
    value: 'accessService'
  }, {
    name: '自定义',
    value: 'diy'
  }],
  centerType: [{
    name: '自定义',
    value: 'diy'
  },{
    name: '页签',
    value: 'tabs'
  }],
  rightType: [{
    name: '自定义',
    value: 'diy'
  }]
};
