customProperties:"formComponent:false,\
useCssPosition:true",
encapsulation:108,
items:[
{
cssPosition:"50,10,-1,-1,130,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"-1",
right:"10",
top:"50",
width:"130"
},
formIndex:0,
onActionMethodID:"73FDC3C7-EE9A-495A-A931-8DF9BFD20149",
text:"Senden++"
},
name:"btnSendMod",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"233727F5-8A14-44F8-ACB7-5FFBDFE2C264"
},
{
height:671,
partType:5,
typeid:19,
uuid:"3143BF4E-A48F-44CD-8EB8-FE0881C2EB7C"
},
{
cssPosition:"10,10,-1,-1,130,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"-1",
right:"10",
top:"10",
width:"130"
},
formIndex:0,
onActionMethodID:"DA06A983-C54D-4DAC-8743-3C27E03013E2",
text:"Senden"
},
name:"btnSendOrg",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"33CC4704-5907-4FDE-B472-C0331C138FAC"
},
{
cssPosition:"93,0,0,0,200,540",
json:{
cssPosition:{
bottom:"0",
height:"540",
left:"0",
right:"0",
top:"93",
width:"200"
},
dataProviderID:"scopes.email.messagebody",
editorStyleSheet:"9090FFC7-0B97-4626-96F4-A619F0B4E0BC",
formIndex:0,
toolbarItems:[
{
svyUUID:"9D4AD00E-2338-4055-BA0A-E4BF8C986742",
type:"previousPage"
},
{
svyUUID:"6CFB25DE-2369-4B7D-B394-A946BD80435F",
type:"nextPage"
},
{
svyUUID:"8A10C2E8-7EE2-41CC-B570-4CE0BB28B170",
type:"pageNavigation"
},
{
svyUUID:"7312CBF1-BE75-450D-B709-6C29C212E7FF",
type:"separator"
},
{
svyUUID:"32CE578F-1A77-40CA-A2AB-534621C7032B",
type:"heading"
},
{
svyUUID:"0A1D3AB7-AF4C-4781-85F7-A0485B715724",
type:"separator"
},
{
svyUUID:"A084DC82-946B-4190-9D85-F87B16048F8D",
type:"fontfamily"
},
{
svyUUID:"180295EF-2780-4E79-9A69-9A523FE142AF",
type:"fontsize"
},
{
svyUUID:"E0D5AD4C-0838-4F59-A59A-2AA371FB9932",
type:"fontColor"
},
{
svyUUID:"F861B610-64D7-4114-AB70-38B14C5C7765",
type:"separator"
},
{
svyUUID:"FFC2BE5E-1E2A-47CE-9001-06B55D991E18",
type:"bold"
},
{
svyUUID:"0674231D-F91F-4A36-ACBF-E57EBEDE509D",
type:"italic"
},
{
svyUUID:"6ACAB415-622A-45FD-83CA-E9AA0194C2B0",
type:"underline"
},
{
svyUUID:"5BE18D96-61F7-4B71-A12E-45418B8B6EAF",
type:"strikethrough"
},
{
svyUUID:"EFAA8E4D-B6F6-4999-91E5-A1C47B999612",
type:"separator"
},
{
svyUUID:"9DA3C514-BDC6-46C1-88B9-F422A7706CCB",
type:"alignment"
},
{
svyUUID:"5C47303C-15F6-4343-AA84-AA6E176A3F23",
type:"separator"
},
{
svyUUID:"5D7A483A-3CA2-42B4-824B-9CE54D310F48",
type:"numberedList"
},
{
svyUUID:"3F0A9B57-0F83-4977-9331-6B94A2C354E2",
type:"bulletedList"
},
{
svyUUID:"1A67E2CF-3DF5-4633-BB36-F823CC04518E",
type:"separator"
},
{
svyUUID:"41D30455-44DD-42CF-914E-76D6CAF0B155",
type:"indent"
},
{
svyUUID:"643E8882-9E5F-4349-A917-2EA7C906CD10",
type:"outdent"
},
{
svyUUID:"C36D7BC3-A173-4FD6-82AF-7D080CB36184",
type:"separator"
},
{
svyUUID:"7933B131-C339-4A61-B112-90F9959E018B",
type:"link"
},
{
svyUUID:"6B68E166-0D9F-47A1-AB10-4F4160B3CBC3",
type:"imageUpload"
},
{
svyUUID:"51ECEBDE-D84D-4422-98BF-2F8FA70D1280",
type:"insertTable"
}
],
viewType:"WEB"
},
name:"smartdocumenteditor",
typeName:"smartdocumenteditor-smartdocumenteditor",
typeid:47,
uuid:"3D216291-C9DA-4D46-8FE8-D072DD5D3C41"
},
{
cssPosition:"50,-1,-1,10,80,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"10",
right:"-1",
top:"50",
width:"80"
},
formIndex:0,
text:"Betreff"
},
name:"label_3",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"8281B9C4-9B48-49D6-AB16-D87099993CBF"
},
{
cssPosition:"10,-1,-1,10,80,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"10",
right:"-1",
top:"10",
width:"80"
},
formIndex:0,
text:"Empfänger",
visible:true
},
name:"label_2",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"9A54E11B-8263-4353-94FB-5F129ED0120E"
},
{
cssPosition:"10,150,-1,100,300,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"100",
right:"150",
top:"10",
width:"300"
},
dataProviderID:"scopes.email.emailTo",
formIndex:0
},
name:"textbox_794",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"AEDF0D74-CA96-46D3-AA51-8FD9AFF04A92"
},
{
cssPosition:"50,150,-1,100,300,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"100",
right:"150",
top:"50",
width:"300"
},
dataProviderID:"scopes.email.subject"
},
name:"textbox_20",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"DF16619C-F364-4A8A-B397-7DE4440A1183"
}
],
name:"emaileditor",
navigatorID:"-1",
onLoadMethodID:"FBC10834-0169-4ADB-9A2D-5DCE902EDB19",
showInMenu:true,
size:"1150,671",
typeid:3,
uuid:"5DF35447-437A-4A43-9CCD-4232C15DF432"