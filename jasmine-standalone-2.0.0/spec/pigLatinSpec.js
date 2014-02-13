describe( "greeting function", function(){
	it("should greet me in pig latin", function(){
		expect(greetMe("Hello Nora. You are awesome.")).toEqual("elloHay oraNay. ouYay areway awesomeway.");
	});

	it("returns undefined when asked to greet someone other than Nora", function(){
		expect(greetMe("Grover")).toBeUndefined();
	});
});

describe( "pig word function", function(){
	it("should make the first letter the last, and add 'ay'", function(){
		expect(pigWord("Nora")).toEqual("oraNay");
	});
});

describe( "Pig Latin phrase function", function(){
	it("should make the first letter the last, and add 'ay' for each single-consonant-beginning word", function(){
		expect(pigLatinPhrase("Nora is cool")).toEqual("oraNay isway oolcay");
	});
	it("should move the first two letters to the end, and add 'ay' for each double-consonant-beginning word", function(){
		expect(pigLatinPhrase("Shall Nora be cool")).toEqual("allShay oraNay ebay oolcay");
	});
	it("should add 'way' for each vowel-beginning word", function(){
		expect(pigLatinPhrase("eight eggs")).toEqual("eightway eggsway");
	});
});

describe('check for punctuation function', function(){
	it('returns true if there is punctuation',function(){
		expect(checkForPunctuation("Hello!")).toBeTruthy();
	});

	it('returns false if there is NO punctuation', function(){
		expect(checkForPunctuation("Hello")).toBeFalsy();
	});
})

describe( "pig chunk function", function(){
	it("pass no-punctuation chunks to pigWord", function(){
		expect(pigChunk("Nora")).toEqual("oraNay");
	});

	it("preserves simple punctuation in a chunk", function(){
		expect(pigChunk("Nora.")).toEqual("oraNay.");
		expect(pigChunk("'Nora")).toEqual("'oraNay");
	});
});

describe( "report number of characters in pig latin", function(){
	it('logs "11 aracterschay inyay ethay rasephay"', function(){
		expect(reportNumChars('Hello Nora.')).toEqual("11 aracterschay inway ethay rasephay.");
	})
})

describe( "count characters function", function(){
	it('returns the number of chars in a string', function(){
		expect(countChars('Hello Nora.')).toBe(11);
	})
})

describe( "display pig latin", function(){
	var input, button, div;
	beforeEach(function(){
		jasmine.getFixtures().fixturesPath = 'spec/fixtures';
		jasmine.getFixtures().load('form.html');
		$('#form').piggify();
		$('#form').find('button').trigger('click');
	});

	it('displays translated text from input in div', function(){
		expect($('#form').find('div').text()).toEqual('elloHay');
	})
})