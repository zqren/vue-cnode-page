webpackJsonp([3,6],{111:function(t,i,a){var e=a(98);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(77)("5f9be914",e,!0)},133:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{ref:"articleRef",staticClass:"article",on:{scroll:function(i){t.getBottom(i)}}},[a("ul",{staticClass:"article-list"},t._l(t.articles,function(i,e){return a("li",{staticClass:"art-li"},[a("div",{staticClass:"list-first-line"},[a("router-link",{staticClass:"user-avatar",attrs:{to:{name:"user",params:{id:i.author.loginname}}}},[a("img",{staticClass:"headpic",attrs:{src:i.author.avatar_url}})]),t._v(" "),a("div",{staticClass:"create-time"},[t._v("\n                    "+t._s(t._f("getTime")(i.last_reply_at))+"\n                ")])],1),t._v(" "),a("router-link",{staticClass:"article-title",attrs:{to:{name:"topic",params:{id:i.id}},tag:"div"}},[t._v("\n                "+t._s(i.title)+"\n            ")]),t._v(" "),a("div",{staticClass:"list-last-line"},[a("div",{staticClass:"tab"},[a("span",{class:{active:i.good||i.top}},[t._v(t._s(t._f("getTabName")(i.tab,i.top,i.good)))])]),t._v(" "),a("div",{staticClass:"view-count"},[a("span",[t._v(t._s(i.visit_count))]),t._v(" "),a("span",{staticClass:"iconfont icon-chakan"})]),t._v(" "),a("div",{staticClass:"reply-count"},[a("span",[t._v(t._s(i.reply_count))]),t._v(" "),a("span",{staticClass:"iconfont icon-huifu"})])])],1)})),t._v(" "),a("back-top",{attrs:{isBackTopShow:t.backTopShow},on:{backTop:t.articleTop}}),t._v(" "),a("reload-page",{attrs:{isReloadShow:t.reloadShow},on:{reloadPage:t.reloadArticle}}),t._v(" "),a("load-comp",{attrs:{loadShow:t.isListShow}})],1)},staticRenderFns:[]}},79:function(t,i,a){a(111);var e=a(1)(a(83),a(133),"data-v-46706c20",null);t.exports=e.exports},83:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a(16),l=a.n(e),r=a(17),n=a.n(r),s=a(15),A=a.n(s);i.default={data:function(){return{isListShow:!0,limit:40,articles:[],reloadShow:!0,backTopShow:!1,timer:null}},created:function(){this.getArticleList()},methods:{reloadArticle:function(){this.isListShow=!0,this.limit=40,this.articleTop(),this.getArticleList()},articleTop:function(){var t=this;this.timer=setInterval(function(){var i=t.$refs.articleRef.scrollTop,a=Math.floor(-i/6);t.$refs.articleRef.scrollTop=i+a,t.isTop=!0,0==i&&(t.backTopShow=!1,clearInterval(t.timer))},25)},getArticleList:function(){var t=this,i=this.$route.query.tab?"/topics?limit="+this.limit+"&tab="+this.$route.query.tab:"/topics?limit="+this.limit;this.$http.get(i).then(function(i){t.$set(t.$data,"articles",i.data.data),t.isListShow=!1}).catch(function(t){console.log(t)})},getBottom:function(t){var i=t.target.scrollTop,a=t.target.scrollHeight,e=t.target.clientHeight;this.backTopShow=i>100,a-e==i&&(this.limit+=40,this.isListShow=!0,this.getArticleList())}},watch:{$route:function(t,i){this.reloadShow=!1,this.isListShow=!0,this.getArticleList()}},components:{loadComp:l.a,reloadPage:n.a,backTop:A.a}}},98:function(t,i,a){i=t.exports=a(76)(),i.push([t.i,".article[data-v-46706c20]{width:100%;height:100%;padding-bottom:42px;box-sizing:border-box;overflow-y:scroll}.article .article-list[data-v-46706c20]{width:100%}.article .article-list .art-li[data-v-46706c20]{width:100%;border-bottom:1px solid #e1e1e1;padding:0 10px;box-sizing:border-box}.article .article-list .art-li .list-first-line[data-v-46706c20]{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;padding:5px 0;box-sizing:border-box;border-bottom:1px dotted #f0f0f5}.article .article-list .art-li .list-first-line .user-avatar[data-v-46706c20]{-ms-flex-positive:1;flex-grow:1;margin-left:10px}.article .article-list .art-li .list-first-line .user-avatar img[data-v-46706c20]{width:20px;height:20px;border-radius:50%;border:1px solid #f0f0f5;background:#dcdcdc}.article .article-list .art-li .list-first-line .create-time[data-v-46706c20]{-ms-flex-positive:1;flex-grow:1;text-align:right;margin-right:10px;color:#999}.article .article-list .art-li .article-title[data-v-46706c20]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;color:#666;border-bottom:1px solid #f0f0f5;padding:10px;box-sizing:border-box}.article .article-list .art-li .list-last-line[data-v-46706c20]{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;padding:5px 0;box-sizing:border-box}.article .article-list .art-li .list-last-line .tab[data-v-46706c20]{-ms-flex-positive:5;flex-grow:5;margin-left:10px}.article .article-list .art-li .list-last-line .tab span[data-v-46706c20]{display:inline-block;width:auto;height:auto;padding:2px 5px;box-sizing:border-box;border-radius:3px;background:#dcdcdc;color:#999;font-size:12px}.article .article-list .art-li .list-last-line .tab span.active[data-v-46706c20]{background:#80bd01;color:#fff}.article .article-list .art-li .list-last-line .view-count[data-v-46706c20]{-ms-flex-positive:1;flex-grow:1;border-right:1px solid #f0f0f5;text-align:center;color:#999;font-size:14px}.article .article-list .art-li .list-last-line .view-count span.iconfont[data-v-46706c20]{font-size:14px;margin-left:5px}.article .article-list .art-li .list-last-line .reply-count[data-v-46706c20]{-ms-flex-positive:1;flex-grow:1;text-align:center;color:#999;font-size:14px}.article .article-list .art-li .list-last-line .reply-count span.iconfont[data-v-46706c20]{font-size:14px;margin-left:5px}","",{version:3,sources:["/home/travis/build/zqren/vue-cnode-page/src/components/article/articleList.vue"],names:[],mappings:"AACA,0BACE,WAAY,AACZ,YAAa,AACb,oBAAqB,AACrB,sBAAuB,AACvB,iBAAmB,CACpB,AACD,wCACE,UAAY,CACb,AACD,gDACE,WAAY,AACZ,gCAAiC,AACjC,eAAgB,AAChB,qBAAuB,CACxB,AACD,iEACE,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,qBAAsB,AAC1B,yBAA0B,AACtB,6BAA8B,AAClC,sBAAuB,AACnB,mBAAoB,AACxB,cAAe,AACf,sBAAuB,AACvB,gCAAkC,CACnC,AACD,8EACE,oBAAqB,AACjB,YAAa,AACjB,gBAAkB,CACnB,AACD,kFACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,yBAA0B,AAC1B,kBAAsB,CACvB,AACD,8EACE,oBAAqB,AACjB,YAAa,AACjB,iBAAkB,AAClB,kBAAmB,AACnB,UAAY,CACb,AACD,+DACE,gBAAiB,AACjB,uBAAwB,AACxB,oBAAqB,AACrB,qBAAsB,AACtB,WAAY,AACZ,gCAAiC,AACjC,aAAc,AACd,qBAAuB,CACxB,AACD,gEACE,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,qBAAsB,AAC1B,yBAA0B,AACtB,6BAA8B,AAClC,sBAAuB,AACnB,mBAAoB,AACxB,cAAe,AACf,qBAAuB,CACxB,AACD,qEACE,oBAAqB,AACjB,YAAa,AACjB,gBAAkB,CACnB,AACD,0EACE,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,sBAAuB,AACvB,kBAAmB,AACnB,mBAAsB,AACtB,WAAY,AACZ,cAAgB,CACjB,AACD,iFACE,mBAAoB,AACpB,UAAY,CACb,AACD,4EACE,oBAAqB,AACjB,YAAa,AACjB,+BAAgC,AAChC,kBAAmB,AACnB,WAAY,AACZ,cAAgB,CACjB,AACD,0FACE,eAAgB,AAChB,eAAiB,CAClB,AACD,6EACE,oBAAqB,AACjB,YAAa,AACjB,kBAAmB,AACnB,WAAY,AACZ,cAAgB,CACjB,AACD,2FACE,eAAgB,AAChB,eAAiB,CAClB",file:"articleList.vue",sourcesContent:["\n.article[data-v-46706c20] {\n  width: 100%;\n  height: 100%;\n  padding-bottom: 42px;\n  box-sizing: border-box;\n  overflow-y: scroll;\n}\n.article .article-list[data-v-46706c20] {\n  width: 100%;\n}\n.article .article-list .art-li[data-v-46706c20] {\n  width: 100%;\n  border-bottom: 1px solid #e1e1e1;\n  padding: 0 10px;\n  box-sizing: border-box;\n}\n.article .article-list .art-li .list-first-line[data-v-46706c20] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 5px 0;\n  box-sizing: border-box;\n  border-bottom: 1px dotted #f0f0f5;\n}\n.article .article-list .art-li .list-first-line .user-avatar[data-v-46706c20] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  margin-left: 10px;\n}\n.article .article-list .art-li .list-first-line .user-avatar img[data-v-46706c20] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 1px solid #f0f0f5;\n  background: gainsboro;\n}\n.article .article-list .art-li .list-first-line .create-time[data-v-46706c20] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  text-align: right;\n  margin-right: 10px;\n  color: #999;\n}\n.article .article-list .art-li .article-title[data-v-46706c20] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  color: #666;\n  border-bottom: 1px solid #f0f0f5;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.article .article-list .art-li .list-last-line[data-v-46706c20] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 5px 0;\n  box-sizing: border-box;\n}\n.article .article-list .art-li .list-last-line .tab[data-v-46706c20] {\n  -ms-flex-positive: 5;\n      flex-grow: 5;\n  margin-left: 10px;\n}\n.article .article-list .art-li .list-last-line .tab span[data-v-46706c20] {\n  display: inline-block;\n  width: auto;\n  height: auto;\n  padding: 2px 5px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  background: gainsboro;\n  color: #999;\n  font-size: 12px;\n}\n.article .article-list .art-li .list-last-line .tab span.active[data-v-46706c20] {\n  background: #80bd01;\n  color: #fff;\n}\n.article .article-list .art-li .list-last-line .view-count[data-v-46706c20] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  border-right: 1px solid #f0f0f5;\n  text-align: center;\n  color: #999;\n  font-size: 14px;\n}\n.article .article-list .art-li .list-last-line .view-count span.iconfont[data-v-46706c20] {\n  font-size: 14px;\n  margin-left: 5px;\n}\n.article .article-list .art-li .list-last-line .reply-count[data-v-46706c20] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  text-align: center;\n  color: #999;\n  font-size: 14px;\n}\n.article .article-list .art-li .list-last-line .reply-count span.iconfont[data-v-46706c20] {\n  font-size: 14px;\n  margin-left: 5px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=3.2eb80a9b83997f0fe275.js.map