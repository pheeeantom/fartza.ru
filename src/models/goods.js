const { DataTypes, Sequelize } = require('sequelize');

/*
`id` int UNSIGNED AUTO_INCREMENT NOT NULL,
`name` varchar(127) NOT NULL,
`price` decimal(15,2),
`description` text,
`photos` json,
`created_at` datetime DEFAULT NOW() NOT NULL,
`views` int DEFAULT 0,
`status` enum('active', 'deleted', 'blocked', 'sold') DEFAULT 'active' NOT NULL,
`latitude` float,
`longitude` float,
PRIMARY KEY(`id`)
*/

module.exports = (sequelize) => {
    return sequelize.define('goods', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        //write the rest
        name: {
            type: DataTypes.STRING(127),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(15, 2)
        },
        description: {
            type: DataTypes.TEXT
        },
        photos: {
            type: DataTypes.JSON
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        views: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        status: {
            type: DataTypes.ENUM('active', 'deleted', 'blocked','sold'),
            defaultValue: 'active',
            allowNull: false
        },
        latitude: {
            type: DataTypes.FLOAT
        },
        longitude: {
            type: DataTypes.FLOAT
        }
    }, {
        timestamps: false
    });
}