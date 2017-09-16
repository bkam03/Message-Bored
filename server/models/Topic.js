module.exports = function( sequelize, DataTypes ) {
  var Topic = sequelize.define( "topic", {
    topic: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    classMethods: {
      associate: function( models ) {
/*      card.hasMany( models.Task )*/
/*        topic.hasMany( models.message, {
          name: 'topic_id'
        } );*/
        topic.belongsTo( models.user );
      }
    }
  } );

  return Topic;
}