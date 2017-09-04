import {
  CrudDeskController
} from 'lib/ctrl';

import {
  EditorController
} from './editorCtrl';

import {
  AddController
} from './addCtrl';

import {
  AddColumnController
} from './addColumnCtrl';

import {
  stashAdd
} from 'lib/sdb';

import {moreContentState} from '../../coa/conPub/moreContent/index';

import {
  editorTemplateUrl,
  addTemplateUrl,
  saveStaffConfigUri,
  saveRoleConfigUri,
  getConfigUri,
  allTypes,
  getNewsUri,
  getNoticeUri,
  meetingroomUri,
  getCalendarUri,
  getColumnUri,
  getContentsUri,
  addColumnTemplateUrl,
  getTodos,
  getBoxs,
  getOfficelTodos
} from './def';

export class BizController extends CrudDeskController {
  static getInject() {
    return ['$http', '$scope', 'config', '$q', 'authApi', '$window','$timeout','$filter','$controller'];
  }

  init() {
    var self = this;
    Object.assign(self, {
      title: 'protalPage',
      defaultConfig: require('./default.json'),
      userProtaConfig: require('./default.json'),
      userInfo: self.authApi.userInfo,
      allTypes,
      showArray:[],
      tabs:[],
      showNum: 4

    });

    self.busy=false;
    self.initConfig();
    self.meetingroomNews = [];
    self.meetingroom();
    self.boxNameMap = null;
    self.initBoxName();
    self.getTodos();
    self.get24Todos();
    // self.getOtherTodos();
    // 日程表
    self.now = new Date();                    //当前日期
    self.changeStyle(self.now);
    self.nowDayOfWeek = self.now.getDay();         //今天本周的第几天
    self.nowDay = self.now.getDate();              //当前日
    self.nowMonth = self.now.getMonth();           //当前月
    self.nowYear = self.now.getFullYear();             //当前年
    self.weekArry = [];
    self.oneWeek = [];
    self.twoWeek = [];
    self.threeWeek = [];
    self.fourWeek = [];
    self.fiveWeek = [];
    self.sixWeek = [];
    self.sevenWeek = [];
    self.getWeekDate();
    self.getCalendar();
    self.changebg = false;
    self.activeClick = false;
    self.calendars = [];

  }

  initBoxName () {
    var self = this;
    self.boxNameMap = new Map();
    self.boxNameMap.set("coa","日程");
    self.boxNameMap.set("cms","新闻");
    self.boxNameMap.set("vehicle","用车");
    self.boxNameMap.set("meeting","会议");
  }

  initConfig() {
    var self = this;
    self.$http.get(self.config.baseUrl + 'seed' + getConfigUri).then((resp) => {
      self.userProtaConfig = resp.data.portalConfigJson ? resp.data : self.defaultConfig;
      //TODO 目前只有staff类型，先解决一种情况下重复请求保存问题
      if(!self.userProtaConfig.userId){
        self.userProtaConfig.userId = self.userInfo.staff.userId;
      }
      self.$scope.$watch(() => self.userProtaConfig, (newValue, oldValue) => {
        if (newValue !== oldValue) {
          self.save('staff');
        }
      }, true);
      // console.log(resp.data);
      self.getColumn();
    });
  }

  // 确认是否能进行赋值
  checkDate($data, divObj, viewData) {
    return $data.rowId === divObj.id ? $data : viewData;
  }

  // 验证“丢”的数据是不是在同一列
  checkValidity($data, divObj) {
    return $data.rowId === divObj.id ? true : false;
  }


  handleData($data, divObj, idx) {
    let copyObj = angular.copy(divObj);
    let dataIdx = _.findIndex(divObj.data, (d) => d.id === $data.id);
    if (idx > dataIdx) {
      copyObj.data.splice(dataIdx, 1);
      copyObj.data.splice(idx, 0, $data);
    }
    if (dataIdx > idx) {
      copyObj.data.splice(dataIdx, 1);
      copyObj.data.splice(idx + 1, 0, $data);
    }
    return copyObj;
  }

  addData(divObj, type) {
    let objArr = angular.copy(divObj);
    let newObj = {
      id: (divObj.data.length + 1),
      rowId: divObj.id,
      type: type,
      switch: true,
      name: '未命名' + (divObj.data.length + 1),
      value: divObj.data.length + 1
    };
    objArr.data.push(newObj);
    return objArr;
  }

  editorBlock(objArr, idx) {
    var self = this;
    self.openModal({
      animation: true,
      templateUrl: editorTemplateUrl,
      controller: EditorController,
      controllerAs: 'editorCtrl',
      size: 'personal-size',
      resolve: {
        blockData: () => angular.copy(objArr[idx])
      }
    }).result.then((data) => objArr[idx] = data);
  }

  addBlock(column, name) {
    var self = this;
    self.openModal({
      animation: true,
      templateUrl: addTemplateUrl,
      controller: AddController,
      controllerAs: 'editorCtrl',
      size: 'change',
      resolve: {
        column: () => angular.copy(column[name]),
        name: {
          'value': name
        },
      }
    }).result.then((data) => {
      column[name] = data;
    });
  }

  // 同一列“丢”的数据检查、不能拖自己丢向自己。
  checkValidityRow($data, dragData, divObj) {
    var self = this;
    if (((self.checkValidity($data, divObj)) && $data.id !== dragData.id) || (self.checkValidity($data, divObj) && !!dragData)) {
      return true;
    } else {
      return false;
    }
  }

  save(type) {
    var self = this;
    let uri = self.config.baseUrl + 'seed';
    let param = self.userProtaConfig;
    if (angular.equals(type, 'staff')) {
      uri += saveStaffConfigUri;
      // param.userId = self.userInfo.staff.userId;
    }
    if (angular.equals(type, 'role')) {
      uri += saveRoleConfigUri;
      // TODO 如果有多个角色呢？？全部处理还是单处理。
    }
    self.$http.post(uri, param).then(() => self.$window.location.reload());
  }

  meetingroom(){
    var self = this;
    return self.$http.post(self.config.baseUrl + '/meetingroom'+ meetingroomUri).
    then(
      (resp) => {
        if (resp.data) {
          for (var i = 0; i < resp.data.length; i++) {
            if ( resp.data[i].meetingStatus == 2) {
              self.meetingroomNews.push(resp.data[i]);
            }
          }
        }
      }
    );
  }

  //取新闻
  getNews(){
    var self = this;
    return self.$http.get(self.config.baseUrl + 'cms' + getNewsUri, {}).then(
      (resp) => {
        if(resp.data){
          self.news = resp.data;
        }
      },
      (resp) => self.showError(resp.data.message)
    );
  }

  //取通知
  getNotice(){
    var self = this;
    return self.$http.get(self.config.baseUrl + 'cms' + getNoticeUri, {}).then(
      (resp) => {
        if(resp.data){
          self.notice = resp.data;
        }
      },
      (resp) => self.showError(resp.data.message)
    );
  }

  //链接新闻、通知页面
  openNews(item){
    var self = this;
    self.$window.open(self.config.baseUrl + 'oa/desk.html#/desk/contentArticle/' + item.id);
  }


  getToBox(){
    var self = this;
    return self.$http.get(self.config.baseUrl + getBoxs, {}).then(
      (resp) =>{
        if(resp.data){
          self.todoBox = resp.data;
        }else {
          self.todoBox = [];
        }
        return self.todoBox;
      }, (mess) => self.showError(mess)
    );
  }

  //取代办
  getTodos(){
    var self = this;
    self.$http.get(self.config.baseUrl + getBoxs, {}).then(
      (resp) => {
        if(resp.data){
          self.boxs = resp.data;
          var map = {};
          for (var i=0; i<self.boxs.length; i++) {
            let nameTemp = self.boxs[i].name;
            //  alert(nameTemp + ";" + self.boxNameMap);
            self.boxs[i].cname = self.boxNameMap.get(nameTemp);
            map[nameTemp] = self.boxs[i];
          }
          self.boxsMap = map;
          self.$http.get(self.config.baseUrl + getTodos, {}).then(
            (resp) => {
              if(resp.data){
                self.todos = resp.data;
              }
            },
            (resp) => self.showError(resp.data.message)
          );

        }
      },
      (resp) => self.showError(resp.data.message)
    );
  }
// 取2.4 officel代办
  get24Todos(){
    var self = this;
    self.$http.get(self.config.baseUrl + getOfficelTodos, {orgCode:self.authApi.userInfo.staff.corpOrgId,username:self.authApi.userInfo.staff.account}).then(
      (resp) => {
        this.officelTodos = resp.data;
      },
      (resp) => self.showError(resp.data.message)
    );
  }

  // 日程表
  getWeekDate(){
    var self = this;
    self.isNowMonth = true;
    var item = {};
    for (var i = 0; i < 7; i++) {
      self.weekArry.push(new Date(self.nowYear, self.nowMonth, self.nowDay + (i - self.nowDayOfWeek)));
    }
    _.map(self.weekArry, (n) => {
      var mon = n.getMonth();
      if (mon === self.nowMonth) {
        item = {
          isNowMonth: true,
          date: n
        };
      }else {
        item = {
          isNowMonth: false,
          date: n
        };
      }
      self.showArray.push(item);
    });
  }



  before(){
    var self = this;
    self.weekArry = [];
    self.showArray = [];
    self.nowDay = self.nowDay - 7;
    self.nowMonth = new Date().getMonth();
    self.now = new Date(self.nowYear,self.nowMonth,self.nowDay);        //当前日期
    self.nowMonth = self.now.getMonth();
    self.getWeekDate();
    self.oneWeek = [];
    self.twoWeek = [];
    self.threeWeek = [];
    self.fourWeek = [];
    self.fiveWeek = [];
    self.sixWeek = [];
    self.sevenWeek = [];
    self.getCalendar();
    self.changeStyle(self.weekArry[0],0);
    self.changebg = true;
  }

  after(){
    var self = this;
    self.weekArry = [];
    self.showArray = [];
    self.nowDay = self.nowDay + 7;
    self.nowMonth = new Date().getMonth();
    self.now = new Date(self.nowYear,self.nowMonth,self.nowDay);        //当前日期
    self.nowMonth = self.now.getMonth();
    self.getWeekDate();
    self.oneWeek = [];
    self.twoWeek = [];
    self.threeWeek = [];
    self.fourWeek = [];
    self.fiveWeek = [];
    self.sixWeek = [];
    self.sevenWeek = [];
    self.getCalendar();
    self.changeStyle(self.weekArry[0],0);
    self.changebg = true;
  }



  getPageInfo(size) {
    return {
      page: 1,
      pageSize: size,
      queryKey: ''
    };
  }

  showError(mess) {
    var self = this;
    self.errorMessage = mess || '未知错误，请联系管理员';
    self.$timeout(() => self.errorMessage = null, 3000);
  }

  updateDate (time) {
    var date = new Date(time);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate();
    time = Y + M + D;
    return time;
  }


  changeStyle(date,index){
    var self = this;
    self.focus=index;

    self.$http.post(self.config.baseUrl + getCalendarUri, {
      opens: ['true', 'false'],
      officeStatus: [],
      allDays: [],
      userIds: [self.authApi.userInfo.staff.userId],
      size: 4,
      alloweds: ['true'],
      begin:self.$filter('date')(date , 'yyyy-MM-dd')
    }, {
      params: self.getPageInfo(4)
    }).then(
      (resp) => {
        self.calendars = resp.data;
      }, (resp) => self.showError(resp.data.message)
    );
  }

  getCalendar() {
    var self = this;
    self.$http.post(self.config.baseUrl + getCalendarUri, {
      opens: ['true', 'false'],
      officeStatus: [],
      allDays: [],
      userIds: [self.authApi.userInfo.staff.userId],
      size: 4,
      alloweds: ['true'],
      begin:self.$filter('date')(self.weekArry[0], 'yyyy-MM-dd'),
      end:self.$filter('date')(self.weekArry[self.weekArry.length-1], 'yyyy-MM-dd')
    }, {
      params: self.getPageInfo(4)
    }).then(
      (resp) => {
        // self.calendars = resp.data;
        if (resp.data) {
          _.map(resp.data, (n) =>{
            // oneWeek
            let startDate = new Date(self.$filter('date')(n.beginTime, 'yyyy-MM-dd'));
            let endDate = new Date(self.$filter('date')(n.endTime, 'yyyy-MM-dd'));
            // alert(self.$filter('date')(n.beginTime, 'yyyy-MM-dd') + ";" + self.$filter('date')(n.endTime, 'yyyy-MM-dd'));

            let week0 = new Date(self.$filter('date')(self.weekArry[0], 'yyyy-MM-dd'));
            if((week0 >= startDate)&&(endDate >= week0)) {
              self.oneWeek.push(n);
            }
            // twoWeek
            let week1 = new Date(self.$filter('date')(self.weekArry[1], 'yyyy-MM-dd'));
            if((week1 >= startDate)&&(endDate >= week1)) {
              self.twoWeek.push(n);
            }
            // threeWeek
            let week2 = new Date(self.$filter('date')(self.weekArry[2], 'yyyy-MM-dd'));
            if((week2 >= startDate)&&(endDate >= week2)) {
              self.threeWeek.push(n);
            }
            // fourWeek
            let week3 = new Date(self.$filter('date')(self.weekArry[3], 'yyyy-MM-dd'));
            if((week3 >= startDate)&&(endDate >= week3)) {
              self.fourWeek.push(n);
            }
            // fiveWeek
            let week4 = new Date(self.$filter('date')(self.weekArry[4], 'yyyy-MM-dd'));
            if((week4 >= startDate)&&(endDate >= week4)) {
              self.fiveWeek.push(n);
            }
            // sixWeek
            let week5 = new Date(self.$filter('date')(self.weekArry[5], 'yyyy-MM-dd'));
            if((week5 >= startDate)&&(endDate >= week5)) {
              self.sixWeek.push(n);
            }
            // sevenWeek
            let week6 = new Date(self.$filter('date')(self.weekArry[6], 'yyyy-MM-dd'));
            if((week6 >= startDate)&&(endDate >= week6)) {
              self.sevenWeek.push(n);
            }
          });
        }
      }, (resp) => self.showError(resp.data.message)
    );
  }

  getChilColumn(column,child){
    var self = this;
    self.styleColumn=column.columnId;
    return self.$http.get(self.config.baseUrl + getColumnUri + '/' + column.columnId).then(
      (resp) => {
        if(resp.data){
          if(resp.data.length>0){
            self.chilColumn = resp.data;
          }else{
            self.chilColumn = child;
          }
        }else self.column = [];

      },(mess) => self.showError(mess)
    );
  }

  getContents(column){
    var self = this;
    self.columnEntry = column;
    var pageInfo = {
      page: 1,
      pageSize: 5
    };
    var entry = {
      "coaState": ['PUBLISH']
    };
    return self.$http.post(self.config.baseUrl + getContentsUri + '/' + column.columnId,entry,
      {
        params: pageInfo
      }).then((resp) => {
      if(resp.data){
        self.contents = resp.data;
      }else self.contents = [];
    },(mess) => self.showError(mess));
  }

  activeC(judge){
    var self = this;
    if (judge) {
      self.activeClick = true;
    }else {
      self.activeClick = false;
    }
  }

  getColumn(){
    var self = this;
    var columnId = '0';
    return self.$http.get(self.config.baseUrl + getColumnUri + '/' + columnId).then(
      (resp) => {
        if(resp.data){
          var len = self.showNum;
          var name = "centerDiv";
          self.columnTo = [];
          self.columnBack = [];
          _.map(resp.data,(e) => {
            self.columnBack.push({
              id:'',
              title: e.columnName,
              choice: true,
              columnId: e.columnId,
              templateUrl:'',
              picNews: e.picNews
            });
          });
          var userColumnnew=[];
          var userColumn = self.userProtaConfig.portalConfigJson[name].data[0].tabs;
          if(userColumn.length !== resp.data.length){
            if(userColumn.length < resp.data.length){
              _.map(resp.data, (e) => {
                var ss=true;
                _.map(userColumn, (t) => {
                  if(e.columnId === t.columnId){
                    userColumnnew.push(t);
                    ss=false;
                  }
                });
                if(ss){
                  userColumn.push({
                    id:'',
                    title: e.columnName,
                    choice: true,
                    columnId: e.columnId,
                    templateUrl:''
                  });
                }
              });
            }
            if(userColumn.length > resp.data.length){
              _.map(resp.data, (e) => {
                _.map(userColumn, (t) => {
                  if(e.columnId === t.columnId){
                    userColumnnew.push(t);
                  }
                });
              });
            }
          }else{
            userColumnnew=userColumn;
          }
          self.columnTotal = userColumnnew;
          _.map(self.columnTotal,(e) => {
            if(e.choice===true){
              self.columnTo.push(e);
            }
          });
          //  self.columnTotal = resp.data;
          self.column = [];
          self.otherColumn = [];
          if(self.showNum>self.columnTo.length){
            len = self.columnTo.length;
          }
          for (var i = 0; i < len; i++) {
            self.column.push(self.columnTo[i]);
          }
          for (var j = self.showNum; j < self.columnTo.length; j++) {
            self.otherColumn.push(self.columnTo[j]);
          }
          self.columnId = self.column[0].columnId;
          self.getContents(self.column[0]);
          self.getChilColumn(self.column[0]);
        }else self.column = [];

      },(mess) => self.showError(mess)
    );
  }



  changeTab(column,child){
    var self = this;
    self.columnEntry = column;
    self.columnId=column.columnId;
    var pageInfo = {
      page: 1,
      pageSize: 5
    };
    var entry = {
      "coaState": ['PUBLISH']
      //"contentState":"effective"
    };
    self.getChilColumn(self.columnEntry,child);
    // if(child!==undefined &&  child.length>0){
    //   self.chilColumn=child;
    // }
    return self.$http.post(self.config.baseUrl + getContentsUri + '/' + self.columnId,entry,
      {
        params: pageInfo
      }).then((resp) => {
      if(resp.data){
        self.contents = resp.data;
      }else self.contents = [];
    },(mess) => self.showError(mess));
  }

  goContent(entry){
    var self = this;
    let hash = stashAdd({
      column: entry
    });
    self.goState(moreContentState, {
      hash
    });
  }

  set(column, name){
    var self = this;
    var len = column[name].data[0].tabs.length;
    var columnEntry ={};
    if(len>0){
      columnEntry = {
        data: angular.copy(column[name].data[0].tabs)
      };
    }else{
      _.map(self.columnTotal, (e) => {
        self.tabs.push({
          id:'',
          title: e.columnName,
          choice: e.switch,
          columnId: e.columnId,
          templateUrl:''
        });
      });
      columnEntry = {
        data: self.tabs
      };
    }
    self.openModal({
      animation: true,
      templateUrl: addColumnTemplateUrl,
      controller: AddColumnController,
      controllerAs: 'editorCtrl',
      size: 'personal-size',
      resolve: {
        columnData: () => angular.copy(columnEntry),
        columnBack: () => self.columnBack
      }
    }).result.then((data) => {
      column[name].data[0].tabs=data.data;
      // self.save('staff');
    });
  }

  goService(path){
    var self = this;
    self.$window.open(path);
  }
}
