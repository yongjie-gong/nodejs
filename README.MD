### Angular6 + nodejs

## Set project
# npm init -y
# Allow typescript to existing javascript library
 npm i @types/node --save
# Create tsconfig.json which allow nodejs to support the typescript
#tsconfig.json
<code>
{
    "compileOnSave": true,
    "compilerOptions":{       //编译器配置
        "target":"es5",       //目标是编译成es5规范的脚本，也就是js
        "module":"commonjs",  //模块的规范是commonjs
        "emitDecoratorMetadata": true,
        "experimentalDecorators":true,   //这两个是要保留装饰器的元数据
        "outDir":"build",   //编译后文件默认放置在build文件夹下
        "lib":["es6"]       //开发时使用es6的语法
    },
    "exclude": [            //编译时要排除的文件
        "node_modules"
    ]
}
</code>

#Install typscript
npm install -g typescript

#Compile ts file
tsc 

## Start server
node build/hello.js


## Express
 npm install express --save
  npm install @types/express --save
