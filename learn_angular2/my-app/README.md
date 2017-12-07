# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

app/* 使用html模板，css样式和单元测试自定义（spec.ts）组件，是根组件，随应用的增长而成长。
app/app.module.ts  定义APPModule,这个跟模块会告诉angular如何组装应用。
assets/* 这个文件夹下可以放图片等任何东西，构建应用后，会全部拷贝到发布包中
enviroments/* 文件下配置环境变量，这些文件在构建应用时被替换
favicon.ico文件配置网站的图标。title中的小logo
index.html文件是 项目入口，一般情况下不需要手动添加 <script> 和 <link>标签
main.ts 应用的主要入口点，使用JIT compiler 编译器编译本应用，并启用应用的根模块APPModule，是其运行在浏览器中。可以使用AOT compiler 编译器，不用修改任何代码。只要给ng build 或 ng serve 传入 --aot参数就可以了
polyfills.ts 不同的浏览器对web标准的支持不同，填充库（polyfill）能帮助我们对这些不同进行标准化。只需要使用core-js 和 zone-js通常就够了
styles.css 全局样式设置，大多数情况下，希望在组件中使用局部样式，但是全局样式，集中放置于此
test.ts 单元测试入口，有一些自定义配置不熟悉，一般不编辑任何东西
tsconfig.{app|spec}.json TypeScript编译器配置文件，tsconfig.app.json是为Angular应用准备的。tsconfig.spec.json是为单元测试准备的
