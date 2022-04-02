"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Review extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Hotel }) {
			// define association here
			this.belongsTo(Hotel, { foreignKey: "hotelId" });
		}
	}
	Review.init(
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			body: DataTypes.STRING,
			rating: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 1,
			},
		},
		{
			sequelize,
			tableName: "reviews",
			modelName: "Review",
		}
	);
	return Review;
};
