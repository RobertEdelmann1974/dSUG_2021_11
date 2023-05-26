/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FBC10834-0169-4ADB-9A2D-5DCE902EDB19"}
 */
function onLoad(event) {
	var configEditor = scopes.email.getSmartDocEditorConfig();
	elements.smartdocumenteditor.create(configEditor);
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DA06A983-C54D-4DAC-8743-3C27E03013E2"}
 */
function onAction_btnSendOrg(event) {
	sendEmail(false);
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 *
 * @properties={typeid:24,uuid:"73FDC3C7-EE9A-495A-A931-8DF9BFD20149"}
 */
function onAction_btnSendMod(event) {
	sendEmail(true);
}

/**
 * @param {Boolean} wandeln sollen die Bilder umgewandelt werden?
 *
 * @properties={typeid:24,uuid:"C3143300-09F3-4D6C-8273-A0F86C1B1F43"}
 */
function sendEmail(wandeln) {
	var smtpAccount = plugins.MailPro.SMTPAccount(scopes.email.smtpServer, scopes.email.smtpPort, scopes.email.smtpUser, scopes.email.smtpPassword, true);
	smtpAccount.useTLS = true;
	smtpAccount.connectionTimeout = 900000;
	smtpAccount.addSmtpProperty('mail.smtp.noop.strict','false')

	var connected = smtpAccount.connect();
	if (!connected) {
		/** @type {plugins.MailPro.MailProException} */
		var errorOccured = smtpAccount.getLastError();
		if (errorOccured) {
			throw errorOccured;
		} else {
			throw {message: 'Connection failed', className: ''};
		}
	}
	
	var mailMessage = smtpAccount.createMessage();
	mailMessage.setCharset('UTF-8');
	mailMessage.fromAddresses = plugins.MailPro.EmailAddress(scopes.email.mailFrom);
	mailMessage.addRecipient(plugins.MailPro.EmailAddress(scopes.email.emailTo), 'TO');
	mailMessage.subject = scopes.email.subject;
	mailMessage.htmlMsg = elements.smartdocumenteditor.getHTMLData(true);
	if (wandeln) {
		mailMessage.subject = scopes.email.subject + ' - mit Wandlung';
		mailMessage = scopes.email.convertBase64ToCid(mailMessage);
		scopes.email.messageCleaned = mailMessage.htmlMsg;
	}
	var success = smtpAccount.sendMessage(mailMessage);
	if (success) {
		plugins.dialogs.showInfoDialog('Emails','Email successfully sent')
	}
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A4F60ADA-2A9B-4F98-8B30-2BD3A0027227"}
 */
function onShow(firstShow, event) {
//	var kundencss = plugins.file.
	elements.smartdocumenteditor.editorStyleSheet = "media:///kunden_style.css"
}
