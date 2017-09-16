module.exports = function( sequelize, DataTypes ) {
  var Message = sequelize.define( "message", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    }

  }, {
    classMethods: {
      associate: function( models ) {
/*      card.hasMany( models.Task )*/
        message.belongsTo( models.topic );
        message.belongsTo( models.author );
      }
    }
  } );

  return Message;
}