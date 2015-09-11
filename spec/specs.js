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

describe('findKeywords', function(){
  it('should return an array of the Noun keywords', function(){
    expect(findKeywords('I love Noun1')).to.eql(['Noun1']);
  });

  it('should work regardless of punctuation', function(){
    expect(findKeywords('I love Noun1.')).to.eql(['Noun1']);
  });

  it('should work with other parts of speech', function(){
    expect(findKeywords('I Verb1 Noun1.')).to.eql(['Verb1', 'Noun1']);
  });

  it('should work with more than one of the same part of speech', function(){
    expect(findKeywords('Noun1 Verb1 Noun2.')).to.eql(['Noun1', 'Verb1', 'Noun2']);
  });

  it('should only put in an instance of a part of speech once', function(){
    expect(findKeywords('I love Noun1. Noun1 is the best')).to.eql(['Noun1']);
  });
});
