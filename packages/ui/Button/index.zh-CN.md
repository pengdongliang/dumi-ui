---
category: Components
title: Button
subtitle: 按钮
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BrFMQ5s7AAQAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Lp1kTYmSsgoAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: 通用
  order: 1
---

# 通过别名引入 md 文件

<embed src="dumi-ui/index.mdx"></embed>

# 引入 npm 包的 md 文件

<embed src="dumi/README.md"></embed>

# Button

This is an example component as zh-CN.

```jsx
import Foo from 'dumi-ui/ui/Foo/index.zh-CN.md';

export default () => {
  return (
    <>
      <div>Hello dumi CN!</div>
      <Foo />
      <embed src="dumi-ui/ui/Foo/index.zh-CN.md"></embed>
    </>
  );
};
```
