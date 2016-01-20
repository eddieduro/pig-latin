describe ("translator",function() {
  it("will check if a string has vowel in first index and add ay to the end",function() {
    expect(translator('e')).to.equal('eay');
  });

  it("will check if a string has consecutive consonants, move those consonants to the end and then add ay ",function() {
    expect(translator('bob')).to.equal('obbay');
  });
});
