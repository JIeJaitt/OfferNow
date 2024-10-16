# 基于语雀+Next.js+Vercel实现免费的博客系统

大家好，我是白露！今天我想和大家分享我的第一个开源项目：**基于语雀+Next.js+Vercel实现免费的博客系统**。

## 项目简介

简单来说，**你在语雀写博客，然后直接一键同步到个人网站上，网站自动部署！** 整个过程几乎不需要额外的成本，**也不用充值语雀超级会员**。这个项目不仅解决了我长期以来的一个痛点，还大大提高了我的内容创作效率。我相信，这个解决方案也能帮助到许多和我有同样困扰的技术博主们。

## 1. 开发背景

作为一个热爱技术的程序员，我一直有记录和分享技术内容的习惯。最近几年，我一直使用语雀作为我的主要写作平台，因为它提供了优秀的编辑体验，特别是对技术文档的支持。

然而，我发现自己的内容被局限在了一个相对封闭的环境中。于是，我开始思考如何让我的内容触达更多读者，最终决定自建博客网站。

## 2. 实现思路

整个自动化的内容发布流水线主要包含以下几个关键组件：

1. **Elog**：将语雀文档自动同步到GitHub仓库。
2. **Contentlayer**：将Markdown文件转换为易于在React应用中使用的结构化数据。
3. **Vercel**：提供自动部署服务。
4. **YAML Front Matter**：定义文章的各种属性。
5. **自动提交百度索引**：提高SEO效果。
6. **自动生成sitemap**：便于搜索引擎索引。

## 3. 细节介绍

### 3.1 Elog

Elog是将语雀文档自动同步到GitHub的桥梁，支持多种写作平台。配置简单，使用方便。

### 3.2 Contentlayer

Contentlayer将Markdown文件转换为结构化数据，支持灵活的内容管理，提供类型安全和性能优化。

### 3.3 Vercel

Vercel与GitHub完美集成，提供自动部署和性能优化。设置简单，适合个人项目。

### 3.4 YAML Front Matter

通过YAML Front Matter，我们可以灵活控制每篇文章的元数据，增强博客的功能性和可用性。

### 3.5 SEO

实现自动生成和提交sitemap，确保搜索引擎能够全面地了解和索引我们的博客内容。

## 4. 网页实际演示

- **首页**：简单易用，支持Artalk的计数功能。
- **导航菜单**：自定义灵活，可以根据语雀知识库的排版来设计。
- **文章页**：包含章节列表、发布时间、阅读时间等信息。

## 5. 网站体验地址

- 国内：[https://offernow.cn/](https://offernow.cn/)
- 国际：[https://offer-now.vercel.app/](https://offer-now.vercel.app/)

## 6. TODO

未来可能的改进方向包括：

1. 网站搜索功能
2. 国际化支持
3. 内容变现探索
4. 移动端适配
5. 增强互动功能
6. 样式优化

希望这个项目能为其他技术博主提供一些启发，期待看到更多创新的内容发布解决方案涌现！

**项目地址：** [https://github.com/white0dew/OfferNow](https://github.com/white0dew/OfferNow)

**项目技术细节文章：**
[掘金：基于语雀+Next.js+Vercel实现免费的博客系统](https://juejin.cn/post/7390671667313934355)

7. 联系我/功能交流

如果你有任何问题、建议或合作意向，欢迎通过以下方式联系我：

- 邮箱：1373685219@qq.com
- 微信：whitedewstory

**这是我今年分享的第一个开源项目，希望大家会喜欢！** 🎇🎇
