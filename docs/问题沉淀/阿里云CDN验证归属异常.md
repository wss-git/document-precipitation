## 问题描述

阿里云 CDN 加速通过 API 验证归属会出现一个奇怪现象。按照[文档描述](https://help.aliyun.com/document_detail/169377.html#section-cdf-gbs-rlf)操作，在 DNS 添加了 TXT 记录，还是报错 `Owner verification of the root domain failed.`

## 问题解决

经过漫长的调试，发现 DNS 同一个解析记录值可以添加多次，虽然记录值被添加进去了，但是呢 CDN 的解析就是验不过。清理一下 DNS 为 verification 的主机记录值就可以了。
