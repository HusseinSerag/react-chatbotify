/**
 * Defines the settings for the chat bot.
 */
export type Settings = {
	// configurations
	general?: {
		primaryColor?: string;
		secondaryColor?: string;
		fontFamily?: string;
		showHeader?: boolean;
		showFooter?: boolean;
		showInputRow?: boolean;
		actionDisabledIcon?: string;
		embedded?: boolean;
		desktopEnabled?: boolean;
		mobileEnabled?: boolean;
		flowStartTrigger?: string;
	},
	tooltip?: {
		mode?: string;
		text?: string;
	},
	chatButton?: {
		icon: string;
	},
	header?: {
		title?: string | JSX.Element;
		showAvatar?: boolean;
		avatar?: string;
		buttons?: Array<JSX.Element | string>;
		closeChatIcon?: string;
	},
	notification?: {
		disabled?: boolean;
		defaultToggledOn?: boolean;
		volume?: number;
		icon?: string;
		sound?: string;
		showCount?: boolean;
	},
	audio?: {
		disabled?: boolean;
		defaultToggledOn?: boolean;
		language?: string;
		voiceNames?: string[];
		rate?: number;
		volume?: number;
		icon?: string;
	},
	chatHistory?: {
		disabled?: boolean;
		maxEntries?: number;
		storageKey?: string;
		viewChatHistoryButtonText?: string;
		chatHistoryLineBreakText?: string;
		autoLoad?: boolean;
	},
	chatInput?: {
		disabled?: boolean;
		allowNewline?: boolean;
		enabledPlaceholderText?: string;
		disabledPlaceholderText?: string;
		showCharacterCount?: boolean;
		characterLimit?: number;
		botDelay?: number;
		sendButtonIcon?: string;
		blockSpam?: boolean;
		sendOptionOutput?: boolean;
		sendCheckboxOutput?: boolean;
		buttons?: Array<JSX.Element | string>;
	},
	chatWindow?: {
		showScrollbar?: boolean;
		autoJumpToBottom?: boolean;
		showMessagePrompt?: boolean;
		messagePromptText?: string;
		messagePromptOffset?: number;
		defaultOpen?: boolean;
	},
	sensitiveInput?: {
		maskInTextArea?: boolean;
		maskInUserBubble?: boolean;
		asterisksCount?: number;
		hideInUserBubble?: boolean;
	},
	userBubble?: {
		animate?: boolean;
		showAvatar?: boolean;
		avatar?: string;
		simStream?: boolean;
		streamSpeed? :number;
		dangerouslySetInnerHtml?: boolean;
	},
	botBubble?: {
		animate?: boolean;
		showAvatar?: boolean;
		avatar?: string;
		simStream?: boolean;
		streamSpeed? :number;
		dangerouslySetInnerHtml?: boolean;
	},
	voice?: {
		disabled?: boolean;
		defaultToggledOn?: boolean;
		language?: string;
		timeoutPeriod?: number;
		autoSendDisabled?: boolean;
		autoSendPeriod?: number;
		sendAsAudio?: boolean;
		icon?: string;
	},
	footer?: {
		text?: string | JSX.Element;
		buttons?: Array<JSX.Element | string>;
	},
	fileAttachment?: {
		disabled?: boolean;
		multiple?: boolean;
		accept?: string;
		icon?: string;
		sendFileName?: boolean;
		showMediaDisplay?: boolean;
	}
	emoji?: {
		disabled?: boolean;
		icon?: string;
		list?: string[] ;
	},
	toast?: {
		maxCount?: number;
		forbidOnMax?: boolean;
		dismissOnClick?: boolean;
	},
	event?: {
		rcbPreInjectMessage?: boolean;
		rcbPostInjectMessage?: boolean;
		rcbStartStreamMessage?: boolean;
		rcbChunkStreamMessage?: boolean;
		rcbStopStreamMessage?: boolean;
		rcbRemoveMessage?: boolean;
		rcbLoadChatHistory?: boolean;
		rcbToggleChatWindow?: boolean;
		rcbToggleAudio?: boolean;
		rcbToggleNotifications?: boolean;
		rcbToggleVoice?: boolean;
		rcbChangePath?: boolean;
		rcbShowToast?: boolean;
		rcbDismissToast?: boolean;
		rcbUserSubmitText?: boolean;
		rcbUserUploadFile?: boolean;
		rcbTextAreaChangeValue?: boolean;
	}
}
