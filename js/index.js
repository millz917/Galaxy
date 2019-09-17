var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( 0.5, 30, 30 );
var material = new THREE.MeshBasicMaterial( { color: 0xffffff} );
/*
var planetTexture = new THREE.TextureLoader().load( "../img/texture.jpg" );
planetTexture.wrapS = planetTexture.wrapT = THREE.MirroredRepeatWrapping;
planetTexture.repeat.set( 2, 2 );
var material = new THREE.MeshBasicMaterial( { map: planetTexture } );
*/
var planet = new THREE.Mesh( geometry, material );
scene.add( planet );

//Declare variables to hold the stars
var stars = [];
//The texture
var starTexture = new THREE.TextureLoader().load( "../img/texture.jpg" );
starTexture.wrapS = starTexture.wrapT = THREE.MirroredRepeatWrapping;
starTexture.repeat.set( 2, 2 );
//Add some starts
for (let i = 0; i < 200; i++) {
    let geometry = new THREE.SphereGeometry( getRadius(), 1, 1 );
    let material = new THREE.MeshBasicMaterial( { color:0xffaffb } );
    let star = new THREE.Mesh( geometry, material );
    star.position.set( getRandom(), getRandom(), getRandom() );
    star.material.side = THREE.DoubleSide;
    stars.push( star );
  }

  //ADd to the screen
  for (let j = 0; j < stars.length; j++) {
    scene.add( stars[j] );
  }

  //lightness variables
  var lightness = 0;

  //moving the camera
  var rotSpeed = 0.01;


camera.position.z = 10;
camera.position.y = 1.5;

function animate() {
    let x = camera.position.x;
    let z = camera.position.z;
    camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
    camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed);
    camera.lookAt(scene.position);
    planet.rotation.x += 0.01;
    planet.rotation.y += 0.01;
    for (let k = 0; k < stars.length; k++) {
        let star = stars[k];
        star.rotation.x += 0.01;
        star.rotation.y += 0.01;
        star.rotation.z += 0.01;
        lightness > 100 ? lightness = 0 : lightness++;
        star.material.color = new THREE.Color("hsl(200, 0%, " + lightness + "%)");
    }    
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

function getRandom(){
    var num = Math.floor(Math.random()*10) +1;
    num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
    return num;
}
function getRadius(){
    var num = Math.random() /10 ;
    return num;
}
function getColor(){
    var r = Math.random()%255;
    var b = Math.random()%255;
    var g = Math.random()%255;
    return rgb;
}