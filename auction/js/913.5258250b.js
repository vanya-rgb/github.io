"use strict";(self["webpackChunkauction_app"]=self["webpackChunkauction_app"]||[]).push([[913],{913:function(t,e,a){a.r(e),a.d(e,{default:function(){return H}});var l=a(3396);const n={class:"card"};function i(t,e,a,i,o,s){const d=(0,l.up)("new-page");return(0,l.wg)(),(0,l.iD)("div",null,[o.modal?((0,l.wg)(),(0,l.j4)(d,{key:0,onClose:e[0]||(e[0]=t=>o.modal=!1)})):(0,l.kq)("",!0),(0,l._)("div",n,[(0,l._)("button",{class:"btn primary",onClick:e[1]||(e[1]=t=>o.modal=!o.modal)},"Show")])])}var o=a(9242);const s={class:"modal-backdrop"},d={class:"modal"},r=(0,l._)("h1",null,"New Task",-1),c={class:"form-control"},u=(0,l._)("label",{for:"title"},"Title",-1),p={class:"form-control"},m=(0,l._)("label",{for:"description"},"Description",-1),v={class:"form-control"},b=(0,l._)("label",{for:"date"},"Deadline date",-1),_=["disabled"],f=(0,l.Uk)("Close");function w(t,e,a,n,i,w){const k=(0,l.up)("butto");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",d,[(0,l._)("form",{class:"card",onSubmit:e[4]||(e[4]=(0,o.iM)(((...t)=>n.submit&&n.submit(...t)),["prevent"]))},[r,(0,l._)("div",c,[u,(0,l.wy)((0,l._)("input",{type:"text",id:"title","onUpdate:modelValue":e[0]||(e[0]=t=>n.title=t)},null,512),[[o.nr,n.title]])]),(0,l._)("div",p,[m,(0,l.wy)((0,l._)("textarea",{type:"text",id:"description","onUpdate:modelValue":e[1]||(e[1]=t=>n.description=t)},null,512),[[o.nr,n.description]])]),(0,l._)("div",v,[b,(0,l.wy)((0,l._)("input",{type:"date",id:"date","onUpdate:modelValue":e[2]||(e[2]=t=>n.date=t)},null,512),[[o.nr,n.date]])]),(0,l._)("button",{class:"btn primary",disabled:!n.isValid},"Create",8,_),(0,l.Wm)(k,{class:"btn danger",onClick:e[3]||(e[3]=e=>t.$emit("close"))},{default:(0,l.w5)((()=>[f])),_:1})],32)])])}var k=a(678),y=a(65),g=a(4870),h={setup(){const t=(0,y.oR)(),e=(0,k.tv)(),a=(0,g.iH)(""),n=(0,g.iH)(""),i=(0,g.iH)(""),o=()=>{const l={id:Date.now().toString(),titme:a.value,date:new Date(n.value),description:i.value,status:"active"};t.dispatch("createTask",l),e.push("/")},s=(0,l.Fl)((()=>""!==a.value&&n.value&&""!==i.value));return{submit:o,title:a,date:n,description:i,isValid:s}},emits:["close"]},C=a(89);const D=(0,C.Z)(h,[["render",w]]);var V=D,U={data(){return{modal:!1}},components:{NewPage:V}};const x=(0,C.Z)(U,[["render",i]]);var H=x}}]);
//# sourceMappingURL=913.5258250b.js.map