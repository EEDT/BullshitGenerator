# 狗屁不通文章生成器
# BullshitGenerator

- [狗屁不通文章生成器](#%e7%8b%97%e5%b1%81%e4%b8%8d%e9%80%9a%e6%96%87%e7%ab%a0%e7%94%9f%e6%88%90%e5%99%a8)
- [BullshitGenerator](#bullshitgenerator)
  - [再次声明一下, 本项目生成的文章真的狗屁不通, 只能拿来搞笑, 请不要用于正规用途!](#%e5%86%8d%e6%ac%a1%e5%a3%b0%e6%98%8e%e4%b8%80%e4%b8%8b-%e6%9c%ac%e9%a1%b9%e7%9b%ae%e7%94%9f%e6%88%90%e7%9a%84%e6%96%87%e7%ab%a0%e7%9c%9f%e7%9a%84%e7%8b%97%e5%b1%81%e4%b8%8d%e9%80%9a-%e5%8f%aa%e8%83%bd%e6%8b%bf%e6%9d%a5%e6%90%9e%e7%ac%91-%e8%af%b7%e4%b8%8d%e8%a6%81%e7%94%a8%e4%ba%8e%e6%ad%a3%e8%a7%84%e7%94%a8%e9%80%94)
  - [再次声明一下, 本项目生成的文章真的狗屁不通, 只能拿来搞笑, 请不要用于正规用途!](#%e5%86%8d%e6%ac%a1%e5%a3%b0%e6%98%8e%e4%b8%80%e4%b8%8b-%e6%9c%ac%e9%a1%b9%e7%9b%ae%e7%94%9f%e6%88%90%e7%9a%84%e6%96%87%e7%ab%a0%e7%9c%9f%e7%9a%84%e7%8b%97%e5%b1%81%e4%b8%8d%e9%80%9a-%e5%8f%aa%e8%83%bd%e6%8b%bf%e6%9d%a5%e6%90%9e%e7%ac%91-%e8%af%b7%e4%b8%8d%e8%a6%81%e7%94%a8%e4%ba%8e%e6%ad%a3%e8%a7%84%e7%94%a8%e9%80%94-1)
  - [再次声明一下, 本项目生成的文章真的狗屁不通, 只能拿来搞笑, 请不要用于正规用途!](#%e5%86%8d%e6%ac%a1%e5%a3%b0%e6%98%8e%e4%b8%80%e4%b8%8b-%e6%9c%ac%e9%a1%b9%e7%9b%ae%e7%94%9f%e6%88%90%e7%9a%84%e6%96%87%e7%ab%a0%e7%9c%9f%e7%9a%84%e7%8b%97%e5%b1%81%e4%b8%8d%e9%80%9a-%e5%8f%aa%e8%83%bd%e6%8b%bf%e6%9d%a5%e6%90%9e%e7%ac%91-%e8%af%b7%e4%b8%8d%e8%a6%81%e7%94%a8%e4%ba%8e%e6%ad%a3%e8%a7%84%e7%94%a8%e9%80%94-2)
  - [关于Pull requests:](#%e5%85%b3%e4%ba%8epull-requests)
  - [关于中文变量名:](#%e5%85%b3%e4%ba%8e%e4%b8%ad%e6%96%87%e5%8f%98%e9%87%8f%e5%90%8d)
  - [关于生成算法](#%e5%85%b3%e4%ba%8e%e7%94%9f%e6%88%90%e7%ae%97%e6%b3%95)
  - [文章例子](#%e6%96%87%e7%ab%a0%e4%be%8b%e5%ad%90)
  - [例子](#%e4%be%8b%e5%ad%90)


偶尔需要一些中文文字用于GUI开发时测试文本渲染. __本项目只做这一项, 请勿用于其他任何用途__.
Needs to generate some texts to test if my GUI rendering codes good or not. so I made this.

## 再次声明一下, 本项目生成的文章真的狗屁不通, 只能拿来搞笑, 请不要用于正规用途!
## 再次声明一下, 本项目生成的文章真的狗屁不通, 只能拿来搞笑, 请不要用于正规用途!
## 再次声明一下, 本项目生成的文章真的狗屁不通, 只能拿来搞笑, 请不要用于正规用途!

本项目为python3版本, 还有由suulnnka修改在线版, 使用更加方便:
https://suulnnka.github.io/BullshitGenerator/index.html

下一步计划:
1. 防止文章过于内容重复
2. 加入更多啰嗦话.
1. 加入马三立<开会迷>里的内容
1. 加入手写体直接渲染出图片的功能(__仅仅用于测试本人的打印机是否工作正常, 请勿做它用__).

----

## 关于Pull requests:

鄙人每个requests都会仔细阅读, 但因近期事情较多, merge未必及时, 毕竟是业余项目, 请大家见谅. 如果未来实在更新不及时, 也欢迎有志之士替代本人继续本项目.

## 关于中文变量名:

平时撸码鄙人是不写中文变量名的, 本项目中的中文变量名只是最开始瞎写的时候边写语料边写代码时懒得切英文输入法了. 不过既然如此就保持吧!

## 关于生成算法

鄙人才疏学浅并不会任何自然语言处理相关算法. 而且目前比较偏爱简单有效的方式达到目的方式. 除非撞到了天花板, 否则暂时不会引入任何神经网络等算法. 不过欢迎任何人另开分支实现更复杂, 效果更好的算法. 不过除非效果拔群, 否则鄙人暂时不会融合.

## 文章例子
   我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 一天掉多少根头发，到底应该如何实现。 所以说我们可以从以上论述得到迈克尔·F·斯特利在不经意间这
说过，最具挑战性的挑战莫过于提升自我。这句话语虽然很短，但令我浮想联翩。 屠格涅夫在不经意间这样说过，你想成为幸福的人吗？但愿你首先学会吃得起苦。我希望诸位也能好好地体会这句话。 在这种困难的抉择下，本人思来想去，寝食难安。 一天掉多少根头发，发生了会如何，不发生又会如何。 经过上述讨论我们不得不面对一个非常尴尬的事实，那就是， 黑塞在不经意间这样说过，有勇气承担命运这才是英雄好汉。这句话语虽然很短，但令我浮想联翩。 经过上述讨论经过上述讨论乌申斯基在不经意间这样说过，学习是劳动，是充满思想的劳动。这句话语虽然很短，但令我浮想联翩。 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 我们可以发现所谓一天掉多少根头发，关键是一天掉多少根头发需要如何写。 我们可以发现我们可以发现我们不得不面对一个非常尴尬的事实，那就是， 每个人都不得不面对这些问题。  在面对这种问题时， 我们可以从以上论述得到而这些并不是完全重要，更加重要的问题是， 带着这些问题，我们来审视一下一天掉多少根头发。 俾斯麦曾经说过，对于不屈不挠的人来说，没有失败这回事。这句话让我深受感触生活中，若一天掉多少根头发出现了，我们就不得不考虑它出现了的事实。 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 生活中，若一天掉多少根头发出现了，我们就不得不考虑它出现了的事实。 
   生活中，若一天掉多少根头发出现了，我们就不得不考虑它出现了的事实。 每个人都不得不面对这些问题。  在面对这种问题时， 就我个人来说，一天掉多少根头发对
我的意义，不能不说非常重大。 一般来说， 在这种困难的抉择下，本人思来想去，寝食难安。 德谟克利特曾经说过，节制使快乐增加并使享受加强。这不禁令我深思。 总
结的来说， 卡耐基曾经说过，我们若已接受最坏的，就再没有什么损失。带着这句话，我们还要更加慎重的审视这个问题： 既然如此， 罗素·贝克曾经说过，一个人即使已
登上顶峰，也仍要自强不息。我希望诸位也能好好地体会这句话。 经过上述讨论要想清楚，一天掉多少根头发，到底是一种怎么样的存在。 生活中，若一天掉多少根头发出
现了，我们就不得不考虑它出现了的事实。 我们不得不面对一个非常尴尬的事实，那就是， 笛卡儿曾经说过，读一切好书，就是和许多高尚的人谈话。这句话语虽然很短，
但令我浮想联翩。 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 池田大作在不经意间这样说过，不要回避苦恼和困难，挺起身来向它挑战，进而克服
它。我希望诸位也能好好地体会这句话。 　　
   所谓一天掉多少根头发，关键是一天掉多少根头发需要如何写。 一天掉多少根头发因何而发生?王阳明曾经说过，故立志者，为学之心也；为学者，立志之事也。这启发
了我， 塞涅卡在不经意间这样说过，生命如同寓言，其价值不在与长短，而在与内容。带着这句话，我们还要更加慎重的审视这个问题： 既然如此， 我们可以发现每个人都
不得不面对这些问题。  在面对这种问题时， 我们都知道，只要有意义，那么就必须慎重考虑。 而这些并不是完全重要，更加重要的问题是， 现在，解决一天掉多少根头发
的问题，是非常非常重要的。 所以， 既然如此。 
　　郭沫若曾经说过，形成天才的决定因素应该是勤奋。我希望诸位也能好好地体会这句话。 史美尔斯在不经意间这样说过，书籍把我们引入最美好的社会，使我们认识各个时代的伟大智者。这不禁令我深思。 所谓一天掉多少根头发，关键是一天掉多少根头发需要如何写。 马克思曾经说过，一切节省，归根到底都归结为时间的节省。带着这句话，我们还要更加慎重的审视这个问题： 生活中，若一天掉多少根头发出现了，我们就不得不考虑它出现了的事实。 我认为， 塞内加在不经意间这样说过，勇气通往天堂，怯懦通往地狱。我希望诸位也能好好地体会这句话。 就我个人来说，一天掉多少根头发对我的意义，不能不说非常重大。 一天掉多少根头发，到底应该如何实现。 现在，解决一天掉多少根头发的问题，是非常非常重要的。 所以， 所谓一天掉多少根头发，关键是一天掉多少根头发需要如何写。 我们可以从以上论述得到我们可以从以上论述得到我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 富兰克林在不经意间这样说过，读书是易事，思索是难事，但两者缺一，便全无用处。这句话语虽然很短，但令我浮想联翩。 一般来讲，我们都必须务必慎重的考虑考虑。 要想清楚，一天掉多少根头发，到底是一种怎么样的存在。 因此要想清楚，一天掉多少根头发，到底是一种怎么样的存在。 一天掉多少根头发，发生了会如何，不发生又会如何。 问题的关键究竟为何? 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 莎士比亚在不经意间这样说过，那脑袋里的智慧，就像打火石里的火花一样，不去打它是不肯出来的。带着这句话，我们还要更加慎重的审视这个问题： 拉罗什福科曾经说过，我们唯一不会改正的缺点是软弱。这启发了我， 所以说。 
　　我们可以发现一般来说， 要想清楚，一天掉多少根头发，到底是一种怎么样的存在。 带着这些问题，我们来审视一下一天掉多少根头发。 王阳明曾经说过，故立志者，为学之心也；为学者，立志之事也。这句话让我深受感触这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 那么， 带着这些问题，我们来审视一下一天掉多少根头发。 了解清楚一天掉多少根头发到底是一种怎么样的存在，是解决一切问题的关键。 一天掉多少根头发，到底应该如何实现。 既然如何， 我们不得不面对一个非常尴尬的事实，那就是， 既然如此， 因此问题的关键究竟为何? 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 既然如何， 因此了解清楚一天掉多少根头发到底是一种怎么样的存在，是解决一切问题的关键。 一般来讲，我们都必须务必慎重的考虑考虑。 一天掉多少根头发，到底应该如何实现。 所谓一天掉多少根头发，关键是一天掉多少根头发需要如何写。 所谓一天掉多少根头发，关键是一天掉多少根头发需要如何写。 
　　了解清楚一天掉多少根头发到底是一种怎么样的存在，是解决一切问题的关键。 了解清楚一天掉多少根头发到底是一种怎么样的存在，是解决一切问题的关键。 伏尔泰在不经意间这样说过，不经巨大的困难，不会有伟大的事业。带着这句话，我们还要更加慎重的审视这个问题： 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 一天掉多少根头发，发生了会如何，不发生又会如何。 所以说一天掉多少根头发的发生，到底需要如何做到，不一天掉多少根头发的发生，又会如何产生。 既然如此， 要想清楚，一天掉多少根头发，到底是一种怎么样的存在。 现在，解决一天掉多少根头发的问题，是非常非常重要的。 所以， 一般来讲，我们都必须务必慎重的考虑考虑。 带着这些问题，我们来审视一下一天掉多少根头发。 
　　我们可以从以上论述得到所以说既然如何， 我们不得不面对一个非常尴尬的事实，那就是， 我们都知道，只要有意义，那么就必须慎重考虑。 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 一般来讲，我们都必须务必慎重的考虑考虑。 所谓一天掉多少根头发，关键是一天掉多少根头发需要如何写。 所以说一天掉多少根头发因何而发生?邓拓曾经说过，越是没有本领的就越加自命不凡。这启发了我， 我们可以从以上论述得到西班牙曾经说过，自己的鞋子，自己知道紧在哪里。这不禁令我深思。 了解清楚一天掉多少根头发到底是一种怎么样的存在，是解决一切问题的关键。 要想清楚，一天掉多少根头发，到底是一种怎么样的存在。 既然如何， 每个人都不得不面对这些问题。  在面对这种问题时， 伏尔泰在不经意间这样说过，不经巨大的困难，不会有伟大的事业。这不禁令我深思。 带着这些问题，我们来审视一下一天掉多少根头发。 而这些并不是完全重要，更加重要的问题是， 歌德在不经意间这样说过，读一本好书，就如同和一个高尚的人在交谈。我希望诸位也能好好地体会这句话。 一天掉多少根头发因何而发生?问题的关键究竟为何? 我们都知道，只要有意义，那么就必须慎重考虑。 那么， 了解清楚一天掉多少根头发到底是一种怎么样的存在，是解决一切问题的关键。 我们可以从以上论述得到我们可以发现带着这些问题，我们来审视一下一天掉多少根头发。 而这些并不是完全重要，更加重要的问题是， 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 我们不得不面对一个非常尴尬的事实，那就是， 生活中，若一天掉多少根头发出现了，我们就不得不考虑它出现了的事实。 带着这些问题，我们来审视一下一天掉多少根头发。 一般来讲，我们都必须务必慎重的考虑考虑。 
　　了解清楚一天掉多少根头发到底是一种怎么样的存在，是解决一切问题的关键。 
　　经过上述讨论我们可以发现日本谚语曾经说过，不幸可能成为通向幸福的桥梁。带着这句话，我们还要更加慎重的审视这个问题： 在这种困难的抉择下，本人思来想去，寝食难安。 问题的关键究竟为何? 一天掉多少根头发，到底应该如何实现。 既然如此， 了解清楚一天掉多少根头发到底是一种怎么样的存在，是解决一切问题的关键。 斯宾诺莎曾经说过，最大的骄傲于最大的自卑都表示心灵的最软弱无力。我希望诸位也能好好地体会这句话。 我认为， 一天掉多少根头发，发生了会如何，不发生又会如何。 经过上述讨论那么。 
　　一天掉多少根头发因何而发生?总结的来说， 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 所谓一天掉多少根头发，关键是一天掉多少根头发需要如何写。 那么， 我认为， 每个人都不得不面对这些问题。  在面对这种问题时， 我们可以从以上论述得到拉罗什夫科曾经说过，取得成就时坚持不懈，要比遭到失败时顽强不屈更重要。这启发了我， 总结的来说， 一般来讲，我们都必须务必慎重的考虑考虑。 一天掉多少根头发的发生，到底需要如何做到，不一天掉多少根头发的发生，又会如何产生。 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 歌德曾经说过，决定一个人的一生，以及整个命运的，只是一瞬之间。这启发了我。 
　　一般来说， 每个人都不得不面对这些问题。  在面对这种问题时， 所以说一天掉多少根头发的发生，到底需要如何做到，不一天掉多少根头发的发生，又会如何产生。 一天掉多少根头发的发生，到底需要如何做到，不一天掉多少根头发的发生，又会如何产生。 一天掉多少根头发，发生了会如何，不发生又会如何。 问题的关键究竟为何? 既然如何。 
　　一天掉多少根头发，到底应该如何实现。 在这种困难的抉择下，本人思来想去，寝食难安。 所谓一天掉多少根头发，关键是一天掉多少根头发需要如何写。 而这些并不是完全重要，更加重要的问题是， 所以说我们可以从以上论述得到这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 所以说莎士比亚在不经意间这样说过，意志命运往往背道而驰，决心到最后会全部推倒。这不禁令我深思。 那么， 一天掉多少根头发，到底应该如何实现。 
　　既然如何， 塞涅卡在不经意间这样说过，真正的人生，只有在经过艰难卓绝的斗争之后才能实现。我希望诸位也能好好地体会这句话。 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 现在，解决一天掉多少根头发的问题，是非常非常重要的。 所以， 每个人都不得不面对这些问题。  在面对这种问题时， 布尔沃在不经意间这样说过，要掌握书，莫被书掌握；要为生而读，莫为读而生。这句话语虽然很短，但令我浮想联翩。 每个人都不得不面对这些问题。  在面对这种问题时， 问题的关键究竟为何? 一天掉多少根头发的发生，到底需要如何做到，不一天掉多少根头发的发生，又会如何产生。 现在，解决一天掉多少根头发的问题，是非常非常重要的。 所以， 希腊曾经说过，最困难的事情就是认识自己。这句话语虽然很短，但令我浮想联翩。 既然如此， 我们可以发现就我个人来说，一天掉多少根头发对我的意义，不能不说非常重大。 我们可以从以上论述得到一天掉多少根头发因何而发生?既然如何， 既然如何， 洛克曾经说过，学到很多东西的诀窍，就是一下子不要学很多。这不禁令我深思。 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 在这种困难的抉择下，本人思来想去，寝食难安。 一天掉多少根头发，到底应该如何实现。 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 总结的来说， 一天掉多少根头发，到底应该如何实现。 
　　那么， 我们可以发现我们可以发现我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 在这种困难的抉择下，本人思来想去，寝食难安。 因此俾斯麦在不经意间这样说过，失败是坚忍的最后考验。我希望诸位也能好好地体会这句话。 因此了解清楚一天掉多少根头发到底是一种怎么样的存在，是解决一切问题的关键。 培根在不经意间这样说过，深窥自己的心，而后发觉一切的奇迹在你自己。这不禁令我深思。 每个人都不得不面对这些问题。  在面对这种问题时， 每个人都不得不面对这些问题。  在面对这种问题时， 我们可以从以上论述得到所谓一天掉多少根头发，关键是一天掉多少根头发需要如何写。 生活中，若一天掉多少根头发出现了，我们就不得不考虑它出现了的事实。 叔本华在不经意间这样说过，普通人只想到如何度过时间，有才能的人设法利用时间。这不禁令我深思。 迈克尔·F·斯特利曾经说过，最具挑战性的挑战莫过于提升自我。这启发了我， 一天掉多少根头发，发生了会如何，不发生又会如何。 而这些并不是完全重要，更加重要的问题是， 所谓一天掉多少根头发，关键是一天掉多少根头发需要如何写。 总结的来说， 经过上述讨论经过上述讨论在这种困难的抉择下，本人思来想去，寝食难安。 经过上述讨论而这些并不是完全重要，更加重要的问题是， 一天掉多少根头发，到底应该如何实现。 而这些并不是完全重要，更加重要的问题是， 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 了解清楚一天掉多少根头发到底是一种怎么样的存在，是解决一切问题的关键。 卡耐基曾经说过，一个不注意小事情的人，永远不会成就大事业。这不禁令我深思。 马云曾经说过，最大的挑战和突破在于用人，而用人最大的突破在于信任人。这句话让我深受感触拉罗什福科在不经意间这样说过，我们唯一不会改正的缺点是软弱。这启发了我。 
## 例子
每个人都不得不面对这些问题.  在面对这种问题时, 要想清楚, 等等, 到底是一种怎么样的存在. 这种事实对本人来说意义重大, 相信对这个世界也是有一定意义的.我认为, 等等, 发生了会如何, 不发生又会如何. 在这种困难的抉择下, 本人思来想去, 寝食难安.而这些并不是完全重要, 更加重要的问题是, . 
    从这个角度来看, 我们都知道, 只要有意义, 那么就必须慎重考虑.总结的来说, 歌德曾经说过, 没有人事先了解自己到底有多大的力量，直到他试过以后才知道。这真是一句令人满意的话,这样看来, 本人也是经过了深思熟虑,在每个日日夜夜思考这个问题. 这是不可避免的. . 
    每个人都不得不面对这些问题.  在面对这种问题时, 那么, 我们不妨可以这样来想: 我认为, 一般来说, 而这些并不是完全重要, 更加重要的问题是, 等等因何而发生?对我个人而言，等等不仅仅是一个重大的事件，还可能会改变我的人生. 既然如此, 了解清楚等等到底是一种怎么样的存在, 是解决一切问题的关键.. 
    一般来讲, 我们都必须务必慎重的考虑考虑. 等等的发生, 到底需要如何做到, 不等等的发生, 又会如何产生. 既然如何, 就我个人来说, 等等对我的意义, 不能不说非常重大. 在这种困难的抉择下, 本人思来想去, 寝食难安.所谓等等, 关键是等等需要如何写. 这是不可避免的. 总结的来说, 因此那么, 卡耐基曾经提到过, 我们若已接受最坏的，就再没有什么损失。这句话语虽然很短, 但令我浮想联翩. 我们都知道, 只要有意义, 那么就必须慎重考虑.经过上述讨论, 这属于既然如此, 我们不妨可以这样来想: 既然如何, 这属于本人也是经过了深思熟虑,在每个日日夜夜思考这个问题. 等等, 到底应该如何实现. 带着这些问题, 我们来审视一下等等. 
所谓等等, 关键是等等需要如何写. 生活中, 若等等出现了, 我们就不得不考虑它出现了的事实. 这样看来, 现在, 解决等等的问题, 是非常非常重要的. 所以, 等等似乎是一种巧合，但如果我们从一个更大的角度看待问题，这似乎是一种不可避免的事实. 一般来讲, 我们都必须务必慎重的考虑考虑. 可是，即使是这样，等等的出现仍然代表了一定的意义. 我们不得不面对一个非常尴尬的事实, 那就是, 现在, 解决等等的问题, 是非常非常重要的. 所以, 等等因何而发生?我们一般认为, 抓住了问题的关键, 其他一切则会迎刃而解.等等的发生, 到底需要如何做到, 不等等的发生, 又会如何产生. 等等似乎是一种巧合，但如果我们从一个更大的角度看待问题，这似乎是一种不可避免的事实. 对我个人而言，等等不仅仅是一个重大的事件，还可能会改变我的人生. 这种事实对本人来说意义重大, 相信对这个世界也是有一定意义的.生活中, 若等等出现了, 我们就不得不考虑它出现了的事实. 问题的关键究竟为何? 带着这些问题, 我们来审视一下等等. 乌申斯基说过一句著名的话, 学习是劳动，是充满思想的劳动。这真是一句令人满意的话,在这种不可避免的冲突下，我们必须解决这个问题. 了解清楚等等到底是一种怎么样的存在, 是解决一切问题的关键.我们不得不面对一个非常尴尬的事实, 那就是, 博说过一句著名的话, 一次失败，只是证明我们成功的决心还够坚强。 维这句话看似简单，但其中的阴郁不禁让人深思. 要想清楚, 等等, 到底是一种怎么样的存在. 屠格涅夫曾经感叹道, 你想成为幸福的人吗？但愿你首先学会吃得起苦。带着这句话, 我们还要更加慎重的审视这个问题: 等等, 发生了会如何, 不发生又会如何. 经过上述讨论, 在这种不可避免的冲突下，我们必须解决这个问题. 
