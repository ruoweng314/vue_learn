
clickplus文件下，是react学习成果。使用node，webpack搭建，react填充组件。完成clickplus系统中的基本组件开发。<br>


react学习总结：
1.React.Component一定要注意大小写  <br>
2.constructor方法在render()方法外部使用，需要super（props），setState（）,以及bind绑定方法到相对应的this对象上 <br>
3.双向绑定机制，使用的时候需要setState(function(){return:  object}).才可以更好的触发。 <br>
4.setState（）是异步绑定的，所以若想直接看到对象的改变，采用回调函数，或者是setTimeout()中调用。
5.父组件向子组件通信：常规props传值    <br>
6.子组件向父组件通信：需要给props传一个函数。子组件触发事件时： <br>
  <pre> click（params => {
           props.callback(params);
          }）
  </pre>
  
7.父组件向子组件的子组件通信（父=>子=>子） <br>
  <pre>
  1.逐层传递pros
  2.使用全局 context对象（层级较多、使用频率较高）。需要父子组件的申明
    父：
    //申明父组件支持 context
      static childContextTypes = {
        color:PropTypes.string,
        callback:PropTypes.func,
    }

    // 父组件提供一个函数，用来返回相应的 context 对象
    getChildContext(){
        return{
            color:"red",
            callback:this.callback.bind(this)
        }
    }
    
    子：
    //申明需要context
    static contextTypes = {
        color:PropTypes.string,
        callback:PropTypes.func,
    }
    
    
    子组件可以在  render()方法中   采用 this.context.color调用

 </pre>
 8.兄弟组件的通信 采用events事件订阅 <br>
  <pre>
  npm install events
  
  新建一个 ev.js，引入 events 包，并向外提供一个事件对象，供通信时使用：
  import { EventEmitter } from "events";
  export default new EventEmitter();
  
  父组件不需要任何处理，只需要在需要通信的组件中引入ev.js
  brother_1:
  引入： import emitter from "./ev"
  使用： 
    componentDidMount(){
        // 声明一个自定义事件
        // 在组件装载完成以后
        this.eventEmitter = emitter.addListener("callMe",(msg)=>{
            this.setState({
                msg
            })
        });
    }
    // 组件销毁前移除事件监听
    componentWillUnmount(){
        emitter.removeListener(this.eventEmitter);
    }

    作者：黑黢黢
    链接：http://www.jianshu.com/p/fb915d9c99c4
    
    brother_2:
    引入：import emitter from "./ev"
    使用：
      const cb = (msg) => {
            return () => {
                // 触发自定义事件
                emitter.emit("callMe","Hello")
            }
        }
        return(
            <div>
                我是非嵌套 2 号
                <button onClick = { cb("blue") }>点击我</button>
            </div>
        );
    
    如此点击brother_2时，brother_1可以收到信息。
    this is  like angular: $scope.$broadcast("parentChange", n)   $scope.$on('parentChange',n).
                           $scope.$emit("childChange",n)          $scope.$on('childChange',n)
  <pre>
