describe('replaceWord', function(){
  it('should replace a word in a string with another word', function(){
    expect(replaceWord('I love coffee', 'coffee', 'tea')).to.equal('I love tea');
  });
});
