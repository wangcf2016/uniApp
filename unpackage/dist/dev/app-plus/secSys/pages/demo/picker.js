
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"page-hd { padding: ",[0,80],"; }\n.",[1],"page-title { font-size: ",[0,40],"; font-weight: ",[0,800],"; }\n.",[1],"page-bd { padding: ",[0,30],"; }\n.",[1],"picker-text, .",[1],"page__desc { margin-top: ",[0,20],"; }\n.",[1],"_button { margin-top: ",[0,30],"; }\n.",[1],"pickerMask { position: fixed; z-index: 1000; top: 0; right: 0; left: 0; bottom: 0; background: rgba(0, 0, 0, 0.6); }\n.",[1],"mpvue-picker-content { position: fixed; bottom: 0; left: 0; width: 100%; -webkit-transition: all 0.3s ease; transition: all 0.3s ease; -webkit-transform: translateY(100%); transform: translateY(100%); z-index: 3000; }\n.",[1],"mpvue-picker-view-show { -webkit-transform: translateY(0); transform: translateY(0); }\n.",[1],"mpvue-picker__hd { display: -webkit-box; display: -webkit-flex; display: flex; padding: ",[0,18]," ",[0,30],"; background-color: #fff; position: relative; text-align: center; font-size: ",[0,34],"; }\n.",[1],"mpvue-picker__hd:after { content: \x27 \x27; position: absolute; left: 0; bottom: 0; right: 0; height: ",[0,2],"; border-bottom: ",[0,2]," solid #e5e5e5; color: #e5e5e5; -webkit-transform-origin: 0 100%; transform-origin: 0 100%; -webkit-transform: scaleY(0.5); transform: scaleY(0.5); }\n.",[1],"mpvue-picker__action { display: block; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; color: #1aad19; }\n.",[1],"mpvue-picker__action:first-child { text-align: left; color: #888; }\n.",[1],"mpvue-picker__action:last-child { text-align: right; }\n.",[1],"picker-item { text-align: center; line-height: ",[0,80],"; }\n.",[1],"mpvue-picker-view { position: relative; bottom: 0; left: 0; width: 100%; height: ",[0,476],"; background-color: rgba(255, 255, 255, 1); }\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/demo/picker.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      