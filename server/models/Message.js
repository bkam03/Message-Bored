module.exports = function( sequelize, DataTypes ) {
  var Message = sequelize.define( "Message", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    }
  } );

  Message.associate = function( models ){
    Message.belongsTo( models.Topic, {
      foreignKey: {
        name: 'topic_id'
      }
    } );


    Message.belongsTo( models.User, {
      foreignKey: {
        name: 'author_id'
      }
    } );
  };

  return Message;
}