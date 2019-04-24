describe("findPalindrome", function() {

  it("Принимает строку с числом и возвращает результат функции findMaximumPalindrome", function() {
    assert.equal(findPalindrome("12344374"), 3443);
  });

});
describe("findPalindrome", function() {

  it("Принимает строку с числом и возвращает false, если параметр не прошел валидацию", function() {
    assert.equal(findPalindrome("notValide"), false);
  });

});

describe("findMaximumPalindrome", function() {

  it("Принимает строку с числом и возвращает максимальный палиндром если он найден", function() {
    assert.equal(findMaximumPalindrome("12344374"), 3443);
  });

});

describe("findMaximumPalindrome", function() {

  it("Принимает строку с числом и возвращает '0' если палиндром не найден", function() {
    assert.equal(findMaximumPalindrome("123456"), "0");
  });

});

describe("naturalNumberValidation", function() {

  it("Принимает строку с числом и возвращает целое число, если оно таковым является", function() {
    assert.equal(naturalNumberValidation("20"), 20);
  });

});

describe("naturalNumberValidation", function() {

  it("Принимает строку с числом и возвращает false, если оно дробное", function() {
    assert.equal(naturalNumberValidation("2.3"), false);
  });

});

describe("naturalNumberValidation", function() {

  it("Принимает строку и возвращает false, если в строке не число", function() {
    assert.equal(naturalNumberValidation("NaN"), false);
  });

});

describe("naturalNumberValidation", function() {

  it("Принимает строку с числом и возвращает false, если в cтроке вместе с числом присутствуют буквы", function() {
    assert.equal(naturalNumberValidation("Lit20"), false);
  });

});

describe("naturalNumberValidation", function() {

  it("Принимает строку с числом и возвращает false, если число отрицательное", function() {
    assert.equal(naturalNumberValidation("-20"), false);
  });

});

describe("reverseString", function() {

  it("Принимает строку с натуральным числом и возвращает его зеркальную копию", function() {
    assert.equal(reverseString("12345"), "54321");
  });

});

describe("arrSortingByMaximum", function() {

  it("Принимает массив чисел и возвращает его отсортированным от максимального к минимальному", function() {
    assert.deepEqual(arrSortingByMaximum([1,2,3,4,5]), [5,4,3,2,1]);
  });
});





