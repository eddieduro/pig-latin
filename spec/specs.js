describe ("translator",function() {
  it("will check if a string has vowel in first index and add ay to the end",function() {
    expect(translator('e')).to.equal('eay');
  });

  it("will check if a string has consecutive consonants",function() {
    expect(translator('bob')).to.equal('b');
  });
});
