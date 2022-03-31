"use strict";(self["webpackChunkauction_app"]=self["webpackChunkauction_app"]||[]).push([[124],{1124:function(e,r,a){a.r(r),a.d(r,{default:function(){return $}});var l=a(3396),o=a(9242);const t=e=>((0,l.dD)("data-v-087bcee2"),e=e(),(0,l.Cn)(),e),s={class:"container"},n=t((()=>(0,l._)("h1",null,"Registration form",-1))),i={class:"form-checkbox"},d={class:"checkbox"},m={for:""},u=(0,l.Uk)("male"),p={class:"checkbox"},c={for:""},h=(0,l.Uk)("female"),g={class:"form-control"},b=t((()=>(0,l._)("label",{for:"age"},"How old are you?",-1))),w=t((()=>(0,l._)("button",{class:"btn primary",type:"submit"},"Send",-1)));function v(e,r,a,t,v,y){const f=(0,l.up)("app-input"),V=(0,l.up)("app-modal");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("form",{class:"card",onSubmit:r[9]||(r[9]=(0,o.iM)(((...e)=>y.submitHandler&&y.submitHandler(...e)),["prevent"]))},[n,(0,l.Wm)(f,{type:"text",placeholder:"Enter your name",error:v.errors.firstName,label:"What is your name?",modelValue:v.firstName,"onUpdate:modelValue":r[0]||(r[0]=e=>v.firstName=e)},null,8,["error","modelValue"]),(0,l.Wm)(f,{type:"text",placeholder:"Enter last name",error:v.errors.secondName,label:"What is your last name?",modelValue:v.secondName,"onUpdate:modelValue":r[1]||(r[1]=e=>v.secondName=e)},null,8,["error","modelValue"]),(0,l.Wm)(f,{type:"text",placeholder:"Enter login",error:v.errors.login,label:"Enter login here",modelValue:v.login,"onUpdate:modelValue":r[2]||(r[2]=e=>v.login=e)},null,8,["error","modelValue"]),(0,l.Wm)(f,{type:"email",placeholder:"Enter email here",error:v.errors.email,label:"Enter email",modelValue:v.email,"onUpdate:modelValue":r[3]||(r[3]=e=>v.email=e)},null,8,["error","modelValue"]),(0,l.Wm)(f,{type:"password",placeholder:"Enter password",error:v.errors.password,label:"Enter password here",modelValue:v.password,"onUpdate:modelValue":r[4]||(r[4]=e=>v.password=e)},null,8,["error","modelValue"]),(0,l.Wm)(f,{type:"password",placeholder:"Reenter password",error:v.errors.password,label:"Reenter password here",modelValue:v.repeatPassword,"onUpdate:modelValue":r[5]||(r[5]=e=>v.repeatPassword=e)},null,8,["error","modelValue"]),(0,l._)("div",i,[(0,l._)("div",d,[(0,l._)("label",m,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":r[6]||(r[6]=e=>v.sex=e),type:"radio",value:"male",name:"sex"},null,512),[[o.G2,v.sex]]),u])]),(0,l._)("div",p,[(0,l._)("label",c,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":r[7]||(r[7]=e=>v.sex=e),type:"radio",value:"female",name:"sex"},null,512),[[o.G2,v.sex]]),h])])]),(0,l._)("div",g,[b,(0,l.wy)((0,l._)("input",{type:"number",id:"age","onUpdate:modelValue":r[8]||(r[8]=e=>v.age=e)},null,512),[[o.nr,v.age,void 0,{number:!0}]])]),w],32),v.modal?((0,l.wg)(),(0,l.j4)(V,{key:0,onClose:r[10]||(r[10]=e=>v.modal=!1),onToPrivateCabinet:t.navigate},null,8,["onToPrivateCabinet"])):(0,l.kq)("",!0)])}var y=a(7139);const f=["for"],V=["type","placeholder","value"],_={key:0};function k(e,r,a,o,t,s){return(0,l.wg)(),(0,l.iD)("div",{class:(0,y.C_)(["form-control",{invalid:a.error}])},[(0,l._)("label",{for:t.id},(0,y.zw)(a.label),9,f),(0,l._)("input",{type:a.type,id:"id",placeholder:a.placeholder,value:a.modelValue,onInput:r[0]||(r[0]=(...e)=>s.change&&s.change(...e))},null,40,V),a.error?((0,l.wg)(),(0,l.iD)("small",_,(0,y.zw)(a.error),1)):(0,l.kq)("",!0)],2)}var N={props:{type:String,modelValue:String,placeholder:String,label:String,error:{type:String}},data(){return{id:"input-"+Math.random}},methods:{change(e){this.$emit("update:modelValue",e.target.value)}},emits:["update:modelValue"]},x=a(89);const C=(0,x.Z)(N,[["render",k]]);var P=C;const U={class:"modal"},E=(0,l._)("h3",null,"Все отлично!",-1),S=(0,l._)("p",null,"Жмякай кнопку чтобы продолжить.",-1);function W(e,r,a,o,t,s){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",{class:"modal-backdrop",onClick:r[0]||(r[0]=r=>e.$emit("close"))}),(0,l._)("div",U,[E,S,(0,l._)("button",{class:"btn primary",onClick:r[1]||(r[1]=r=>e.$emit("toPrivateCabinet"))},"Дальше")])])}var D={emits:["close","toPrivateCabinet"]};const H=(0,x.Z)(D,[["render",W]]);var R=H,A=a(678),I=a(65),M={setup(){const e=(0,A.tv)(),r=(0,I.oR)(),a=()=>{r.dispatch("changeAuthStatus"),e.push("/lk")};return{navigate:a}},data(){return{firstName:"",secondName:"",email:"",password:"",repeatPassword:"",login:"",age:23,sex:"male",errors:{firstName:null,secondName:null,email:null,password:null,login:null},modal:!1}},methods:{isValid(){let e=!0;return this.password.lenght<6||this.repeatPassword<6?(this.errors.password="Password must be longer than 6 characters",e=!1):this.repeatPassword!==this.password?(this.errors.password="Passwords do not match",e=!1):this.errors.password=null,0==this.login.length?(this.errors.login="Login cannot be empty",e=!1):this.errors.login=null,0==this.email.length?(this.errors.email="Email cannot be empty",e=!1):this.errors.email=null,0==this.firstName.length?(this.errors.firstName="Name cannot be empty",e=!1):this.errors.firstName=null,0==this.secondName.length?(this.errors.secondName="Last name cannot be empty",e=!1):this.errors.secondName=null,console.log(this.errors),e},submitHandler(){this.isValid()&&(this.modal=!0)}},components:{AppInput:P,AppModal:R}};const Z=(0,x.Z)(M,[["render",v],["__scopeId","data-v-087bcee2"]]);var $=Z}}]);
//# sourceMappingURL=124.5ee69420.js.map