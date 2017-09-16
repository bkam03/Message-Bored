module.exports = function( sequelize, DataTypes ) {
  var topic = sequelize.define( "topic", {
    topic: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    classMethods: {
      associate: function( models ) {
/*      card.hasMany( models.Task )*/
        topic.hasMany( models.Message, {
          name: 'topic_id'
        } );
        topic.belongsTo( models.User );
      }
    }
  } );

  return topic;
}