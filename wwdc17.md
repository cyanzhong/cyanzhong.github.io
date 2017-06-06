# 从开发者的角度看 WWDC 带来的各种可能

一年一度的科技界春晚刚刚过去，相信都已经对 Apple 此次的主要更新有了个大致的了解，本文是以一个开发者的角度看看 iOS 11 API 层面的变化带来的机会和挑战。

注：本文基于 [iOS 11.0 Release Notes](http://adcdownload.apple.com/Documentation/Beta_Release_Notes_Jun_5_2017/iOS_11_beta_Release_Notes.pdf) 以及 [API Diffs](https://developer.apple.com/documentation?changes=latest_minor) 的内容编写。

# ARKit

此次 API 变化中最引人注目的当属 `ARKit`，这是一个 Apple 官方的 AR 框架，根据官方描述开发者可以通过 ARKit 集成 iOS 设备的摄像头和运动传感器，从而在应用或者游戏中提供增强现实的体验。是的，Apple 终于从官方层面对 AR 进行了支持，我想这对 AR 的从业者来说无疑是一个巨大的利好消息，期待在 iOS 平台看到更多有趣的 AR 内容。

# Core ML

要说这两年什么话题在互联网相关领域最火，我想答案是机器学习（Machine Learning），`Core ML` 的含义就是 `Core Machine Learning` (Apple 很喜欢以 Core 开头来命名自己的框架)，Apple 对 Core ML 的介绍言简意赅：（通过 Core ML 可以）将机器学习模型集成到您的应用程序中。其实这两年 ML 这个话题会比 AR 要更热，很期待 iOS 11 上面出现与此相关的各种内容。

# Core NFC

可以说十分厉害了，Apple 提供了操作 NFC 的框架，作为曾经对 NFC 技术嗤之以鼻的 Apple，这样的反转也算是喜闻乐见了。需要注意的是，这个框架只支持 iPhone 7/Plus 以上的机型。

# MusicKit

顾名思义，用来操作 `Apple Music` 的一个框架，例如在 Apple Music 中创建歌单，将歌曲添加到歌单等等操作，以及从 Apple Music 音乐库中播放音乐。正如 Apple 自己描述的那样，他是喜欢音乐的，这些年来对于音乐的持续性改造层出不穷，此次的 MusicKit 是一个与 Apple Music 深度结合的框架。

# Vision

计算机视觉相关的框架，用于在应用中提供人脸识别、特征检测和场景分类等操作。

# Message Filter Extension

一个全新的 App Extension，用于过滤垃圾短信。我相信这个对于中国用户来说是重大的好消息，毕竟短信在中国除了接收验证码也就是接收垃圾短信了。估计包括腾讯、360在内的各个团队都会有所动作。

# PDFKit

在此之前，在 iOS 平台显示简单的 PDF 是很简单的，但是要对其进行一些标注或选择的话就不太容易了，`PDFKit` 对此需求提供了支持，之后在 iOS 平台显示和操作 PDF 文档都会变得更容易。

# DeviceCheck

iOS 平台不让开发者收集设备真正的 Identifier（标识符）用以标识一台设备，这是众所周知的事情，所以近几年来 iOS 平台出现了一些解决方案，当然都不尽完美。根据 Apple 的描述，`DeviceCheck` 可以让开发者在保护好用户隐私的情况下，标识出该用户是否已经使用了开发者提供的促销，或者标识一个用户是否存在欺诈行为。

# 关于 32 位的应用

Apple 明确提到了在之后的 iOS 11 Beta 版本中，32 位应用将无法运行，这算是最后的一个信号了，长期没有对 64 位兼容的应用该升级了。

# 关于社交分享

在 iOS 8 里面，Apple 引入了 Social Framework，应用可以通过 Share Extension 撰写 Twitter 和微博等。在 iOS 11.0 Beta 1，这部分似乎被移除掉了。所有尝试在应用内弹出此类分享框的操作都不会成功，目前不太清除是有意为之还是 Beta 1 中的 bug。

以上就是对 iOS 11 初步的一点观察，目前 iOS 11.0 Beta 1 仍然处于很不稳定的阶段，并不推荐普通用户作为日常主力使用，以上。