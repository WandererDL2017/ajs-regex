/* eslint-disable */
import Validator from '../app';

test.each([
    ['name_201_7-as', `Логин name_201_7-as можно использовать`],
    ['name_2017_3-as', `В логине name_2017_3-as используются недопустимые символы`],
    ['1name_201_3-as', `В логине 1name_201_3-as используются недопустимые символы`],
    ['name_201_3-as2', `В логине name_201_3-as2 используются недопустимые символы`],
    ['-name_201_3-as', `В логине -name_201_3-as используются недопустимые символы`],
    ['name_201_3-as2_', `В логине name_201_3-as2_ используются недопустимые символы`]
])('Проверка работы валидатора',
(name, expected) => {
    const validator = new Validator();
    expect(validator.validateUsername(name)).toBe(expected);
}) 