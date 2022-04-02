"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("hotels", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			uuid: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},

			category: {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 1,
			},
			price: {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 0.0,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("hotels");
	},
};
