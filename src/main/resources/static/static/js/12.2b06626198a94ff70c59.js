(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/s8z":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=m(s("gDS+")),l=m(s("12Lk")),a=s("CG6M"),i=m(s("82+z")),o=m(s("LMU1")),n=s("heCB"),u=s("1y4o"),v=s("DZWd"),c=s("XDW4"),y=m(s("pVSV")),d=s("KSwC"),p=s("CWn8"),g=s("pC62"),f=s("HCiu"),w=s("iYnu");function m(e){return e&&e.__esModule?e:{default:e}}t.default={name:"DwStyleSurveyMain",components:{DwSurveyStyleDesignAside:y.default,DwAnswerDefaultLayout:o.default,DwAnswerSurvey:i.default,DwAnswerSurveyMain:l.default},data:function(){return{loading:!0,survey:null,drawer:!1,direction:"ltl",activeName:"first",previewTypeClass:"dw-preview-pc",padPhoneAnBodySpan:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:24,offset:0},xl:{span:24,offset:0}},answerProps:{sid:null,answerId:null,anPwd:null},prevPath:"/v6",containerTop:{lrFixedTop:40,centerMarginTop:40},oldQuestions:null}},watch:{"survey.surveyStyle":{immediate:!1,deep:!0,handler:function(e,t){console.debug("newVal",e),this.saveSurvey()}}},mounted:function(){var e=this;this.answerProps.sid=this.$route.params.dwSurveyId,this.loadSurvey(),w.dwFooterUtils.isLayoutLr(function(t){e.prevPath="/v6/lr"})},methods:{handlePush:function(e){this.$router.push(e)},loadSurvey:function(){var e=this,t={surveyId:this.$route.params.dwSurveyId};(0,n.getDesignSurveyJsonBySurveyId)(t,function(t){console.debug("design survey",t),t.hasOwnProperty("surveyStyle")&&t.surveyStyle.hasOwnProperty("pageThemeColor")||(t.surveyStyle=(0,c.getDefaultSurveyStyle)()),t.dwDebug=!1,t.answerMsg={showAnswerMsg:!1,answerMsgInfo:null,noSurveyJson:!1},(0,u.initAnswerBySurvey)(t),(0,g.dwSurveyAnswerLogicLoad)(t),(0,v.initAnswerSurveyProgress)(t),(0,u.showPageByIndex)(t,1,"next"),e.oldQuestions=(0,r.default)(t.questions),e.survey=t,e.loading=!1})},handleClick:function(e,t){console.log(e,t)},previewTabClick:function(e){this.previewTypeClass=e},designSurvey:function(){var e=this.$route.params.dwSurveyId;this.$router.push("/v6/diaowen/dw-design/survey/"+e)},devSurvey:function(){var e=this,t=this.$route.params.dwSurveyId,s={surveyId:t};(0,a.dwDevSurvey)(s).then(function(s){console.debug("response"),console.debug(s),200===s.data.resultCode?(f.surveyAnswerLocalStorage.clearAnswerHistory(e.survey.sid,null),e.$router.push(e.prevPath+"/dw/survey/c/url/"+t)):e.$message.error("发布失败，请重试或联系管理员！")})},saveSurvey:function(){this.saveSurveyFun(null)},saveSurveyFun:function(e){var t=this,s=this.survey.id,l=this.survey.sid;this.survey.questions=JSON.parse(this.oldQuestions),(0,d.clearSurveyJson)(this.survey),(0,p.clearSurveyAnswer)(this.survey),console.debug("save this.survey",this.survey);var i=(0,r.default)((0,d.getSaveSurveyJsonText)(this.survey)),o={surveyId:s,sid:l,surveyJsonText:i,surveyJsonSimple:(0,r.default)((0,d.getSurveyJsonSimple)(i))};console.debug("surveyJson data",o),(0,a.dwSaveSurveyJson)(o).then(function(s){console.debug("dwSaveSurveyJson-response",s);var r=s.data;r.hasOwnProperty("resultCode")&&200===r.resultCode?null!=e&&e():t.$message.success("保存样式失败！")})}}}},"6K1G":function(e,t,s){"use strict";s.d(t,"a",function(){return r}),s.d(t,"b",function(){return l});var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("dw-style-survey-main")],1)},l=[]},CWn8:function(e,t,s){"use strict";function r(e){var t=e.quType;"RADIO"===t?function(e,t){e.quRadios.map(function(e,t){e.checked=!1})}(e):"CHECKBOX"===t?function(e){e.quCheckboxs.map(function(e,t){e.checked=!1})}(e):"ORDERQU"===t?function(e){e.quOrderbys.forEach(function(e,t){e.checked=!1,e.orderIndex=0})}(e):"MULTIFILLBLANK"===t?function(e){e.quMultiFillblanks.map(function(e,t){e.inputText=""})}(e):"SCORE"===t?function(e){e.quScores.map(function(e,t){e.checked=!1,e.answerScore=0})}(e):"FILLBLANK"===t?function(e){e.answer=null}(e):"UPLOADFILE"===t&&function(e){e.hasOwnProperty("upFileList")&&(e.upFileList=null)}(e),e.hasOwnProperty("anQuestion")&&delete e.anQuestion,e.validateObj={errorText:"",isOk:!0,isAnswerOk:!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.clearSurveyAnswer=function(e){var t=e.questions;void 0!==t&&(console.debug("questions",t),t.map(function(e,t){console.debug("item",e),r(e)}))},t.clearQuestionAnswerData=r},DwzP:function(e,t,s){"use strict";s.d(t,"a",function(){return r}),s.d(t,"b",function(){return l});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return null!=e.survey&&e.survey.hasOwnProperty("surveyStyle")?s("div",[s("div",[s("div",{staticStyle:{padding:"10px 10px 10px 10px"}},[e._m(0),e._v(" "),s("div",{staticStyle:{padding:"5px 0"}},[s("el-alert",{attrs:{title:"样式修改会自动保存",type:"info","show-icon":""}})],1),e._v(" "),s("div",[s("el-form",{ref:"form",attrs:{size:"small"}},[s("div",[s("div",{staticClass:"dw-title-attr"},[e._v("图片属性")]),e._v(" "),s("div",{staticStyle:{"padding-left":"10px"}},[s("el-form-item",[s("div",[s("el-checkbox",{model:{value:e.survey.surveyStyle.pageTopImg.enabled,callback:function(t){e.$set(e.survey.surveyStyle.pageTopImg,"enabled",t)},expression:"survey.surveyStyle.pageTopImg.enabled"}},[e._v("页眉图")])],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.survey.surveyStyle.pageTopImg.enabled,expression:"survey.surveyStyle.pageTopImg.enabled"}],staticStyle:{"font-size":"12px"}},[s("el-row",{staticStyle:{height:"40px"},attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{attrs:{span:10}},[s("el-image",{staticClass:"dw-style-el-image",attrs:{src:e.survey.surveyStyle.pageTopImg.httpSrc,fit:"cover"}},[s("div",{staticClass:"el-image__error",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"fa-regular fa-image",staticStyle:{"margin-right":"6px"}}),e._v("请上传图片")])])],1),e._v(" "),s("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:14}},[s("el-upload",{attrs:{"on-success":e.handleSuccessTopImg,"show-file-list":!1,action:"/api/dwsurvey/up/up-file.do"}},[s("el-button",{attrs:{size:"small",type:"primary"}},[e._v("上传图片")])],1)],1)],1)],1)]),e._v(" "),s("el-form-item",[s("div",[s("el-checkbox",{on:{change:e.upImgSrc},model:{value:e.survey.surveyStyle.pageBgImg.enabled,callback:function(t){e.$set(e.survey.surveyStyle.pageBgImg,"enabled",t)},expression:"survey.surveyStyle.pageBgImg.enabled"}},[e._v("背景图")])],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.survey.surveyStyle.pageBgImg.enabled,expression:"survey.surveyStyle.pageBgImg.enabled"}],staticStyle:{"font-size":"12px"}},[s("el-row",{staticStyle:{height:"40px"},attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{attrs:{span:10}},[s("el-image",{staticClass:"dw-style-el-image",attrs:{src:e.survey.surveyStyle.pageBgImg.httpSrc,fit:"cover"}},[s("div",{staticClass:"el-image__error",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"fa-regular fa-image",staticStyle:{"margin-right":"6px"}}),e._v("请上传图片")])])],1),e._v(" "),s("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:14}},[s("el-upload",{attrs:{"on-success":e.handleSuccessBgImg,"show-file-list":!1,action:"/api/dwsurvey/up/up-file.do"}},[s("el-button",{attrs:{size:"small",type:"primary"}},[e._v("上传图片")])],1)],1)],1)],1)]),e._v(" "),s("el-form-item",[s("div",[s("el-checkbox",{model:{value:e.survey.surveyStyle.logoImg.enabled,callback:function(t){e.$set(e.survey.surveyStyle.logoImg,"enabled",t)},expression:"survey.surveyStyle.logoImg.enabled"}},[e._v("LOGO图")])],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.survey.surveyStyle.logoImg.enabled,expression:"survey.surveyStyle.logoImg.enabled"}],staticStyle:{"font-size":"12px"}},[s("el-row",{staticStyle:{height:"40px"},attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{attrs:{span:10}},[s("el-image",{staticClass:"dw-style-el-image",attrs:{src:e.survey.surveyStyle.logoImg.httpSrc,fit:"fill"}},[s("div",{staticClass:"el-image__error",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"fa-regular fa-image",staticStyle:{"margin-right":"6px"}}),e._v("请上传图片")])])],1),e._v(" "),s("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:14}},[s("el-upload",{attrs:{"on-success":e.handleSuccessLogoImg,"show-file-list":!1,action:"/api/dwsurvey/up/up-file.do"}},[s("el-button",{attrs:{size:"small",type:"primary"}},[e._v("上传图片")])],1)],1)],1),e._v(" "),s("div",{staticStyle:{"padding-top":"5px"}},[s("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{attrs:{span:24}},[s("span",{staticStyle:{"font-size":"14px","font-weight":"500",color:"#606266"}},[e._v("显示位置")]),e._v(" "),s("el-select",{staticStyle:{width:"144px"},attrs:{placeholder:"请选择"},model:{value:e.survey.surveyStyle.logoImg.position,callback:function(t){e.$set(e.survey.surveyStyle.logoImg,"position",t)},expression:"survey.surveyStyle.logoImg.position"}},e._l(e.options,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1)],1)])],1)]),e._v(" "),s("div",{staticStyle:{"margin-top":"20px"}},[s("div",{staticClass:"dw-title-attr"},[e._v("颜色属性")]),e._v(" "),s("div",{staticStyle:{"padding-left":"10px"}},[s("el-form-item",[s("div",{staticStyle:{"font-size":"12px"}},[s("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{attrs:{span:14}},[s("div",{staticStyle:{"font-size":"14px","font-weight":"500",color:"#606266"}},[e._v("主题色"),s("span",{staticStyle:{"font-size":"12px","font-weight":"normal",color:"#969696"}},[e._v("（表单控件）")])])]),e._v(" "),s("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:10}},[s("el-color-picker",{staticStyle:{display:"block"},attrs:{"show-alpha":"",size:"medium"},on:{change:e.upThemeColor},model:{value:e.survey.surveyStyle.pageThemeColor,callback:function(t){e.$set(e.survey.surveyStyle,"pageThemeColor",t)},expression:"survey.surveyStyle.pageThemeColor"}})],1)],1)],1)]),e._v(" "),s("el-form-item",[s("div",{staticStyle:{"font-size":"12px"}},[s("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{attrs:{span:14}},[s("div",{staticStyle:{"font-size":"14px","font-weight":"500",color:"#606266"}},[e._v("背景色"),s("span",{staticStyle:{"font-size":"12px","font-weight":"normal",color:"#969696"}},[e._v("（背景图优先）")])])]),e._v(" "),s("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:10}},[s("el-color-picker",{staticStyle:{display:"block"},attrs:{"show-alpha":"",size:"medium"},on:{change:e.upAnswerStyle},model:{value:e.survey.surveyStyle.pageBgColor,callback:function(t){e.$set(e.survey.surveyStyle,"pageBgColor",t)},expression:"survey.surveyStyle.pageBgColor"}})],1)],1)],1)]),e._v(" "),s("el-form-item",[s("div",{staticStyle:{"font-size":"12px"}},[s("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{attrs:{span:14}},[s("div",{staticStyle:{"font-size":"14px","font-weight":"500",color:"#606266"}},[e._v("LOGO行背景色")])]),e._v(" "),s("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:10}},[s("el-color-picker",{staticStyle:{display:"block"},attrs:{"show-alpha":"",size:"medium"},on:{change:e.upAnswerStyle},model:{value:e.survey.surveyStyle.logoBgColor,callback:function(t){e.$set(e.survey.surveyStyle,"logoBgColor",t)},expression:"survey.surveyStyle.logoBgColor"}})],1)],1)],1)]),e._v(" "),s("el-form-item",[s("div",{staticStyle:{"font-size":"12px"}},[s("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{attrs:{span:14}},[s("div",{staticStyle:{"font-size":"14px","font-weight":"500",color:"#606266"}},[e._v("进度条色"),s("span",{staticStyle:{"font-size":"12px","font-weight":"normal",color:"#969696"}},[e._v("（优先级高）")])])]),e._v(" "),s("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:10}},[s("el-color-picker",{staticStyle:{display:"block"},attrs:{"show-alpha":"",size:"medium"},on:{change:e.upAnswerStyle},model:{value:e.survey.surveyStyle.progressColor,callback:function(t){e.$set(e.survey.surveyStyle,"progressColor",t)},expression:"survey.surveyStyle.progressColor"}})],1)],1)],1)])],1)]),e._v(" "),s("div",{staticStyle:{"margin-top":"20px"}},[s("div",{staticClass:"dw-title-attr"},[e._v("显示配置")]),e._v(" "),s("div",{staticStyle:{"padding-left":"10px"}},[s("el-form-item",[s("div",{staticStyle:{"font-size":"12px"}},[s("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{attrs:{span:12}},[s("div",[s("el-checkbox",{model:{value:e.survey.surveyStyle.showQuNum,callback:function(t){e.$set(e.survey.surveyStyle,"showQuNum",t)},expression:"survey.surveyStyle.showQuNum"}},[e._v("显示题号")])],1)]),e._v(" "),s("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:12}},[s("div",[s("el-checkbox",{model:{value:e.survey.surveyStyle.showProgressbar,callback:function(t){e.$set(e.survey.surveyStyle,"showProgressbar",t)},expression:"survey.surveyStyle.showProgressbar"}},[e._v("显示进度")])],1)])],1)],1)]),e._v(" "),s("el-form-item",[s("div",{staticStyle:{"font-size":"12px"}},[s("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{attrs:{span:12}},[s("div",[s("el-checkbox",{model:{value:e.survey.surveyStyle.showPageHeader,callback:function(t){e.$set(e.survey.surveyStyle,"showPageHeader",t)},expression:"survey.surveyStyle.showPageHeader"}},[e._v("显示表头")])],1)]),e._v(" "),s("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:12}},[s("div",[s("el-checkbox",{model:{value:e.survey.surveyStyle.showQuTypeName,callback:function(t){e.$set(e.survey.surveyStyle,"showQuTypeName",t)},expression:"survey.surveyStyle.showQuTypeName"}},[e._v("显示题型")])],1)])],1)],1)]),e._v(" "),s("el-form-item",[s("div",{staticStyle:{"font-size":"12px"}},[s("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{attrs:{span:12}},[s("div",[s("el-checkbox",{model:{value:e.survey.surveyStyle.showSurveyTitle,callback:function(t){e.$set(e.survey.surveyStyle,"showSurveyTitle",t)},expression:"survey.surveyStyle.showSurveyTitle"}},[e._v("显示问卷标题")])],1)]),e._v(" "),s("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:12}},[s("div",[s("el-checkbox",{model:{value:e.survey.surveyStyle.showSurveyNote,callback:function(t){e.$set(e.survey.surveyStyle,"showSurveyNote",t)},expression:"survey.surveyStyle.showSurveyNote"}},[e._v("显示问卷说明")])],1)])],1)],1)]),e._v(" "),s("el-form-item",[s("div",{staticStyle:{"font-size":"12px"}},[s("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{attrs:{span:12}},[s("div",[s("el-checkbox",{model:{value:e.survey.surveyStyle.showQuScoreNum,callback:function(t){e.$set(e.survey.surveyStyle,"showQuScoreNum",t)},expression:"survey.surveyStyle.showQuScoreNum"}},[e._v("显示题目分数")])],1)]),e._v(" "),s("el-col",{attrs:{span:12}})],1)],1)])],1)])])],1)])])]):e._e()},l=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"font-size":"14px","font-weight":"bold","text-align":"left",padding:"10px 0"}},[t("i",{staticClass:"fa-solid fa-gear",staticStyle:{color:"var(--dw-primary-theme-color)"}}),this._v(" 配置项\n      ")])}]},KIp4:function(e,t,s){"use strict";s.r(t);var r=s("/s8z"),l=s.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){s.d(t,e,function(){return r[e]})}(a);var i=s("q9aH"),o=s("JFUb"),n=Object(o.a)(l.a,i.a,i.b,!1,function(e){s("pN98"),s("pNV/")},"data-v-28612d36",null);t.default=n.exports},eqE5:function(e,t,s){},gFkm:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,l=(r=s("KIp4"))&&r.__esModule?r:{default:r};t.default={name:"DwSurveyDesignContent",components:{DwStyleSurveyMain:l.default}}},molw:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("XDW4"),l=s("uhZI");t.default={name:"DwSurveyStyleDesignAside",model:{prop:"survey",event:"update-survey"},props:{survey:{type:Object,default:function(){}}},data:function(){return{options:[{value:"topLogoLeft",label:"顶部LOGO行居左"},{value:"topLogoCenter",label:"顶部LOGO行居中"},{value:"topLogoRight",label:"顶部LOGO行居右"},{value:"pageTopImgLeft",label:"在页眉图片左上角"},{value:"pageTopImgRight",label:"在页眉图片右上角"}],color:"rgba(19, 206, 102, 0.8)",imageUrl:""}},mounted:function(){this.upImgSrc()},methods:{handleSuccessTopImg:function(e,t){this.handleSuccess(e,t,"pageTopImg")},handleSuccessBgImg:function(e,t){this.handleSuccess(e,t,"pageBgImg")},handleSuccessLogoImg:function(e,t){this.handleSuccess(e,t,"logoImg")},handleSuccess:function(e,t,s){if(e.hasOwnProperty("resultCode")&&200===e.resultCode){var r=e.data;"pageTopImg"===s?this.survey.surveyStyle.pageTopImg.src=r[0].location:"pageBgImg"===s?this.survey.surveyStyle.pageBgImg.src=r[0].location:"logoImg"===s&&(this.survey.surveyStyle.logoImg.src=r[0].location),this.upImgSrc()}else this.$message.error("上传失败")},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,s=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),s||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&s},upImgSrc:function(){l.dwUpSurveyStyle.dwUpImgSrcVar(this.survey)},upAnswerStyle:function(){l.dwUpSurveyStyle.dwUpAnswerStyleVar(this.survey)},upThemeColor:function(){var e=this.survey;if(null!==e&&e.hasOwnProperty("surveyStyle")){var t=e.surveyStyle.pageThemeColor;this.survey.surveyStyle.pageThemeColor1=r.dwSurveyColorUtils.generateSimilarColor(t,-.1,.1),console.debug("pageThemeColor",t);var s=r.dwSurveyColorUtils.generateSimilarColor(t,-.2,.3,!1);this.survey.surveyStyle.pageBgColor=s,r.dwSurveyColorUtils.isWhiteColor(s)&&(this.survey.surveyStyle.pageBgColor="#dfdfe0"),console.debug("this.survey.pageBgColor",s),this.survey.surveyStyle.progressColor=r.dwSurveyColorUtils.generateSimilarColor(t,.1,-.2,!1);var l=r.dwSurveyColorUtils.generateSimilarColor(t,-.2,.5,!0);this.survey.surveyStyle.logoBgColor=l;var a=r.dwSurveyColorUtils.hslToRgb(l);console.debug("logoBgColorRgb",a,a.red),r.dwSurveyColorUtils.isWhiteColor(a)&&(this.survey.surveyStyle.pageBgColor="#efefef"),this.upAnswerStyle(),console.debug("this.survey.surveyStyle.logoBgColor",this.survey.surveyStyle.logoBgColor)}}}}},pN98:function(e,t,s){},"pNV/":function(e,t,s){},pVSV:function(e,t,s){"use strict";s.r(t);var r=s("molw"),l=s.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){s.d(t,e,function(){return r[e]})}(a);var i=s("DwzP"),o=s("JFUb"),n=Object(o.a)(l.a,i.a,i.b,!1,function(e){s("eqE5")},"data-v-1acb15da",null);t.default=n.exports},q9aH:function(e,t,s){"use strict";s.d(t,"a",function(){return r}),s.d(t,"b",function(){return l});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return null!==e.survey?s("div",{staticClass:"dw-preview-container"},[s("div",{staticClass:"dw-preview-header"},[s("div",{staticClass:"dw-preview-header-left"},[s("label",[s("i",{staticClass:"dw-icon-button fa-solid fa-palette active"}),e._v(e._s(e.survey.surveyTypeSimpleName)+"样式配置")])]),e._v(" "),s("div",{staticClass:"dw-preview-header-center"},[s("label",[s("i",{staticClass:"dw-icon-button fas fa-desktop",class:"dw-preview-pc"===e.previewTypeClass?"active":"",on:{click:function(t){return e.previewTabClick("dw-preview-pc")}}})]),e._v(" "),s("label",[s("i",{staticClass:"dw-icon-button fas fa-tablet-alt",class:"dw-preview-pad"===e.previewTypeClass?"active":"",on:{click:function(t){return e.previewTabClick("dw-preview-pad")}}})]),e._v(" "),s("label",[s("i",{staticClass:"dw-icon-button fas fa-mobile-alt",class:"dw-preview-phone"===e.previewTypeClass?"active":"",on:{click:function(t){return e.previewTabClick("dw-preview-phone")}}})])]),e._v(" "),s("div",{staticClass:"dw-preview-header-right"},[s("div",{staticClass:"dw-display-flex-right"},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.devSurvey}},[e._v("确认发布")]),e._v(" "),s("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:e.designSurvey}},[e._v("返回编辑")]),e._v(" "),s("el-button",{attrs:{size:"small"},on:{click:function(t){return e.handlePush(e.prevPath+"/dw/survey/c/url/"+e.survey.id)}}},[e._v("答卷地址")]),e._v(" "),s("el-button",{attrs:{size:"small"},on:{click:function(t){return e.handlePush(e.prevPath)}}},[e._v("返回列表")])],1)])]),e._v(" "),s("el-container",{staticStyle:{height:"calc(100vh)"}},[s("el-aside",{staticStyle:{width:"300px","border-right":"1px solid rgb(230 228 228)"}},[s("div",{staticStyle:{position:"fixed",width:"300px"},style:"top: "+e.containerTop.lrFixedTop+"px;"},[null!==e.survey?s("div",{staticClass:"dw-preview-left-aside"},[s("dw-survey-style-design-aside",{model:{value:e.survey,callback:function(t){e.survey=t},expression:"survey"}})],1):e._e()])]),e._v(" "),s("el-container",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{flex:"auto"}},[s("div",{staticStyle:{width:"100%"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:"dw-preview-pc"===e.previewTypeClass,expression:"previewTypeClass === 'dw-preview-pc'"}],staticClass:"dw-preview-main"},[s("div",{staticClass:"dw-preview-answer-survey-container"},[s("div",{staticClass:"dw-preview-pc"},[s("div",{staticClass:"dw-preview-body",style:"margin-top: "+e.containerTop.centerMarginTop+"px;"},[s("div",[s("div",{staticClass:"dw-answer-custom-theme"},[s("dw-answer-default-layout",{attrs:{"ext-props":{anBodyStyle:{minHeight:"calc(100vh - 40px)",height:"auto"},isPreview:!0}},model:{value:e.survey,callback:function(t){e.survey=t},expression:"survey"}})],1)])])])])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"dw-preview-pad"===e.previewTypeClass,expression:"previewTypeClass === 'dw-preview-pad'"}],staticClass:"dw-preview-main"},[s("div",{staticClass:"dw-preview-answer-survey-container"},[s("div",{staticClass:"dw-preview-pad"},[s("div",{staticClass:"dw-preview-body",style:"margin-top: "+e.containerTop.centerMarginTop+"px;"},[s("div",[s("div",{staticClass:"dw-answer-custom-theme"},[s("dw-answer-default-layout",{attrs:{"ext-props":{anBodySpan:e.padPhoneAnBodySpan,anBodyStyle:{minHeight:"630px",height:"auto"},isPreview:!0}},model:{value:e.survey,callback:function(t){e.survey=t},expression:"survey"}})],1)])])])])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"dw-preview-phone"===e.previewTypeClass,expression:"previewTypeClass === 'dw-preview-phone'"}],staticClass:"dw-preview-main"},[s("div",{staticClass:"dw-preview-answer-survey-container"},[s("div",{staticClass:"dw-preview-phone"},[s("div",{staticClass:"dw-preview-body",style:"margin-top: "+e.containerTop.centerMarginTop+"px;"},[s("div",[s("div",{staticClass:"dw-answer-custom-theme"},[s("dw-answer-default-layout",{attrs:{"ext-props":{anBodySpan:e.padPhoneAnBodySpan,anBodyStyle:{minHeight:"861px",height:"auto"},isPreview:!0}},model:{value:e.survey,callback:function(t){e.survey=t},expression:"survey"}})],1)])])])])])])])],1)],1):e._e()},l=[]},wYH2:function(e,t,s){"use strict";s.r(t);var r=s("gFkm"),l=s.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){s.d(t,e,function(){return r[e]})}(a);var i=s("6K1G"),o=s("JFUb"),n=Object(o.a)(l.a,i.a,i.b,!1,null,null,null);t.default=n.exports}}]);