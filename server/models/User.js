module.exports = function( sequelize, DataTypes ) {
  var user = sequelize.define( "user", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    classMethods: {
      associate: function( models ) {
/*      card.hasMany( models.Task )*/
        user.hasMany( models.Topic , {
          name: 'created_by'
        } );
        user.hasMany( models.Message, {
          name: 'author_id'
        } );
      }
    }
  } );

  return user;
}