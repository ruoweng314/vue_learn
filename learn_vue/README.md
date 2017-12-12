vue写了一些例子，仅仅明白了语法糖。失败呀！ <br>

<h2>vue的坑</h2>
<pre>
  1.vue是不支持IE8一下浏览器的。
  
  2.vue中的watch()  与angular中的 watch()是有明显的不同的 (angular脏检查，vue数据劫持)：
    angualr在检测到{{}}后，就在watch 队列中插入一个对象。当controller中检测(ng-*、   $http   、  $timeout  、$location)更改了某一个对象，会将watch队列中其他对象也检查一遍。（某些必要条件写试用jquery改变的对象，请使用$apply()  强制执行  $rootScope.$digest()   循环监听，来刷新视图）
    vue中通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
        改变某一个对象，只遍历此对象的所有属性，来刷新对应的组件。
    
  3.vue中是不能通过   array[index]= value;  来改变视图的。     需要 Vue.set(array_object, index, newValue)。
    对于对象也不允许   object.person.age = 20;添加新的age属性。 需要 Vue.set(object_person, 'age', 27).
    多个对象的添加，使用object.assign()      ex: Object.assign(target_Object,new_property_json_type) or  _extend(target_Object,new_property_json_type)
  
  4.
</pre>
