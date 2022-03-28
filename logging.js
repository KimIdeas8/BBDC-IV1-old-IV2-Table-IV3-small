// Adapted from http://web.mit.edu/6.813/www/sp18/assignments/as1-implementation/logging.js
//
// A simple Google-spreadsheet-based event logging framework.
//
// Add logging.js to your Web App to log standard input and custom events.
//
// This is currently set up to log every mousedown and keydown
// event, as well as any events that might be triggered within
// the app by triggering the 'log' event anywhere in the doc
// as follows:
//
// document.dispatchEvent(new CustomEvent('log', { detail: {
//   eventName: 'myevent',
//   info: {key1: val1, key2: val2}
// }}));

var ENABLE_NETWORK_LOGGING = true; // Controls network logging.
var ENABLE_CONSOLE_LOGGING = true; // Controls console logging.
var LOG_VERSION = '0.1'; // Labels every entry with version: "0.1".

// These event types are intercepted for logging before jQuery handlers.
var EVENT_TYPES_TO_LOG = {
	click: true,
	dblclick: true,
};

// These event properties are copied to the log if present.
var EVENT_PROPERTIES_TO_LOG = {
	pageX: true,
	pageY: true,
};

// This function is called to record some global state on each event.
var GLOBAL_STATE_TO_LOG = function () {
	return {};
};

// Get URL params
let queryString = window.location.search;
if (!queryString) {
	queryString = window.parent.location.search;
}
const urlParams = new URLSearchParams(queryString);
let trialTask = urlParams.get('trial_task');
let trialIndex = urlParams.get('trial_index');
let participantId = urlParams.get('participant_id');

var loggingjs = (function () {
	// Immediately-Invoked Function Expression (IIFE); ref: http://benalman.com/news/2010/11/immediately-invoked-function-expression/

	// A persistent unique id for the user.
	var uid = getUniqueId();

	// Hooks up all the event listeners.
	function hookEventsToLog() {
		// Set up low-level event capturing.  This intercepts all
		// native events before they bubble, so we log the state
		// *before* normal event processing.
		for (var event_type in EVENT_TYPES_TO_LOG) {
			document.addEventListener(event_type, logEvent, true);
		}
		window.addEventListener('load', logEvent, true);
	}

	// Returns a CSS selector that is descriptive of
	// the element, for example, "td.left div" for
	// a class-less div within a td of class "left".
	function elementDesc(elt) {
		if (elt == document) {
			return 'document';
		} else if (elt == window) {
			return 'window';
		}

		function descArray(elt) {
			var desc = [elt.tagName.toLowerCase()];
			if (elt.id) {
				desc.push('#' + elt.id);
			}
			for (var j = 0; j < elt.classList.length; j++) {
				desc.push('.' + elt.classList[j]);
			}
			if (elt.value) {
				desc.push(' ' + elt.value);
			}
			desc.push(' ' + elt.innerText);
			return desc;
		}
		var desc = [];
		while (elt && desc.length <= 1) {
			var desc2 = descArray(elt);
			if (desc.length == 0) {
				desc = desc2;
			} else if (desc2.length > 1) {
				desc2.push(' ', desc[0]);
				desc = desc2;
			}
			elt = elt.parentElement;
		}
		return desc.join('');
	}

	// Parse user agent string by looking for recognized substring.
	function findFirstString(str, choices) {
		for (var j = 0; j < choices.length; j++) {
			if (str.indexOf(choices[j]) >= 0) {
				return choices[j];
			}
		}
		return '?';
	}

	// Generates or remembers a somewhat-unique ID with distilled user-agent info.
	function getUniqueId() {
		if (!('uid' in localStorage)) {
			var browser = findFirstString(navigator.userAgent, [
				'Seamonkey',
				'Firefox',
				'Chromium',
				'Chrome',
				'Safari',
				'OPR',
				'Opera',
				'Edge',
				'MSIE',
				'Blink',
				'Webkit',
				'Gecko',
				'Trident',
				'Mozilla',
			]);
			var os = findFirstString(navigator.userAgent, [
				'Android',
				'iOS',
				'Symbian',
				'Blackberry',
				'Windows Phone',
				'Windows',
				'OS X',
				'Linux',
				'iOS',
				'CrOS',
			]).replace(/ /g, '_');
			var unique = ('' + Math.random()).substr(2);
			localStorage['uid'] = os + '-' + browser + '-' + unique;
		}
		return localStorage['uid'];
	}

	// Log the given event.
	function logEvent(event, customName, customInfo) {
		console.log('event', event, 'customName', customName, 'customInfo', customInfo);

		var time = new Date().getTime();
		var eventName = customName || event.type;
		// By default, monitor some global state on every event.
		var infoObj = GLOBAL_STATE_TO_LOG();
		// And monitor a few interesting fields from the event, if present.
		for (var key in EVENT_PROPERTIES_TO_LOG) {
			if (event && key in event) {
				infoObj[key] = event[key];
			}
		}
		// Let a custom event add fields to the info.
		if (customInfo) {
			infoObj = Object.assign(infoObj, customInfo);
		}
		var info = JSON.stringify(infoObj);
		var target = document;
		if (event) {
			target = elementDesc(event.target);
		}
		var state = location.hash;
		var targetX = event.pageX;
		var targetY = event.pageY;

		if (ENABLE_CONSOLE_LOGGING) {
			console.log(uid, time, eventName, target, info, state, LOG_VERSION, targetX, targetY);
		}
		if (ENABLE_NETWORK_LOGGING) {
			sendNetworkLog(
				uid,
				time,
				eventName,
				target,
				info,
				state,
				LOG_VERSION,
				targetX,
				targetY
			);
		}
	}

	// OK, go.
	if (ENABLE_NETWORK_LOGGING) {
		hookEventsToLog();
	}

	// module pattern to allow some key functions to be "public"
	return {
		logEvent,
	};
})();

/////////////////////////////////////////////////////////////////////////////
// CHANGE ME:
// ** Replace the function below by substituting your own google form. **
/////////////////////////////////////////////////////////////////////////////
//
// 1. Create a Google form called "Network Log" at forms.google.com.
// 2. Set it up to have several "short answer" questions; here we assume
//    seven questions: uid, time, eventName, target, info, state, version.
// 3. Run googlesender.py to make a javascript
//    function that submits records directly to the form.
// 4. Put that function in here, and replace the current sendNetworkLog
//    so that your version is called to log events to your form.
//
// For example, the following code was written as follows:
// python googlesender.py https://docs.google.com/forms/d/e/1.../viewform
//
// This preocess changes the ids below to direct your data into your own
// form and spreadsheet. The formid must be customized, and also the form
// field names such as "entry.1291686978" must be matched to your form.
// (The numerical field names for a Google form can be found by inspecting
// the form input fields.) This can be done manually, but since this is an
// error-prone process, it can be easier to use googlesender.py.
//
/////////////////////////////////////////////////////////////////////////////
// Logging submission function
// submits to the google form at this URL:
// docs.google.com/forms/d/e/1FAIpQLSezRhXJIaJrnszsVHeEOQt3Yt5qZEx5FbwzQrzrWP6honYXpA/viewform?usp=sf_link
// participantid,
// timestamp,
// page,
// trialtask,
// trialindex,
// eventname,
// targetclicked,
// timetaken,
// numofoptions,
// bookingslotformat,
// targetsize,
// operatingsystem,
// screenresolution
function sendNetworkLog(
	uid,
	timestamp,
	eventName,
	targetClicked,
	info,
	state,
	logVersion,
	targetX,
	targetY
) {
	var formid = 'e/1FAIpQLSezRhXJIaJrnszsVHeEOQt3Yt5qZEx5FbwzQrzrWP6honYXpA';

	let page = document.title;
	let timeTaken = 34; // TEMP
	// CHANGE IV OPTIONS HERE
	let numOfOptions = 'old';
	let bookingSlotFormat = 'table';
	let targetSize = 'small';

	var data = {
		'entry.1912719468': uid,
		'entry.961316512': participantId,
		'entry.1836870468': timestamp,
		'entry.1953800486': page,
		'entry.1809789540': trialTask,
		'entry.2146517730': trialIndex,
		'entry.1424225150': eventName,
		'entry.607384166': targetClicked,
		'entry.487185794': targetX,
		'entry.1101706247': targetY,
		'entry.1395409775': timeTaken,
		'entry.139445951': info,
		'entry.1093657900': numOfOptions,
		'entry.1224307473': bookingSlotFormat,
		'entry.708230158': targetSize,
	};
	var params = [];
	for (var key in data) {
		params.push(key + '=' + encodeURIComponent(data[key]));
	}
	// Submit the form using an image to avoid CORS warnings; warning may still happen, but log will be sent. Go check result in Google Form
	new Image().src =
		'https://docs.google.com/forms/d/' + formid + '/formResponse?' + params.join('&');
}
