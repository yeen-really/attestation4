// LOGIN

describe("template spec", () => {
  it("успешный вход", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("#email-login").type("aaqw@mail.ru", { timeout: 3000 });
    cy.get("#password-login").type("1123TTt____", { timeout: 3000 });
    cy.get(".login-btn").click();
    cy.get('.home').contains('Эта страница показана только для авторизованных пользователей')
    cy.get('span').contains('aaqw@mail.ru')
    // cy.reload()
    // cy.get('span').contains('aaqw@mail.ru')
    // cy.get('.test-btn').click()
    // cy.get('span').contains('aaqw@mail.ru')
    // cy.get('.test').contains('Эта страница для тестов')
    // cy.get('.logout').click()

  });
});

// describe("template spec", () => {
//   it("проверка на заполненность полей", () => {
//     cy.visit("http://localhost:3000/login");
//     cy.get("#email-login").type("aaqw@mail.ru", { timeout: 3000 });
//     cy.get("#password-login").type("1123TTt_jjj___", { timeout: 3000 });
//     cy.get(".login-btn").click();
//     cy.get('.login').contains('Некорректный пароль')
//   });
// });

// describe("template spec", () => {
//   it("проверка на корректность пароля", () => {
//     cy.visit("http://localhost:3000/login");
//     cy.get("#email-login").type("aaqw@mail.ru", { timeout: 3000 });
//     cy.get("#password-login").type("1123TTt_jjj___", { timeout: 3000 });
//     cy.get(".login-btn").click();
//     cy.get('.login').contains('Некорректный пароль')
//   });
// });

// describe("template spec", () => {
//   it("проверка на корректность email", () => {
//     cy.visit("http://localhost:3000/login");
//     cy.get("#email-login").type("aaq99w@mail.ru", { timeout: 3000 });
//     cy.get("#password-login").type("1123TTt_jjj___", { timeout: 3000 });
//     cy.get(".login-btn").click();
//     cy.get('.login').contains('Некорректный email')
//   });
// });
// cy.contains('Customer Login').click()
// cy.get('select').select('Harry Potter')
// cy.contains('Login').click()
// cy.contains('Deposit').click()
// cy.get('input').type('1000', {timeout: 3000})
// cy.get('.login-btn').click()
// cy.get('.ng-scope').contains('Deposit Successful')
// cy.contains('Logout').click()
