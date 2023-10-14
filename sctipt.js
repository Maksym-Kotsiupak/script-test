//  


// random
// const max = 100;
// const min = 0;
// const random = Math.round(Math.random() * (max - min) + min);
// console.log(random); 


// up and low
// let brand = 'sAmsUNg';
// brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase();
// console.log(brand)



// const star = 3;
// let price;

// switch (star) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = '50$';
//         break;
// }
// console.log(price);


// for (let i = 0; i <= 15; i += 1){
//     console.log(i);
// }
// console.log('sbfssbs')




// const minSalary = 500;
// const maxSalary = 10000;
// const employes = 10;
// let totalSalary = 0;


// for (let i = 0; i <= 10; i += 1){
//     const salary = Math.round(Math.random() * (maxSalary-minSalary) + minSalary)
//     console.log(`ЗП працівника ${i} - ${salary}`)
//     totalSalary += salary;
// }

// console.log('Загальна ЗП: ', totalSalary)





// const min = 1;
// const max = 30;
// let total = 0;


// for (let i = min; i <= max; i += 1){
   
//     if (i % 2 !== 0) {
//         console.log('ne parne ', i);
//         continue;
   
//     }
//     console.log('parne ', i);
//     total += i;
// }
//   console.log(total)  




// let balance = 10000;
// const payment = 2000;
// let message = [];

// if (payment >= balance) {
//     message = 'На вашому рахунку недостатньо коштів';
// } else {
//     balance -= payment;
//     message = `Оплата успішна на вашому рахунку ${balance}`;
// }

// console.log(message);




// const totalSpent = 10000;
// let payment = 500;
// let discount = 0;
// let totPrice = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log("Бронзовий партнер, знижка 2%");
//     discount = 0.02;
//     totPrice =totalSpent - totalSpent * discount;
// } else if(totalSpent>= 1000 && totalSpent<5000) {
//     console.log('Срібний партнер, знижка 5%')
//     discount = 0.05;
//     totPrice = totalSpent - totalSpent * discount
// } else if (totalSpent >= 5000) {
//      console.log('Золотий партнер, знижка 10%')
//     discount = 0.1;
//      totPrice = totalSpent - totalSpent * discount
// } else {
//     console.log('Лох, знижка 0')
//     discount = 0;
//     totPrice = totalSpent;
// }
    
// console.log(`Оформлюємо замовлення на суму ${totalSpent} зі знижкою ${discount * 100}%, загальна сума для оплати ${totPrice}.`)







// const friends = ['paul', 'derek', 'gnida'];
// console.log(friends[0]);
// friends[3] = 'dwcdwcdw';
// console.table(friends);


// const card = [54, 28, 105, 70, 92, 17, 120];
// let total = 0
// for (let i = 0; i < card.length; i += 1){
//     total += card[i];
//     console.log(card[i]);
// }
//  console.log('Total: ', total)





// for (const value of card) {
//     total += value;
// }
// console.log('Total: ', total);


// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//     if (number > biggestNumber) {
//         biggestNumber = number;
//     }
// }
// console.log(biggestNumber)



// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] % 2 === 0) {
//         total += numbers[i];
//         console.log('Парне число', numbers[i]);
//     }
// }
// console.log('Total: ', total);



// for (const number of numbers) {
//     if (number % 2 === 0) {
//         total += number;
        
//     }
// }
// console.log('Total', total)





// const add = function (x, y, z) {
//     return x + y + z;
// }




// const first = add(5, 7, 10);
// const second = add(345, 43536, 135326);
// console.log(first);
// console.log(second)






// const playlist = {
//     name: 'My super playlist',
//     rating: 10,
//     track: ['track-1', 'track-2', 'track-3',],
//     trackCount: 5,
//     changesName(newName) {
//         console.log('this name change: ', this);
//         this.name = newName;
//     },
//     addTrack(newTrack) {
//         console.log('This is new Track: ', this);
//         this.track.push(newTrack)
//         this.trackCount = this.track.length;
//     },
//     updateRating(newRating) {
//         console.log('New rating: ', this);
//         this.rating = newRating;
//     },
// };



// playlist.changesName('New name');



// playlist.addTrack('New track');
// playlist.addTrack('vadvadvavdvad');
// playlist.addTrack('dvaadvavavav');


// playlist.updateRating('9');
// console.log(playlist);



// const friends = [
//     { name: 'poly', online: true },
//     { name: 'mango', online: false },
//     { name: 'kiwi', online: true },
//     { name: 'ajax', online: false },
// ];

// console.table(friends);

// Знайти друга
// const findFriendByName = function (allFriends, name) {
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.name === name);
//         if (friend.name === name) {
//             return 'Знайшли'
//         }
//     }
//     return 'хуй'
// }



// console.log(findFriendByName(friends, 'poly'));
// console.log(findFriendByName(friends, 'ajax'));



// імена друзів в масив
// const getAllNames = function (allFriends) {
//     const names = [];
//     for (const friend of friends) {
//         console.log(friend.name);
//         names.push(friend.name);
//     }
//     return names
// };

// console.log(getAllNames(friends));

// const getOnlineFriends = function (allFriends) {
//     const onlineFriend = [];
//     for (const friend of allFriends) {
//         if (friend.online === true) {
//             console.log(friend.name)
//             onlineFriend.push(friend) 
//         }
//     }
//     return onlineFriend;
// }

// console.log(getOnlineFriends(friends))