"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Hotel extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Review, Photo }) {
			// define association here
			this.hasMany(Review, { foreignKey: "hotelId" });
			this.hasMany(Photo, { foreignKey: "hotelId" });
		}
		toJSON() {
			return {
				...this.get(),
				id: undefined,
			};
		}
	}

	Hotel.init(
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			name: { type: DataTypes.STRING, allowNull: false },
			category: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
			price: { type: DataTypes.DECIMAL(20, 2), allowNull: false, defaultValue: 0.0 },
		},
		{
			sequelize,
			tableName: "hotels",
			modelName: "Hotel",
		}
	);
	return Hotel;
};
