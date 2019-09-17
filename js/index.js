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
    let geometry = new THREE.SphereGeometry( 0.1, 1, 1 );
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

camera.position.z = 10;

function animate() {
    planet.rotation.x += 0.01;
    planet.rotation.y += 0.01;    
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

function getRandom(){
    var num = Math.floor(Math.random()*10) +1;
    num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
    return num;
}