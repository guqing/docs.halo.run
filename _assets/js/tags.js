/*! Wiki.js - wiki.js.org - Licensed under AGPL */
(this.webpackJsonp=this.webpackJsonp||[]).push([["tags"],{"./client/components/editor/editor-code.vue":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"editor-code"},[s("div",{staticClass:"editor-code-main"},[s("div",{staticClass:"editor-code-sidebar"},[s("v-tooltip",{attrs:{right:"",color:"teal"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[s("v-btn",e._g({staticClass:"animated fadeInLeft mx-0",attrs:{icon:"",tile:"",dark:"",disabled:""}},o),[s("v-icon",[e._v("mdi-link-plus")])],1)]}}])},[s("span",[e._v(e._s(e.$t("editor:markup.insertLink")))])]),s("v-tooltip",{attrs:{right:"",color:"teal"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[s("v-btn",e._g({staticClass:"mt-3 animated fadeInLeft wait-p1s mx-0",attrs:{icon:"",tile:"",dark:""},on:{click:function(t){return e.toggleModal("editorModalMedia")}}},o),[s("v-icon",{attrs:{color:"editorModalMedia"===e.activeModal?"teal":""}},[e._v("mdi-folder-multiple-image")])],1)]}}])},[s("span",[e._v(e._s(e.$t("editor:markup.insertAssets")))])]),s("v-tooltip",{attrs:{right:"",color:"teal"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[s("v-btn",e._g({staticClass:"mt-3 animated fadeInLeft wait-p2s mx-0",attrs:{icon:"",tile:"",dark:"",disabled:""},on:{click:function(t){return e.toggleModal("editorModalBlocks")}}},o),[s("v-icon",{attrs:{color:"editorModalBlocks"===e.activeModal?"teal":""}},[e._v("mdi-view-dashboard-outline")])],1)]}}])},[s("span",[e._v(e._s(e.$t("editor:markup.insertBlock")))])]),s("v-tooltip",{attrs:{right:"",color:"teal"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[s("v-btn",e._g({staticClass:"mt-3 animated fadeInLeft wait-p3s mx-0",attrs:{icon:"",tile:"",dark:"",disabled:""}},o),[s("v-icon",[e._v("mdi-code-braces")])],1)]}}])},[s("span",[e._v(e._s(e.$t("editor:markup.insertCodeBlock")))])]),s("v-tooltip",{attrs:{right:"",color:"teal"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[s("v-btn",e._g({staticClass:"mt-3 animated fadeInLeft wait-p4s mx-0",attrs:{icon:"",tile:"",dark:"",disabled:""}},o),[s("v-icon",[e._v("mdi-library-video")])],1)]}}])},[s("span",[e._v(e._s(e.$t("editor:markup.insertVideoAudio")))])]),s("v-tooltip",{attrs:{right:"",color:"teal"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[s("v-btn",e._g({staticClass:"mt-3 animated fadeInLeft wait-p5s mx-0",attrs:{icon:"",tile:"",dark:"",disabled:""}},o),[s("v-icon",[e._v("mdi-chart-multiline")])],1)]}}])},[s("span",[e._v(e._s(e.$t("editor:markup.insertDiagram")))])]),s("v-tooltip",{attrs:{right:"",color:"teal"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[s("v-btn",e._g({staticClass:"mt-3 animated fadeInLeft wait-p6s mx-0",attrs:{icon:"",tile:"",dark:"",disabled:""}},o),[s("v-icon",[e._v("mdi-function-variant")])],1)]}}])},[s("span",[e._v(e._s(e.$t("editor:markup.insertMathExpression")))])]),e.$vuetify.breakpoint.mdAndUp?[s("v-spacer"),s("v-tooltip",{attrs:{right:"",color:"teal"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[s("v-btn",e._g({staticClass:"mt-3 animated fadeInLeft wait-p8s mx-0",attrs:{icon:"",tile:"",dark:""},on:{click:e.toggleFullscreen}},o),[s("v-icon",[e._v("mdi-arrow-expand-all")])],1)]}}],null,!1,3552248366)},[s("span",[e._v(e._s(e.$t("editor:markup.distractionFreeMode")))])])]:e._e()],2),s("div",{staticClass:"editor-code-editor"},[s("textarea",{ref:"cm"})])]),s("v-system-bar",{staticClass:"editor-code-sysbar",attrs:{dark:"",status:"",color:"grey darken-3"}},[s("div",{staticClass:"caption editor-code-sysbar-locale"},[e._v(e._s(e.locale.toUpperCase()))]),s("div",{staticClass:"caption px-3"},[e._v("/"+e._s(e.path))]),e.$vuetify.breakpoint.mdAndUp?[s("v-spacer"),s("div",{staticClass:"caption"},[e._v("Code")]),s("v-spacer"),s("div",{staticClass:"caption"},[e._v("Ln "+e._s(e.cursorPos.line+1)+", Col "+e._s(e.cursorPos.ch+1))])]:e._e()],2)],1)};o._withStripped=!0;var i=s("./node_modules/lodash/last.js"),n=s.n(i),a=s("./node_modules/lodash/startsWith.js"),l=s.n(a),d=s("./node_modules/lodash/times.js"),r=s.n(d),c=s("./node_modules/lodash/flatten.js"),u=s.n(c),m=s("./node_modules/vuex-pathify/dist/vuex-pathify.js"),v=s("./node_modules/codemirror/lib/codemirror.js"),p=s.n(v),g=(s("./node_modules/codemirror/lib/codemirror.css"),s("./node_modules/codemirror/mode/htmlmixed/htmlmixed.js"),s("./node_modules/codemirror/addon/selection/active-line.js"),s("./node_modules/codemirror/addon/display/fullscreen.js"),s("./node_modules/codemirror/addon/display/fullscreen.css"),s("./node_modules/codemirror/addon/selection/mark-selection.js"),s("./node_modules/codemirror/addon/search/searchcursor.js"),{data:()=>({cm:null,cursorPos:{ch:0,line:1}}),computed:{isMobile(){return this.$vuetify.breakpoint.smAndDown},locale:Object(m.get)("page/locale"),path:Object(m.get)("page/path"),mode:Object(m.get)("editor/mode"),activeModal:Object(m.sync)("editor/activeModal")},methods:{toggleModal(e){this.activeModal=this.activeModal===e?"":e,this.helpShown=!1},closeAllModal(){this.activeModal="",this.helpShown=!1},insertAtCursor({content:e}){const t=this.cm.doc.getCursor("head");this.cm.doc.replaceRange(e,t)},insertAfter({content:e,newLine:t}){const s=this.cm.doc.getCursor("to").line,o=this.cm.doc.getLine(s).length;this.cm.doc.replaceRange(t?"\n".concat(e,"\n"):e,{line:s,ch:o+1})},insertBeforeEachLine({content:e,after:t}){let s=[];if(this.cm.doc.somethingSelected()?s=u()(this.cm.doc.listSelections().map(e=>{const t=Math.abs(e.anchor.line-e.head.line)+1,s=e.anchor.line>e.head.line?e.head.line:e.anchor.line;return r()(t,e=>e+s)})):s.push(this.cm.doc.getCursor("head").line),s.forEach(t=>{let s=this.cm.doc.getLine(t);const o=s.length;l()(s,e)&&(s=s.substring(e.length)),this.cm.doc.replaceRange(e+s,{line:t,ch:0},{line:t,ch:o})}),t){const e=n()(s);this.cm.doc.replaceRange("\n".concat(t,"\n"),{line:e,ch:this.cm.doc.getLine(e).length+1})}},positionSync(e){this.cursorPos=e.getCursor("head")},toggleFullscreen(){this.cm.setOption("fullScreen",!0)},refresh(){this.$nextTick(()=>{this.cm.refresh()})}},mounted(){this.$store.set("editor/editorKey","code"),"create"===this.mode&&this.$store.set("editor/content","<h1>Title</h1>\n\n<p>Some text here</p>"),this.cm=p.a.fromTextArea(this.$refs.cm,{tabSize:2,mode:"text/html",theme:"wikijs-dark",lineNumbers:!0,lineWrapping:!0,line:!0,styleActiveLine:!0,highlightSelectionMatches:{annotateScrollbar:!0},viewportMargin:50,inputStyle:"contenteditable",allowDropFileTypes:["image/jpg","image/png","image/svg","image/jpeg","image/gif"]}),this.cm.setValue(this.$store.get("editor/content")),this.cm.on("change",e=>{this.$store.set("editor/content",e.getValue())}),this.$vuetify.breakpoint.mdAndUp?this.cm.setSize(null,"calc(100vh - 64px - 24px)"):this.cm.setSize(null,"calc(100vh - 56px - 16px)");const e={F11(e){e.setOption("fullScreen",!e.getOption("fullScreen"))},Esc(e){e.getOption("fullScreen")&&e.setOption("fullScreen",!1)}};this.cm.setOption("extraKeys",e),this.cm.on("cursorActivity",e=>{this.positionSync(e)}),this.$root.$on("editorInsert",e=>{switch(e.kind){case"IMAGE":let t='<img src="'.concat(e.path,'" alt="').concat(e.text,'"');e.align&&""!==e.align&&(t+=' class="align-'.concat(e.align,'"')),t+=" />",this.insertAtCursor({content:t});break;case"BINARY":this.insertAtCursor({content:'<a href="'.concat(e.path,'" title="').concat(e.text,'">').concat(e.text,"</a>")})}}),this.$root.$on("saveConflict",()=>{this.toggleModal("editorModalConflict")}),this.$root.$on("overwriteEditorContent",()=>{this.cm.setValue(this.$store.get("editor/content"))})},beforeDestroy(){this.$root.$off("editorInsert")}}),h=(s("./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),_=s("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),f=s.n(_),y=s("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),b=s("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),j=s("./node_modules/vuetify/lib/components/VGrid/VSpacer.js"),k=s("./node_modules/vuetify/lib/components/VSystemBar/VSystemBar.js"),x=s("./node_modules/vuetify/lib/components/VTooltip/VTooltip.js"),V=Object(h.a)(g,o,[],!1,null,null,null);f()(V,{VBtn:y.a,VIcon:b.a,VSpacer:j.a,VSystemBar:k.a,VTooltip:x.a}),V.options.__file="client/components/editor/editor-code.vue";t.default=V.exports},"./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){"use strict";var o=s("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&");s.n(o).a},"./client/components/new-page.vue":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("div",{staticClass:"newpage"},[s("div",{staticClass:"newpage-content"},[s("img",{staticClass:"animated fadeIn",attrs:{src:"/_assets/svg/icon-delete-file.svg",alt:"Not Found"}}),s("div",{staticClass:"headline"},[e._v(e._s(e.$t("newpage.title")))]),s("div",{staticClass:"subtitle-1 mt-3"},[e._v(e._s(e.$t("newpage.subtitle")))]),s("v-btn",{staticClass:"mt-5",attrs:{href:"/e/"+e.locale+"/"+e.path,"x-large":""}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),s("span",[e._v(e._s(e.$t("newpage.create")))])],1),s("v-btn",{staticClass:"mt-5",attrs:{color:"purple lighten-3",href:"javascript:window.history.go(-1);",outlined:""}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-arrow-left")]),s("span",[e._v(e._s(e.$t("newpage.goback")))])],1)],1)])])};o._withStripped=!0;var i={props:{locale:{type:String,default:"en"},path:{type:String,default:"home"}},data:()=>({})},n=s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),a=s("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),l=s.n(a),d=s("./node_modules/vuetify/lib/components/VApp/VApp.js"),r=s("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),c=s("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),u=Object(n.a)(i,o,[],!1,null,null,null);l()(u,{VApp:d.a,VBtn:r.a,VIcon:c.a}),u.options.__file="client/components/new-page.vue";t.default=u.exports},"./client/components/source.vue":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",{staticClass:"source",attrs:{dark:e.$vuetify.theme.dark}},[s("nav-header"),s("v-content",[s("v-toolbar",{attrs:{color:"primary",dark:""}},[e.versionId>0?s("i18next",{staticClass:"subheading",attrs:{path:"common:page.viewingSourceVersion",tag:"div"}},[s("strong",{attrs:{place:"date",title:e.$options.filters.moment(e.versionDate,"LLL")}},[e._v(e._s(e._f("moment")(e.versionDate,"lll")))]),s("strong",{attrs:{place:"path"}},[e._v("/"+e._s(e.path))])]):s("i18next",{staticClass:"subheading",attrs:{path:"common:page.viewingSource",tag:"div"}},[s("strong",{attrs:{place:"path"}},[e._v("/"+e._s(e.path))])]),e.$vuetify.breakpoint.mdAndUp?[s("v-spacer"),s("div",{staticClass:"caption blue--text text--lighten-3"},[e._v(e._s(e.$t("common:page.id",{id:e.pageId})))]),e.versionId>0?s("div",{staticClass:"caption blue--text text--lighten-3 ml-4"},[e._v(e._s(e.$t("common:page.versionId",{id:e.versionId})))]):e._e(),e.versionId>0?s("v-btn",{staticClass:"ml-4",attrs:{depressed:"",color:"blue darken-1"},on:{click:e.goHistory}},[s("v-icon",[e._v("mdi-history")])],1):e._e(),s("v-btn",{staticClass:"ml-4",attrs:{depressed:"",color:"blue darken-1"},on:{click:e.goLive}},[e._v(e._s(e.$t("common:page.returnNormalView")))])]:e._e()],2),s("v-card",{attrs:{tile:""}},[s("v-card-text",[s("v-card",{staticClass:"grey radius-7",class:e.$vuetify.theme.dark?"darken-4":"lighten-4",attrs:{flat:""}},[s("v-card-text",[s("pre",[s("code",[e._t("default")],2)])])],1)],1)],1)],1),s("nav-footer"),s("notify"),s("search-results")],1)};o._withStripped=!0;var i=s("./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=script&lang=js&").a,n=(s("./client/components/source.vue?vue&type=style&index=0&lang=scss&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),a=s("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),l=s.n(a),d=s("./node_modules/vuetify/lib/components/VApp/VApp.js"),r=s("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),c=s("./node_modules/vuetify/lib/components/VCard/VCard.js"),u=s("./node_modules/vuetify/lib/components/VCard/index.js"),m=s("./node_modules/vuetify/lib/components/VContent/VContent.js"),v=s("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),p=s("./node_modules/vuetify/lib/components/VGrid/VSpacer.js"),g=s("./node_modules/vuetify/lib/components/VToolbar/VToolbar.js"),h=Object(n.a)(i,o,[],!1,null,null,null);l()(h,{VApp:d.a,VBtn:r.a,VCard:c.a,VCardText:u.b,VContent:m.a,VIcon:v.a,VSpacer:p.a,VToolbar:g.a}),h.options.__file="client/components/source.vue";t.default=h.exports},"./client/components/source.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){"use strict";var o=s("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=style&index=0&lang=scss&");s.n(o).a},"./client/components/tags.vue":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",{staticClass:"tags",attrs:{dark:e.$vuetify.theme.dark}},[s("nav-header"),s("v-navigation-drawer",{staticClass:"pb-0 elevation-1",attrs:{app:"",fixed:"",clipped:"",right:e.$vuetify.rtl,permanent:"",width:"300"}},[s("vue-scroll",{attrs:{ops:e.scrollStyle}},[s("v-list",{attrs:{dense:"",nav:""}},[s("v-list-item",{attrs:{href:"/"}},[s("v-list-item-icon",[s("v-icon",[e._v("mdi-home")])],1),s("v-list-item-title",[e._v(e._s(e.$t("common:header.home")))])],1),e._l(e.tagsGrouped,(function(t,o){return[s("v-divider",{staticClass:"my-2"}),s("v-subheader",{key:"tagGroup-"+o,staticClass:"pl-4"},[e._v(e._s(o))]),e._l(t,(function(t){return s("v-list-item",{key:"tag-"+t.tag,on:{click:function(s){return e.toggleTag(t.tag)}}},[s("v-list-item-icon",[e.isSelected(t.tag)?s("v-icon",{attrs:{color:"primary"}},[e._v("mdi-checkbox-intermediate")]):s("v-icon",[e._v("mdi-checkbox-blank-outline")])],1),s("v-list-item-title",[e._v(e._s(t.title))])],1)}))]}))],2)],1)],1),s("v-content",{staticClass:"grey",class:e.$vuetify.theme.dark?"darken-4-d5":"lighten-3"},[s("v-toolbar",{attrs:{color:"primary",dark:"",flat:"",height:"58"}},[e.selection.length>0?[s("div",{staticClass:"overline mr-3 animated fadeInLeft"},[e._v(e._s(e.$t("tags:currentSelection")))]),e._l(e.tagsSelected,(function(t){return s("v-chip",{key:"tagSelected-"+t.tag,staticClass:"mr-3 primary--text",attrs:{color:"white",close:""},on:{"click:close":function(s){return e.toggleTag(t.tag)}}},[e._v(e._s(t.title))])})),s("v-spacer"),s("v-btn",{staticClass:"animated fadeIn",attrs:{small:"",outlined:"",color:"blue lighten-4",rounded:""},on:{click:function(t){e.selection=[]}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-close")]),s("span",[e._v(e._s(e.$t("tags:clearSelection")))])],1)]:[s("v-icon",{staticClass:"mr-3 animated fadeInRight"},[e._v("mdi-arrow-left")]),s("div",{staticClass:"overline animated fadeInRight"},[e._v(e._s(e.$t("tags:selectOneMoreTags")))])]],2),s("v-toolbar",{attrs:{color:e.$vuetify.theme.dark?"grey darken-4-l5":"grey lighten-4",flat:"",height:"58"}},[s("v-text-field",{staticClass:"tags-search",attrs:{label:e.$t("tags:searchWithinResultsPlaceholder"),solo:"","hide-details":"",flat:"",rounded:"","single-line":"",height:"40","prepend-icon":"mdi-text-box-search-outline","append-icon":"mdi-arrow-right",clearable:""},model:{value:e.innerSearch,callback:function(t){e.innerSearch=t},expression:"innerSearch"}}),e.locales.length>1?[s("v-divider",{staticClass:"mx-3",attrs:{vertical:""}}),s("div",{staticClass:"overline"},[e._v(e._s(e.$t("tags:locale")))]),s("v-select",{staticClass:"ml-2",staticStyle:{"max-width":"170px"},attrs:{items:e.locales,"background-color":e.$vuetify.theme.dark?"grey darken-3":"white","hide-details":"",label:e.$t("tags:locale"),"item-text":"name","item-value":"code",rounded:"","single-line":"",dense:"",height:"40"},model:{value:e.locale,callback:function(t){e.locale=t},expression:"locale"}})]:e._e(),s("v-divider",{staticClass:"mx-3",attrs:{vertical:""}}),s("div",{staticClass:"overline"},[e._v(e._s(e.$t("tags:orderBy")))]),s("v-select",{staticClass:"ml-2",staticStyle:{"max-width":"250px"},attrs:{items:e.orderByItems,"background-color":e.$vuetify.theme.dark?"grey darken-3":"white","hide-details":"",label:e.$t("tags:orderBy"),rounded:"","single-line":"",dense:"",height:"40"},model:{value:e.orderBy,callback:function(t){e.orderBy=t},expression:"orderBy"}}),s("v-btn-toggle",{staticClass:"ml-2",attrs:{rounded:"",mandatory:""},model:{value:e.orderByDirection,callback:function(t){e.orderByDirection=t},expression:"orderByDirection"}},[s("v-btn",{attrs:{text:"",height:"40"}},[s("v-icon",{attrs:{size:"20"}},[e._v("mdi-chevron-double-up")])],1),s("v-btn",{attrs:{text:"",height:"40"}},[s("v-icon",{attrs:{size:"20"}},[e._v("mdi-chevron-double-down")])],1)],1)],2),s("v-divider"),e.selection.length<1?s("div",{staticClass:"text-center pt-10"},[s("img",{attrs:{src:"/_assets/svg/icon-price-tag.svg"}}),s("div",{staticClass:"subtitle-2 grey--text"},[e._v(e._s(e.$t("tags:selectOneMoreTagsHint")))])]):s("div",{staticClass:"px-5 py-2"},[s("v-data-iterator",{ref:"dude",attrs:{items:e.pages,"items-per-page":4,search:e.innerSearch,loading:e.isLoading,options:e.pagination,"hide-default-footer":""},on:{"update:options":function(t){e.pagination=t}},scopedSlots:e._u([{key:"loading",fn:function(){return[s("div",{staticClass:"text-center pt-10"},[s("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:"96",width:"2"}}),s("div",{staticClass:"subtitle-2 grey--text mt-5"},[e._v(e._s(e.$t("tags:retrievingResultsLoading")))])],1)]},proxy:!0},{key:"no-data",fn:function(){return[s("div",{staticClass:"text-center pt-10"},[s("img",{attrs:{src:"/_assets/svg/icon-info.svg"}}),s("div",{staticClass:"subtitle-2 grey--text"},[e._v(e._s(e.$t("tags:noResults")))])])]},proxy:!0},{key:"no-results",fn:function(){return[s("div",{staticClass:"text-center pt-10"},[s("img",{attrs:{src:"/_assets/svg/icon-info.svg"}}),s("div",{staticClass:"subtitle-2 grey--text"},[e._v(e._s(e.$t("tags:noResultsWithFilter")))])])]},proxy:!0},{key:"default",fn:function(t){return[s("v-row",{attrs:{align:"stretch"}},e._l(t.items,(function(t){return s("v-col",{key:"page-"+t.id,attrs:{cols:"12",lg:"6"}},[s("v-card",{staticClass:"radius-7",class:e.$vuetify.theme.dark?"grey darken-4":"",staticStyle:{height:"100%"},on:{click:function(s){return e.goTo(t)}}},[s("v-card-text",[s("div",{staticClass:"d-flex flex-row align-center"},[s("div",{staticClass:"body-1"},[s("strong",{staticClass:"primary--text"},[e._v(e._s(t.title))])]),s("v-spacer"),s("i18next",{staticClass:"caption",attrs:{tag:"div",path:"tags:pageLastUpdated"}},[s("span",{attrs:{place:"date"}},[e._v(e._s(e._f("moment")(t.updatedAt,"from")))])])],1),s("div",{staticClass:"body-2 grey--text"},[e._v(e._s(t.description||"---"))]),s("v-divider",{staticClass:"my-2"}),s("div",{staticClass:"d-flex flex-row align-center"},[s("v-chip",{staticClass:"overline",attrs:{small:"",label:"",color:e.$vuetify.theme.dark?"grey darken-3-l5":"grey lighten-4"}},[e._v(e._s(t.locale))]),s("div",{staticClass:"caption ml-1"},[e._v("/ "+e._s(t.path))])],1)],1)],1)],1)})),1)]}}])}),this.pageTotal>1?s("div",{staticClass:"text-center py-2 animated fadeInDown"},[s("v-pagination",{attrs:{length:e.pageTotal},model:{value:e.pagination.page,callback:function(t){e.$set(e.pagination,"page",t)},expression:"pagination.page"}})],1):e._e()],1)],1),s("nav-footer"),s("notify"),s("search-results")],1)};o._withStripped=!0;var i=s("./node_modules/lodash/cloneDeep.js"),n=s.n(i),a=s("./node_modules/lodash/set.js"),l=s.n(a),d=s("./node_modules/lodash/without.js"),r=s.n(d),c=s("./node_modules/lodash/concat.js"),u=s.n(c),m=s("./node_modules/lodash/compact.js"),v=s.n(m),p=s("./node_modules/lodash/includes.js"),g=s.n(p),h=s("./node_modules/lodash/filter.js"),_=s.n(h),f=s("./node_modules/lodash/groupBy.js"),y=s.n(f),b=s("./node_modules/vue-router/dist/vue-router.common.js"),j=s.n(b),k=s("./client/graph/common/common-pages-query-tags.gql"),x=s.n(k),V=s("./client/graph/common/common-pages-query-list.gql"),C=s.n(V);var S={i18nOptions:{namespaces:"tags"},data(){return{tags:[],selection:[],innerSearch:"",locale:"any",locales:[],orderBy:"title",orderByDirection:0,pagination:{page:1,itemsPerPage:12,mustSort:!0,sortBy:["title"],sortDesc:[!1]},pages:[],isLoading:!0,scrollStyle:{vuescroll:{},scrollPanel:{initialScrollY:0,initialScrollX:0,scrollingX:!1,easing:"easeOutQuad",speed:1e3,verticalNativeBarPos:this.$vuetify.rtl?"left":"right"},rail:{gutterOfEnds:"2px"},bar:{onlyShowBarOnScroll:!1,background:"#CCC",hoverStyle:{background:"#999"}}}}},computed:{tagsGrouped(){return y()(this.tags,e=>e.title.charAt(0).toUpperCase())},tagsSelected(){return _()(this.tags,e=>g()(this.selection,e.tag))},pageTotal(){return Math.ceil(this.pages.length/this.pagination.itemsPerPage)},orderByItems(){return[{text:this.$t("tags:orderByField.creationDate"),value:"createdAt"},{text:this.$t("tags:orderByField.ID"),value:"id"},{text:this.$t("tags:orderByField.lastModified"),value:"updatedAt"},{text:this.$t("tags:orderByField.path"),value:"path"},{text:this.$t("tags:orderByField.title"),value:"title"}]}},watch:{locale(e,t){this.rebuildURL()},orderBy(e,t){this.rebuildURL(),this.pagination.sortBy=[e]},orderByDirection(e,t){this.rebuildURL(),this.pagination.sortDesc=[1===e]}},router:new j.a({mode:"history",base:"/t"}),created(){this.$store.commit("page/SET_MODE","tags"),this.selection=v()(this.$route.path.split("/"))},mounted(){this.locales=u()([{name:this.$t("tags:localeAny"),code:"any"}],siteLangs.length>0?siteLangs:[])},methods:{toggleTag(e){g()(this.selection,e)?this.selection=r()(this.selection,e):this.selection.push(e),this.rebuildURL()},isSelected(e){return g()(this.selection,e)},rebuildURL(){let e={path:"/"+this.selection.join("/")};"any"!==this.locale&&l()(e,"query.lang",this.locale),"TITLE"!==this.orderBy&&l()(e,"query.sort",this.orderBy.toLowerCase()),0!==this.orderByDirection&&l()(e,"query.dir",0===this.orderByDirection?"asc":"desc"),this.$router.push(e)},goTo(e){window.location.assign("/".concat(e.locale,"/").concat(e.path))}},apollo:{tags:{query:x.a,fetchPolicy:"cache-and-network",update:e=>n()(e.pages.tags),watchLoading(e){this.$store.commit("loading".concat(e?"Start":"Stop"),"tags-refresh")}},pages:{query:C.a,fetchPolicy:"cache-and-network",update:e=>n()(e.pages.list),watchLoading(e){this.isLoading=e,this.$store.commit("loading".concat(e?"Start":"Stop"),"pages-refresh")},variables(){return{locale:"any"===this.locale?null:this.locale,tags:this.selection}},skip(){return this.selection.length<1}}}},$=(s("./client/components/tags.vue?vue&type=style&index=0&lang=scss&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),w=s("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),B=s.n(w),L=s("./node_modules/vuetify/lib/components/VApp/VApp.js"),I=s("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),N=s("./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js"),D=s("./node_modules/vuetify/lib/components/VCard/VCard.js"),T=s("./node_modules/vuetify/lib/components/VCard/index.js"),A=s("./node_modules/vuetify/lib/components/VChip/VChip.js"),P=s("./node_modules/vuetify/lib/components/VGrid/VCol.js"),M=s("./node_modules/vuetify/lib/components/VContent/VContent.js"),O=s("./node_modules/vuetify/lib/components/VDataIterator/VDataIterator.js"),F=s("./node_modules/vuetify/lib/components/VDivider/VDivider.js"),E=s("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),z=s("./node_modules/vuetify/lib/components/VList/VList.js"),q=s("./node_modules/vuetify/lib/components/VList/VListItem.js"),R=s("./node_modules/vuetify/lib/components/VList/VListItemIcon.js"),U=s("./node_modules/vuetify/lib/components/VList/index.js"),G=s("./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js"),H=s("./node_modules/vuetify/lib/components/VPagination/VPagination.js"),W=s("./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js"),J=s("./node_modules/vuetify/lib/components/VGrid/VRow.js"),Q=s("./node_modules/vuetify/lib/components/VSelect/VSelect.js"),K=s("./node_modules/vuetify/lib/components/VGrid/VSpacer.js"),X=s("./node_modules/vuetify/lib/components/VSubheader/VSubheader.js"),Y=s("./node_modules/vuetify/lib/components/VTextField/VTextField.js"),Z=s("./node_modules/vuetify/lib/components/VToolbar/VToolbar.js"),ee=Object($.a)(S,o,[],!1,null,null,null);B()(ee,{VApp:L.a,VBtn:I.a,VBtnToggle:N.a,VCard:D.a,VCardText:T.b,VChip:A.a,VCol:P.a,VContent:M.a,VDataIterator:O.a,VDivider:F.a,VIcon:E.a,VList:z.a,VListItem:q.a,VListItemIcon:R.a,VListItemTitle:U.d,VNavigationDrawer:G.a,VPagination:H.a,VProgressCircular:W.a,VRow:J.a,VSelect:Q.a,VSpacer:K.a,VSubheader:X.a,VTextField:Y.a,VToolbar:Z.a}),ee.options.__file="client/components/tags.vue";t.default=ee.exports},"./client/components/tags.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){"use strict";var o=s("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/tags.vue?vue&type=style&index=0&lang=scss&");s.n(o).a},"./client/components/unauthorized.vue":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("div",{staticClass:"unauthorized"},[s("div",{staticClass:"unauthorized-content"},[s("img",{staticClass:"animated fadeIn",attrs:{src:"/_assets/svg/icon-delete-shield.svg",alt:"Unauthorized"}}),s("div",{staticClass:"headline"},[e._v(e._s(e.$t("unauthorized.title")))]),s("div",{staticClass:"subtitle-1 mt-3"},[e._v(e._s(e.$t("unauthorized.action."+e.action)))]),s("v-btn",{staticClass:"mt-5",attrs:{href:"/login","x-large":""}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-login")]),s("span",[e._v(e._s(e.$t("unauthorized.login")))])],1),s("v-btn",{staticClass:"mt-5",attrs:{color:"red lighten-4",href:"javascript:window.history.go(-1);",outlined:""}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-arrow-left")]),s("span",[e._v(e._s(e.$t("unauthorized.goback")))])],1)],1)])])};o._withStripped=!0;var i={props:{action:{type:String,default:"view"}},data:()=>({})},n=s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),a=s("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),l=s.n(a),d=s("./node_modules/vuetify/lib/components/VApp/VApp.js"),r=s("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),c=s("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),u=Object(n.a)(i,o,[],!1,null,null,null);l()(u,{VApp:d.a,VBtn:r.a,VIcon:c.a}),u.options.__file="client/components/unauthorized.vue";t.default=u.exports},"./client/graph/common/common-pages-query-list.gql":function(e,t){var s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"orderBy"}},type:{kind:"NamedType",name:{kind:"Name",value:"PageOrderBy"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"orderByDirection"}},type:{kind:"NamedType",name:{kind:"Name",value:"PageOrderByDirection"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"tags"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"locale"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pages"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"list"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"Variable",name:{kind:"Name",value:"orderBy"}}},{kind:"Argument",name:{kind:"Name",value:"orderByDirection"},value:{kind:"Variable",name:{kind:"Name",value:"orderByDirection"}}},{kind:"Argument",name:{kind:"Name",value:"tags"},value:{kind:"Variable",name:{kind:"Name",value:"tags"}}},{kind:"Argument",name:{kind:"Name",value:"locale"},value:{kind:"Variable",name:{kind:"Name",value:"locale"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"locale"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"path"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:361}};s.loc.source={body:"query ($limit: Int, $orderBy: PageOrderBy, $orderByDirection: PageOrderByDirection, $tags: [String!], $locale: String) {\n  pages {\n    list(limit: $limit, orderBy: $orderBy, orderByDirection: $orderByDirection, tags: $tags, locale: $locale) {\n      id\n      locale\n      path\n      title\n      description\n      createdAt\n      updatedAt\n      tags\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};s.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,s){if("FragmentSpread"===t.kind)s.add(t.name.value);else if("VariableDefinition"===t.kind){var o=t.type;"NamedType"===o.kind&&s.add(o.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,s)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,s)})),t.definitions&&t.definitions.forEach((function(t){e(t,s)}))}(e,t),o[e.name.value]=t}})),e.exports=s,s.documentId="5db946a34be6c4a3835406633027b45736d8b08f0cfcbfd05e9bef8b6d07ae6c"},"./client/graph/common/common-pages-query-tags.gql":function(e,t){var s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pages"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tag"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:63}};s.loc.source={body:"query {\n  pages {\n    tags {\n      tag\n      title\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};s.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,s){if("FragmentSpread"===t.kind)s.add(t.name.value);else if("VariableDefinition"===t.kind){var o=t.type;"NamedType"===o.kind&&s.add(o.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,s)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,s)})),t.definitions&&t.definitions.forEach((function(t){e(t,s)}))}(e,t),o[e.name.value]=t}})),e.exports=s,s.documentId="dc48b88fd6012ab26ef813012cc4fee084cf3fdbd76921bdf43dfc9a3a4a4b05"},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=script&lang=js&":function(e,t,s){"use strict";(function(e){t.a={props:{pageId:{type:Number,default:0},locale:{type:String,default:"en"},path:{type:String,default:"home"},versionId:{type:Number,default:0},versionDate:{type:String,default:""},effectivePermissions:{type:String,default:""}},data:()=>({}),created(){this.$store.commit("page/SET_ID",this.id),this.$store.commit("page/SET_LOCALE",this.locale),this.$store.commit("page/SET_PATH",this.path),this.$store.commit("page/SET_MODE","source"),this.effectivePermissions&&this.$store.set("page/effectivePermissions",JSON.parse(e.from(this.effectivePermissions,"base64").toString()))},methods:{goLive(){window.location.assign("/".concat(this.locale,"/").concat(this.path))},goHistory(){window.location.assign("/h/".concat(this.locale,"/").concat(this.path))}}}}).call(this,s("./node_modules/buffer/index.js").Buffer)},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){var o=s("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&");"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var n={insert:"head",singleton:!1};o(i,n);e.exports=i.locals||{}},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){var o=s("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=style&index=0&lang=scss&");"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var n={insert:"head",singleton:!1};o(i,n);e.exports=i.locals||{}},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/tags.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){var o=s("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/tags.vue?vue&type=style&index=0&lang=scss&");"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var n={insert:"head",singleton:!1};o(i,n);e.exports=i.locals||{}},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/source.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/tags.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){}}]);