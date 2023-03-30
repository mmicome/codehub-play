/**
 * 字符串正则特殊字符处理
 * @param string 字符串
 * @returns 
 */
export function escapeStringRegexp(string:string) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}
	// Escape characters with special meaning either inside or outside character sets.
	// Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
	return string
		.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
		.replace(/-/g, '\\x2d');
}



