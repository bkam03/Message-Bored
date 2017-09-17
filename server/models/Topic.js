module.exports = function( sequelize, DataTypes ) {
  var Topic = sequelize.define( "Topic", {
    topic: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  } );

  Topic.associate = function( models ){
    Topic.hasMany( models.Message, {
      foreignKey: {
        name: 'topic_id',
//        allowNull: false
      }
    } );

    Topic.belongsTo( models.User, {
      foreignKey: {
        name: 'created_by',
//        allowNull: false
      }
    } );
  };

  return Topic;
};