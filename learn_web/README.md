<h2>裴波那切数列，使用闭包和递归原理。</h2>

<h3>闭包<h3>
<pre>
    一个函数中嵌套另外一个函数，并且将这个函数return出去，然后将这个return出来的函数保存到了一个变量中，那么就创建了一个闭包。
    使用条件：
    1.保存变量，这一点在递归中非常明显
    2.为了不污染全局变量而使用，闭包之间不会相互影响
    3.写在for循环中的闭包，需要注意调用的时机。
</pre>

<h3>递归</h3>
<pre>
  function func( n )
    {
        if (n == 0 || n == 1)
        {
            return 1;
        }
        return func(n-1) + func(n-2);
    }

    var a = func(22);
    console.log(a);
</pre>
