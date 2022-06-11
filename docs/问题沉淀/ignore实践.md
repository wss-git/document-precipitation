## 问题描述

项目在部署时，总会需要忽略一些文件。但是尝试了很多包都存在同样的问题：`无法忽略根目录的的包`。最后决定使用 [globby](https://www.npmjs.com/package/globby)。


## 代码实践

安装依赖
````
npm i globby --save
````

实例代码
````
import globby from 'globby';

async function ignore(actualCodeUri, ignoredContentList) {
  const packageJsonFilePaths = await globby(ignoredContentList.filter(v => !!v), {
    cwd: actualCodeUri,
    dot: true,
    absolute: true,
    onlyFiles: false,
  });

  return function (f) {
    return packageJsonFilePaths.includes(f);
  };
}

````
