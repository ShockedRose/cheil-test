"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Photo extends Model {
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
	Photo.init(
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			url: { type: DataTypes.STRING, allowNull: false },
		},

		{
			sequelize,
			tableName: "photos",
			modelName: "Photo",
		}
	);
	return Photo;
};
