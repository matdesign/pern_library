"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Books", [
			{ name: "The Hobbit", author: "J.R.R Tolken", year_published: 1937 },
			{ name: "Harry Potter and Soceres Stone", author: "J.K Rowling", year_published: 1991 },
			{ name: "The 7 Habits of Highly Effective People", author: "Stephen R Covy", year_published: 1993 },
			{ name: "Power of Subconcious Mind", author: "Norman Vincent Pale", year_published: 1929 },
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("books", null, {});
	},
};
