module.exports = function( sequelize, DataTypes ) {
  var message = sequelize.define( "message", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    }

  }, {
    classMethods: {
      associate: function( models ) {
/*      card.hasMany( models.Task )*/
        message.belongsTo( models.Topic );
        message.belongsTo( models.Author );
      }
    }
  } );

  return message;
}