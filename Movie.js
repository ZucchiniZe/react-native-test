var React = require('react-native');
var { Image, StyleSheet, Text, View } = React;

function calcRuntime(runtime) {
  var hrs = Math.floor(runtime / 60);
  var mins = runtime - (hrs * 60);
  return hrs + 'h ' + mins + 'm';
}

var Movie = React.createClass({
  render: function() {
    var movie = this.props.movie
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View>
          <Text style={styles.title}>{movie.title}</Text>
          <Text>Year: {movie.year}</Text>
          <Text>Rating: {movie.mpaa_rating}</Text>
          <Text>Length: {calcRuntime(movie.runtime)}</Text>
        </View>
        <View style={styles.description}>
          <Text>{movie.synopsis}</Text>
        </View>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15
  },
  link: {
    color: 'blue'
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  description: {
    paddingTop: 10,
  }
});

module.exports = Movie;
