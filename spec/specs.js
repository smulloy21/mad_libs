describe('replaceWord', function(){
  it('should replace a word in a string with another word', function(){
    expect(replaceWord('I love coffee', 'coffee', 'tea')).to.equal('I love tea');
  });

  it('should do so regardless of, but without removing, end punctuation', function(){
    expect(replaceWord('I love coffee.', 'coffee', 'tea')).to.equal('I love tea.');
  });

  it('should do so regardless of, but without removing, double end punctuation', function(){
    expect(replaceWord('(I love coffee.)', 'coffee', 'tea')).to.equal('(I love tea.)');
  });

  it('should do so regardless of, but without removing, beginning punctuation', function(){
    expect(replaceWord('(I love coffee.)', 'I', 'You')).to.equal('(You love coffee.)');
  });
});

describe('findNouns', function(){
  it('should return an array of the Noun keywords', function(){
    expect(findNouns('I love Noun1')).to.eql(['Noun1']);
  });
  it('should work regardless of punctuation', function(){
    expect(findNouns('I love Noun1.')).to.eql(['Noun1']);
  });
});
