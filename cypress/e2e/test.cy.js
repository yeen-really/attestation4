// LOGIN

describe("template spec", () => {
  it("успешный вход", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("#email-login").type("aaqw@mail.ru");
    cy.get("#password-login").type("1123TTt____");
    cy.get(".login-btn").click();
    cy.get('.home').contains('Эта страница показана только для авторизованных пользователей')
    cy.get('span').contains('aaqw@mail.ru')
    cy.reload()
    cy.get('span').contains('aaqw@mail.ru')
    cy.get('.test-btn').click()
    cy.get('span').contains('aaqw@mail.ru')
    cy.get('.test').contains('Эта страница для тестов')
    cy.get('.logout').click()
  });
});

describe("template spec", () => {
  it("проверка на заполненность полей", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("#email-login").type("aaqw@mail.ru", { timeout: 3000 });
    cy.get("#password-login").type("1123TTt_jjj___", { timeout: 3000 });
    cy.get(".login-btn").click();
    cy.get('.login').contains('Некорректный пароль')
  });
});

describe("template spec", () => {
  it("проверка на корректность пароля", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("#email-login").type("aaqw@mail.ru", { timeout: 3000 });
    cy.get("#password-login").type("1123TTt_jjj___", { timeout: 3000 });
    cy.get(".login-btn").click();
    cy.get('.login').contains('Некорректный пароль')
  });
});

describe("template spec", () => {
  it("проверка на корректность email", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("#email-login").type("aaq99w@mail.ru", { timeout: 3000 });
    cy.get("#password-login").type("1123TTt_jjj___", { timeout: 3000 });
    cy.get(".login-btn").click();
    cy.get('.login').contains('Некорректный email')
  });
});

// SIGNUP
describe("template spec", () => {
  it("успешная регистрация", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("#email-signup").type("new12356@mail.ru");
    cy.get("#password-signup").type("1123TTt____");
    cy.get(".signup-btn").click();
    cy.get('.home').contains('Эта страница показана только для авторизованных пользователей')
    cy.get('span').contains('new12356@mail.ru')
    cy.reload()
    cy.get('span').contains('new12356@mail.ru')
    cy.get('.test-btn').click()
    cy.get('span').contains('new12356@mail.ru')
    cy.get('.test').contains('Эта страница для тестов')
    cy.get('.logout').click()

  });
});

describe("template spec", () => {
  it("тест на заполненность полей", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get(".signup-btn").click();
    cy.get('.signup').contains('Все поля должны быть заполнены')
    cy.get("#email-signup").type("new123@mail.ru");
    cy.get('.signup').contains('Все поля должны быть заполнены')
        cy.reload()
    cy.get("#password-signup").type("jdjdjdj");
    cy.get(".signup-btn").click();
    cy.get('.signup').contains('Все поля должны быть заполнены')
  });
});

describe("template spec", () => {
  it("тест на наличие пользователся с таким же email", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("#email-signup").type("aaqw@mail.ru");
    cy.get("#password-signup").type("1123TTt____");
    cy.get(".signup-btn").click();
    cy.get('.signup').contains('Пользователь с таким email уже существует')
  });
});

describe("template spec", () => {
  it("тест на надежность пароля", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("#email-signup").type("ner567@mail.ru");
    cy.get("#password-signup").type("112");
    cy.get(".signup-btn").click();
    cy.get('.signup').contains('Пароль должен содержать буквы вернего и нижнего регистра, цифры и специальные символы')
  });
});
