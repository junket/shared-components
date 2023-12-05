export default function () {
  const convertedPositions = [];
  const emojiMap = {
  'o/': '👋',
  '</3': '💔',
  '<3': '❤️',
  '8-D': '😃',
  '8D': '😃',
  '8)': '😃',
  'B-D': '😎',
  'BD': '😎',
  'B)': '😎',
  ':-D': '😄',
  ':D': '😄',
  ":'(": '😢',
  ":'-(": '😢',
  ':-))': '😁',
  ':)': '😊',
  ':-)': '😊',
  ':]': '😊',
  '0:)': '😇',
  '0:-)': '😇',
  'O:-)': '😇',
  '3:)': '😈',
  '3:-)': '😈',
  '}:)': '😈',
  '}:-)': '😈',
  ';)': '😉',
  ';-)': '😉',
  ';-]': '😉',
  ';D': '😉',
  ';]': '😉',
  ':-|': '😐',
  ':|': '😐',
  ':-/': '😕',
  // ':/': '😕', // Effs with URLs
  ':(': '😞',
  ':-(': '😞',
  ':[': '😞',
  '%)': '😖',
  '%-)': '😖',
  ':-P': '😜',
  ':-b': '😜',
  ':-p': '😜',
  ':-Þ': '😜',
  ':-þ': '😜',
  ':P': '😜',
  ':b': '😜',
  ':p': '😜',
  ':Þ': '😜',
  ':þ': '😜',
  'd:': '😜',
  ':-O': '😮',
  ':-o': '😮',
  ':O': '😮',
  ':o': '😮'
  };
  const replaceEmoticonsWithEmojis = (textarea) => {
    var newValue = textarea.value;
    // Check chars trailing the cursor;
    const cursor = textarea.selectionStart;
    const startPos = cursor - 4;
    const end = newValue.slice(startPos, cursor); // Use `cursor - 1` to wait for next char
    for (var prop in emojiMap) {
      if (end.indexOf(prop) > -1) {
        // Skip if already tried converting this symbol here:
        if (convertedPositions[startPos] !== prop) {
          newValue = newValue.slice(0, startPos) + end.replace(prop, emojiMap[prop]) + newValue.slice(cursor);
          // Log conversions of this symbol here:
          for (var i = 0; i < 3; i++) {
            convertedPositions[startPos + i] = prop;
          }
        }
      }
    }
    textarea.selectionStart = cursor;
    textarea.selectionEnd = cursor;
    return newValue;
  };
  return {
    emojiMap,
    replaceEmoticonsWithEmojis
  }
}
