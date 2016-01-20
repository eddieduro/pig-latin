describe ("translator",function() {
  it("will check if a string has vowel in first index and add ay to the end",function() {
    expect(translator('e')).to.equal('eay');
  });

  it("will check if a string has consecutive consonants, move those consonants to the end and then add ay ",function() {
    expect(translator('bob')).to.equal('obbay');
  });

  it("will take y and treat it as a consonant", function() {
    expect(translator('yes')).to.equal('esyay');
  });

  it("if q and u are consecutive at the beginning both q and u will be moved to the end, and ay will be added after", function() {
    expect(translator('quick')).to.equal('ickquay');
  });
});
