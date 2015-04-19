var people;
var peoHead;

function peopleInit(){

	people = new THREE.Object3D();
	people.position.y = 30;
	//scene.add(people);
	peoHead = new THREE.Mesh(new THREE.SphereGeometry(4,20,20),
	new THREE.MeshLambertMaterial({color:0xff0000}));
	peoHead.position.y = 10;
	Box = new THREE.BoxGeometry(7,12,5);
	var Body = new THREE.Mesh(Box,new THREE.MeshLambertMaterial({color:0xffff00}));
	var leg = new THREE.Mesh(new THREE.BoxGeometry(2,10,5),
	new THREE.MeshLambertMaterial({color:0x00ff00}));
	var leg1 = leg.clone();
	leg.position.set(-2,-10,0);
	leg1.position.set(2,-10,0);
	var hand = new THREE.Mesh(new THREE.BoxGeometry(2,7,5),
	new THREE.MeshLambertMaterial({color:0x00ff00}));
	var hand1 = hand.clone();
	hand.position.set(-5,3,0);
	hand1.position.set(5,3,0);
	
	people.add(peoHead);
	people.add(Body);
	people.add(leg);
	people.add(leg1);
	people.add(hand);
	people.add(hand1);
	people.scale.set(2, 2, 2);
}