"use strict";(self.webpackChunknestjs_i18n=self.webpackChunknestjs_i18n||[]).push([[230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:10},s="Exception filters",a={unversionedId:"guides/exception-filters",id:"guides/exception-filters",title:"Exception filters",description:"To access the I18nContext inside your exception filters use the getI18nContextFromArgumentsHost helper function.",source:"@site/docs/guides/exception-filters.md",sourceDirName:"guides",slug:"/guides/exception-filters",permalink:"/guides/exception-filters",draft:!1,editUrl:"https://github.com/toonvanstrijp/nestjs-i18n/tree/main/docs/guides/exception-filters.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Guards",permalink:"/guides/guard"},next:{title:"Mailer",permalink:"/guides/mailer"}},p={},l=[],c={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exception-filters"},"Exception filters"),(0,o.kt)("p",null,"To access the ",(0,o.kt)("inlineCode",{parentName:"p"},"I18nContext")," inside your exception filters use the ",(0,o.kt)("inlineCode",{parentName:"p"},"getI18nContextFromArgumentsHost")," helper function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/test.filter.ts"',title:'"src/test.filter.ts"'},'import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";\nimport { getI18nContextFromArgumentsHost } from "nestjs-i18n";\n\n@Catch()\nexport class TestExceptionFilter implements ExceptionFilter {\n  catch(exception: HttpException, host: ArgumentsHost) {\n    const i18n = getI18nContextFromArgumentsHost(host);\n    const response = host.switchToHttp().getResponse<any>();\n\n    console.log(\'current language\', i18n.lang);\n\n    response\n      .status(500)\n      .send(`Your language is: ${i18n.lang}`);\n  }\n}\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When using ",(0,o.kt)("strong",{parentName:"p"},"http")," or ",(0,o.kt)("strong",{parentName:"p"},"graphql")," ",(0,o.kt)("inlineCode",{parentName:"p"},"nestjs-i18n")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware")," to make things work. However when throwing exceptions in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/middleware#middleware"},(0,o.kt)("strong",{parentName:"a"},"middleware"))," this can lead to throwing your exception before the ",(0,o.kt)("inlineCode",{parentName:"p"},"nestjs-i18n")," middleware had been reached. To solve this problem you'll need to register the ",(0,o.kt)("inlineCode",{parentName:"p"},"I18nMiddleware")," globally."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/main.ts"',title:'"src/main.ts"'},"import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\nimport { I18nMiddleware } from 'nestjs-i18n';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.use(I18nMiddleware);\n  await app.listen(3000);\n}\nbootstrap();\n")),(0,o.kt)("p",{parentName:"admonition"},"or"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app.module.ts"',title:'"src/app.module.ts"'},"import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';\nimport { I18nMiddleware } from 'nestjs-i18n';\n\n@Module({\n  ...\n})\nexport class AppModule implements NestModule {\n  configure(consumer: MiddlewareConsumer) {\n    consumer.apply(I18nMiddleware, MyMiddleware).forRoutes('*');\n  }\n}\n\n"))))}m.isMDXComponent=!0}}]);