import{d as defineComponent,r as ref,c as resolveComponent,o as openBlock,e as createElementBlock,h as createBlock,B as createCommentVNode,x as defHttp}from"./index.js";import{_ as _sfc_main$1}from"./MarkdownViewer.vue_vue_type_script_setup_true_lang.js";const _sfc_main=defineComponent({__name:"LoadGitee",setup(__props){const url="/helper/transit?url="+encodeURIComponent("https://gitee.com/guoba-yunzai/resources/raw/master/other/TODO.md");let _resolve,mounted=new Promise((r=>_resolve=r));const loading=ref(!1),readmeText=ref("");function onInitOk(){_resolve()}return function(){return __this=this,__arguments=null,generator=function*(){loading.value=!0,readmeText.value=yield defHttp.get({url:url},{isTransformResponse:!1}),yield mounted,loading.value=!1},new Promise(((resolve,reject)=>{var fulfilled=value=>{try{step(generator.next(value))}catch(e){reject(e)}},rejected=value=>{try{step(generator.throw(value))}catch(e){reject(e)}},step=x=>x.done?resolve(x.value):Promise.resolve(x.value).then(fulfilled,rejected);step((generator=generator.apply(__this,__arguments)).next())}));var __this,__arguments,generator}(),(_ctx,_cache)=>{const _component_a_skeleton=resolveComponent("a-skeleton");return openBlock(),createElementBlock("div",null,[loading.value?(openBlock(),createBlock(_component_a_skeleton,{key:0,active:""})):createCommentVNode("",!0),readmeText.value?(openBlock(),createBlock(_sfc_main$1,{key:1,value:readmeText.value,onInitOk:onInitOk},null,8,["value"])):createCommentVNode("",!0)])}}});export{_sfc_main as _};
