# translate.js
适用于英文翻译成中文
#### 使用方法
```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title>google</title>
  <script src="https://lidevin.github.io/js/translate.js"></script>
  <script>
     trans.google("翻译", function(data, src){
       console.log("data -> " + data.content);//直接获取翻译后的内容
       console.log("src -> " + src);//获取gogole翻译后的json对象
     });
  </script>
 </head>
 <body>
 </body>
</html>
```
```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title>百度</title>
  <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
  <script src="https://lidevin.github.io/js/translate.js"></script>
  <script>
     trans.baidu("翻译", function(data, src){
       console.log("data -> " + data.content);//直接获取翻译后的内容
       console.log("src -> " + src);//获取gogole翻译后的json对象
     });
  </script>
 </head>
 <body>
 </body>
</html>
```
注意:使用百度翻译需要导入jquery
