/*
Seminario GPC #2. Forma basica.
Dibujar formas basicas y un modelo importado
Muestra el bucle tipico de inicializacion, escena y renderer
Autor: Raúl García Crespo
*/

//Variables de consenso
//Motor, escena y la camara
var renderer, scene, camera;

//Acciones
init();
loadScene();
render();

function init() {
	//Configurar el motor de render y el canvas
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(new THREE.Color(0x0000AA));
	document.getElementById("container").appendChild(renderer.domElement);

	//Escena
	scene = new THREE.Scene();

	//Camara
	var ar = window.innerWidth/window.innerHeight;
	camera = new THREE.PerspectiveCamera(50, ar, 0.1, 100);
	scene.add(camera);
	camera.position.set(0.5, 3, 9);
	camera.lookAt(new THREE.Vector3(0,2,0));
}

function loadScene(){
	//construir el grafo de Escena

	//MAteriales
	var material = new THREE.MeshBasicMaterial({color:'yellow', wireframe:true});

	//Geometrias


	//Objetos
	var cubo = new THREE.Mesh(geocubo, material);
	cubo.rotation.y = Math.PI/4;
	cubo.position.x = -1;


	//Organización de la Escena
	scene.add(cubo);


}

function update(){

}

function render(){
	//Construir el frame y mostrarlo
	requestAnimationFrame(render);
	update();
	renderer.render(scene, camera);
}
