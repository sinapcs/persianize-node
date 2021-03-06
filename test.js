var persianize = require('./persianize');

console.log( "This Experation is persian number {1}: --------------- " +  persianize.validator().number('1') );
console.log( "This Experation is persian number {۳}: --------------- " + persianize.validator().number('۳'));
console.log( "This Experation is persian alpha {persian}: --------------- " +  persianize.validator().alpha('persian') );
console.log( "This Experation is persian alpha {فارسی}: --------------- " + persianize.validator().alpha('فارسی'));
console.log( "This Experation is persian alpha_num {persian}: --------------- " +  persianize.validator().alphaNum('persian') );
console.log( "This Experation is persian alpha_num {۳فارسی}: --------------- " + persianize.validator().alphaNum('۳فارسی'));
console.log( "This Experation is persian text {persian}: --------------- " +  persianize.validator().text('persian') );
console.log( "This Experation is persian text {۳ فارسی}: --------------- " + persianize.validator().text('۳ فارسی'));
console.log( "Convert english number to persian number: --------------- " + persianize.convert().number("1234").get());
console.log( "Convert arabic charachters to persian: --------------- " + persianize.convert().removeArabicChar("می روي‌").get());
console.log( "Replace half-space to persian verbs: -------------- " + persianize.convert().halfSpace("می روی‌").get());
console.log( "Replace half-space to persian verbs: -------------- " + persianize.convert().halfSpace("آمدمی و می روی").get());
console.log( "Convert all options to persian: --------------- " + persianize.convert().all("12 می روي‌").get());
