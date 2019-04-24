describe("getLuckyTickets", function() {

    it("Принимает объект ontext с полями min и max и возвращает результат функции getWinnerMethod", function() {
        let context = {min:'111111', max:'222222'};
        assert.deepEqual(getLuckyTickets(context), {"winnerMethod":1,"methodOneQnt":5801,"methodTwoQnt":3004});
    });
  });

  describe("getLuckyTickets", function() {

    it("Принимает объект ontext с полями min и max и возвращает false если параметры не прошли валидацию", function() {
        let context = {min:'notValid', max:'222222'};
        assert.equal(getLuckyTickets(context), false);
    });
  });

  describe("getWinnerMethod", function() {

    it("Принимает объект context с полями min и max и возвращает объект с информацией о победившем методе" + 
    "и количестве счастливых билетов для каждого способа подсчёта.", function() {
        let context = {min:'111111', max:'222222'};
        assert.deepEqual(getWinnerMethod(context), {"winnerMethod":1,"methodOneQnt":5801,"methodTwoQnt":3004});
    });
  });


  describe("valueLengthValidation", function() {
    it("Принимает объект и параметр длинны, возвращает true если длинна каждого поля соответствует заданной.", function() {
        let context = {min:'111111', max:'222222'};
        assert.equal(valueLengthValidation(context,6), true);
    });
  });

  describe("valueLengthValidation", function() {
  it("Принимает объект и параметр длинны, возвращает false если длинна хотя бы одного поля не соответствует заданной.", function() {
    let context = {min:'1', max:'222222'};
    assert.equal(valueLengthValidation(context,6), false);
});
});

describe("objMinMaxParametersValidation", function() {
  it("Принимает объект, возвращает true если все параметры натуральные числа.", function() {
    let context = {min:'111111', max:'222222'};
    assert.equal(objMinMaxParametersValidation(context), true);
});
});

describe("objMinMaxParametersValidation", function() {
  it("Принимает объект, возвращает false если первый параметр не натуральное число.", function() {
    let context = {min:'notNumber', max:'222222'};
    assert.equal(objMinMaxParametersValidation(context),false);
});
});

describe("objMinMaxParametersValidation", function() {
  it("Принимает объект, возвращает false если первый параметр не натуральное число.", function() {
    let context = {min:'111111', max:'notNumber'};
    assert.equal(objMinMaxParametersValidation(context),false);
});
});

describe("objMinMaxParametersValidation", function() {
  it("Принимает объект, возвращает false если первый параметр больше второго.", function() {
    let context = {min:'333333', max:'222222'};
    assert.equal(objMinMaxParametersValidation(context),false);
});
});

describe("sumOfDigits", function() {
  it("Принимает число, возвращает сумму его цифр.", function() {
    assert.equal(sumOfDigits(12345),15);
});
});
  
  
