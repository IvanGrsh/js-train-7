// const user = {
//   name: "olga",
//   id: 123456,
//   bookId: null,

//   getPhone(book) {
//     return book[this.bookId];
//   },
// };

// const phoneBook = {
//   me: "+380956463435",
//   name: "Phone Book",
// };

// //.................

// function addToPhoneBook(phone, user) {
//   const symId = Symbol.for(user.id);

//   phoneBook[symId] = phone;

//   user.bookId = symId;

//   //   phoneBook[0]++;

//   //   return key;
// }

// //.................

// addToPhoneBook("+380956463435", user);
// // const key = addToPhoneBook();

// //.................

// addToPhoneBook("+380967898765", user);

// const olga2Id = addToPhoneBook("+380956464354", user);

// a[key] = "user";

// console.log(user.getPhone(phoneBook));
// console.log(phoneBook);

// console.log(phoneBook);

// console.log(phoneBook[olga1Id]);

// console.log(olga1Id.description);

// const a = Symbol.for("1");
// const b = Symbol.for("1");
// console.log(a, b);

// const symId = user.bookId;

// console.log(Symbol.keyFor(symId));

// for (const value of phoneBook) {
//   console.log(value);
// }

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;

    return this;
    // current:null,
    // to: null,
    // from:null
    //   next() {
    //     return this.current <= this.to
    //       ? { done: false, value: this.current++ }
    //       : { done: true };
    //     // if (this.current <= this.to)
    //     //   return { done: false, value: this.current++ };
    //     // else {
    //     //   return { done: true };
    //     // }
    //   },
  },
  next() {
    return this.current <= this.to
      ? { done: false, value: this.current++ }
      : { done: true };
  },
};

// for (let nam of range) {
//   console.log(nam);
// }

const arr = [1, 2, 3, 4, 5][Symbol.iterator]();

const iterator = arr[Symbol.iterator]();

result = iterator.next();

do {
  console.log(result.value);

  result = iterator.next();
} while (!result.done);
{
}
