var express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

var player = require('play-sound')(opts = {})

var playing = false;

app.get('/', async (req, res) => {
    if (!playing) {
        var audio = player.play('impostor.mp3', function(err){
            playing = false;
            if (err) throw err
        });
        playing = true;
    }
    res.send('OK');
});



app.listen(PORT, function(){
    console.log(`Servidor pronto na porta ${PORT}`);
});

