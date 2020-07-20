(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1065:function(s,t,a){"use strict";a.r(t);var n=a(3),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_01、题目分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01、题目分析"}},[s._v("#")]),s._v(" 01、题目分析")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("第387题：字符串中的第一个唯一字符")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回  -1 。")])])])]),s._v(" "),n("p",[n("strong",[s._v("案例:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('s = "leetcode"\n返回 0.\n\ns = "loveleetcode",\n返回 2.  \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("**注意事项：**您可以假定该字符串只包含小写字母。")]),s._v(" "),n("blockquote",[n("center",[n("b",[s._v("常考题目，建议自行思考 1-2 分钟先～"),n("b")])])],1),s._v(" "),n("h2",{attrs:{id:"_02、题目图解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02、题目图解"}},[s._v("#")]),s._v(" 02、题目图解")]),s._v(" "),n("p",[s._v("题目不难，直接进行分析。由于字母共有 26 个，所以我们可以声明一个 26 个长度的数组（该种方法在本类题型很常用）因为字符串中字母可能是重复的，所以我们可以先进行第一次遍历，在数组中记录"),n("strong",[s._v("每个字母的最后一次出现的所在索引")]),s._v("。然后再通过一次循环，"),n("strong",[s._v("比较各个字母第一次出现的索引是否为最后一次的索引")]),s._v("。如果是，我们就找到了我们的目标，如果不是我们将其设为 -1（"),n("strong",[s._v("标示该元素非目标元素")]),s._v("）如果第二次遍历最终没有找到目标，直接返回 -1即可。")]),s._v(" "),n("br"),s._v(" "),n("p",[s._v("图解如下：")]),s._v(" "),n("img",{staticStyle:{zoom:"50%"},attrs:{src:a(530),alt:"PNG"}}),s._v(" "),n("h2",{attrs:{id:"_03、go语言示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_03、go语言示例"}},[s._v("#")]),s._v(" 03、GO语言示例")]),s._v(" "),n("p",[s._v("根据以上分析，可以得到代码如下：")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("firstUniqChar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" arr "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("k "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" s "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("k "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("k "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" s "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("k "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" i\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("k "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])])])}),[],!1,null,null,null);t.default=r.exports},530:function(s,t,a){s.exports=a.p+"assets/img/1.458698c8.jpg"}}]);