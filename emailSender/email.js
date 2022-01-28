/**
 * @type {String}
 * @properties={typeid:35,uuid:"54A15F9D-E4F3-44AC-B2E2-70FFD69A9D0A"}
 */
var messagebody = null;

/**
 * @type {String}
 * @properties={typeid:35,uuid:"15ECC3F1-FF8A-4125-A6C1-DBAFB970DC13"}
 */
var messageBereinigt = null;

/**
 * @type {String}
 * @properties={typeid:35,uuid:"6719801A-1938-4550-9950-31FBF8575105"}
 */
var subject = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4068629B-6CD9-44CF-A23B-DBA6473AB36F"}
 */
var smtpServer = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DCEBDDF1-DFF9-470F-9285-2665BF97B83E",variableType:4}
 */
var smtpPort = 587;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BB5DF0C7-06BE-43C8-BBBB-BD611AE712C4"}
 */
var smtpUser = ''

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"87BCB7A9-082B-4647-A087-54320345A379"}
 */
var smtpPassword = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1251B86F-AC16-49B3-8D28-0E607CF8794B"}
 */
var imapServer = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"002184F8-F2F5-4DA3-B6D5-DA536EE68317",variableType:4}
 */
var imapPort = 993;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9ED63E36-FACD-48FA-922A-D950F367C5FD"}
 */
var imapUser = ''

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BD5954EF-4592-4D7F-8AFF-781F84EE88FD"}
 */
var imapPassword = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A5CFFB4F-962A-40E7-BCB5-F8475863B290"}
 */
var emailTo = 'Robert.Edelmann@BauProCheck.de';
	
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F8EF9F6A-C3C8-4213-8DDD-71B1E7BFC8BB"}
 */
var mailFrom = 'ProjektPersonAP@von-metzsch.de';

/**
 * @return {{toolbar: Array<*>}}
*
 * @properties={typeid:24,uuid:"902CDAE0-8F17-4E37-AF9F-A12EC6AFE6C0"}
 */
function getSmartDocEditorConfig() {
	/** @type {{toolbar: Array<*>}} */
	var config = {
		toolbar: [
			'heading', 
			'|', 
			'fontFamily', 
			'fontSize', 
			'fontColor', 			
			'|', 
			'bold', 
			'italic', 
			'underline', 
			'strikethrough',
			'specialcharacters',
			'|',
			'alignment', 
			'|',
			'numberedList', 
			'bulletedList', 
			'|',
			'link', 
			'insertTable', 
			'imageUpload'
		],
		image: {
			resizeUnit: 'px'
		},
		fontFamily: {
			options: [
			    'Standard',
			    'Arial, Helvetica, sans-serif',
			    'Courier New, Courier, monospace',
			    'Georgia, serif',
			    'Lucida Sans Unicode, Lucida Grande, sans-serif',
			    'Tahoma, Geneva, sans-serif',
			    'Times New Roman, Times, serif',
			    'Trebuchet MS, Helvetica, sans-serif',
			    'Verdana, Geneva, sans-serif',
				'Calibri, sans-serif'
			    ],
			supportAllValues: true
		},
       fontSize: {
            options: [
            	'8',
            	'10', 
				'11',
				'12',
				'13',
				'15',
				'16',
				'19',
				'22',
				'24',
				'26',
				'29'
				],
			supportAllValues: true
        },
		fontColor: {
			colors: [
				{color: '#000000', label: 'Schwarz'},
				{color: '#4d4d4d', label: 'Dunkelgrau'},
				{color: '#999999', label: 'Grau'},
				{color: '#e6e6e6', label: 'Hellgrau'},
				{color: '#ffffff', label: 'Weiß'},

				{color: '#F52828', label: 'Rot'},
				{color: '#F58714', label: 'Orange'},
				{color: '#F5F528', label: 'Gelb'},
				{color: '#78F528', label: 'Hellgrün'},
				{color: '#1fb751', label: 'Mittelgrün'},

				{color: '#28F5B4', label: 'Aquamarin'},
				{color: '#28F5F5', label: 'Türkis '},
				{color: '#2882f5', label: 'Mittelblau '},
				{color: '#2828F5', label: 'Blau'},
				{color: '#F528F5', label: 'Violet'}
			]
		}
	}
	
	return config;
}

/**
 * @param {plugins.MailPro.MailMessage} mailMessage
 * @return {plugins.MailPro.MailMessage}
 * 
 * @properties={typeid:24,uuid:"A159BAB2-1DF2-4CFA-BD53-2F8F3ED3EAB8"}
 */
function convertBase64ToCid(mailMessage) {
	if (!mailMessage.htmlMsg) {
		return mailMessage;
	}
	mailMessage.embedAllImages(true); 
	var jsoup = Packages.org.jsoup.Jsoup;
	var images = Packages.org.jsoup.select.Elements;
	var image = Packages.org.jsoup.nodes.Element;
	var htmlDoc = Packages.org.jsoup.nodes.Document;
	var iter = java.util.Iterator;
	
	htmlDoc = jsoup.parse(mailMessage.htmlMsg);
	images = htmlDoc.select('img')
	iter = images.iterator();
	while (iter.hasNext()) {
		image = iter.next();
		if (image.attr('src').toString().substr(0,5) != 'data:') {
			continue;
		}
		/** @type {String} */
		var imgData = image.attr('src').toString().substr(image.attr('src').toString().indexOf('base64,')+7)
		imgData = imgData.substr(0,imgData.length-2);
		var jsImage = plugins.images.getImage(utils.base64ToBytes(imgData));
		if (jsImage.getWidth() > 800 || jsImage.getHeight() > 800) {
			jsImage = jsImage.resize(800,800)
		}
		/** @type {String}  */
		var newExtension = scopes.MimeTypes.getExtension(jsImage.getContentType())
		if (!newExtension) {
			newExtension = '';
		} else if (newExtension.indexOf(', ') > -1) {
			newExtension = newExtension.split(', ').pop().trim()
		}
		var newName = application.getUUID().toString()+newExtension;
		var embeddedImage = mailMessage.addAttachment(newName,jsImage.getData());
		embeddedImage.embedded = true;
		image.attr('src',newName);
	}
	mailMessage.htmlMsg = htmlDoc.toString();
	return mailMessage;
}