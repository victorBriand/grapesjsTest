const a = editor.getSelected();
undefined
a
r {cid: 'c573', attributes: {…}, collection: r, _changing: false, _previousAttributes: {…}, …}attributes: {tagName: 'h1', type: 'text', name: '', removable: true, draggable: true, …}ccid: "ib7l"changed: {status: 'selected'}cid: "c573"collection: r {length: 3, models: Array(3), _byId: {…}, opt: {…}, _listenId: 'l572', …}config: {pStylePrefix: 'gjs-', stm: {…}, em: r, components: '\n      <div class="panel">\n        <h1 class="welc…ine-height: 1.5rem;\n        }\n      </style>\n    ', stylePrefix: 'gjs-comp-', …}em: r {cid: 'c2', attributes: {…}, _changing: false, _previousAttributes: {…}, changed: {…}, …}frame: undefinedopt: {add: true, remove: false, merge: false, silent: 1, keepIds: Array(0), …}rule: undefinedview: r {cid: 'view749', model: r, $el: y(1), el: h1#ib7l.welcome.gjs-selected, opts: {…}, …}views: [r]__hasUm: 1__upSymbCls: ƒ ()__upSymbComps: ƒ ()__upSymbProps: ƒ ()_changing: false_events: {change:classes: Array(2), change:attributes:id: Array(2), change:attributes:title: Array(1), change:traits: Array(1), change:components: Array(2), …}_listenId: "l574"_listeners: {l574: {…}, l577: {…}, l579: {…}, l750: {…}}_listeningTo: {l574: {…}, l590: {…}, l575: {…}, l580: {…}}_pending: false_previousAttributes: {tagName: 'h1', type: 'text', name: '', removable: true, draggable: true, …}[[Prototype]]: n
const tb = a.get('toolbar');
undefined
tb
(4) [{…}, {…}, {…}, {…}]
const tlbS = {}
undefined
const tlbS = {
    attributes:{ class: "fa fa-cog", title: "sett"},
    command: "setting-click"
}
undefined
tblS
VM364:1 Uncaught ReferenceError: tblS is not defined
    at <anonymous>:1:1
(anonymous) @ VM364:1
tlbS
{attributes: {…}, command: 'setting-click'}
tb.push(tlbS)
5
a.set('toolbar',tb)
r {cid: 'c573', attributes: {…}, collection: r, _changing: false, _previousAttributes: {…}, …}
grapesjs:2 'setting-click' command not found {level: 'warning'}
m @ grapesjs:2
v @ grapesjs:2
d @ grapesjs:2
l.trigger @ grapesjs:2
log @ grapesjs:2
logWarning @ grapesjs:2
get @ grapesjs:2
run @ grapesjs:2
runCommand @ grapesjs:2
execCommand @ grapesjs:2
handleClick @ grapesjs:2
te @ grapesjs:2
(anonymous) @ grapesjs:2
(anonymous) @ grapesjs:2
t @ grapesjs:2
editor.Commands.add('setting-click',{
    run(editor,sender){
    console.log('ok')
}
})
{name: 'Commands', CommandAbstract: ƒ, init: ƒ, add: ƒ, get: ƒ, …}
4VM664:3 ok