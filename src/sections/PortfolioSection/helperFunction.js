function textInArray(text) {
	const closingPtags = text.split('</p>').length - 1;
	const textInArray = text.split('</p>', closingPtags);
	const textNew = textInArray.map(text => {
		return text + '</p>';
	});
	return textNew;
}

export default textInArray;
