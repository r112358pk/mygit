var TireLeft = new THREE.Object3D();
var	TireRight = new THREE.Object3D();

function wheelInit(){
	THREE.ImageUtils.crossOrigin = '';
	var tire_side_texture = THREE.ImageUtils.loadTexture('images/tireside.png');
	var tire_wheel_texture = THREE.ImageUtils.loadTexture('images/tire.jpg');
	var tire_wheel_texture_bump = THREE.ImageUtils.loadTexture('images/tire_bump.jpg');
	tire_wheel_texture.wrapS = tire_wheel_texture.wrapT = THREE.RepeatWrapping; 
	tire_wheel_texture.repeat.set(1,1);
	
	tire_side_geometry = new THREE.CircleGeometry(20, 20);
    tire_side_material = new THREE.MeshBasicMaterial({
        map: tire_side_texture,
        //bumpScale: 0.8,
        transparent: true,  // for cut-out texture
        side: THREE.DoubleSide
    });
	var tire = new THREE.Mesh(tire_side_geometry, tire_side_material);
	tire.castShadow = true;
	//scene.add(tire);
	var tire1 = tire.clone();
	var tire2 = tire.clone();
	var tire3 = tire.clone();
	
	var wheel = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 10, 20, 1, true), // only side
    new THREE.MeshBasicMaterial({
        map: tire_wheel_texture,
		bumpMap: tire_wheel_texture_bump,
        bumpScale: 0.8,
		transparent: true,
        side: THREE.DoubleSide
    }));
	wheel.castShadow = true;
	var wheel1 = wheel.clone();
	///////////////////////////////////////////////////////////////////////
	var uniforms = {
        texture: {
            type: "t",
            value: tire_side_texture
        }
    };
    var vertexShader = document.getElementById('vertexShaderDepth').textContent;
    var fragmentShader = document.getElementById('fragmentShaderDepth').textContent;
    tire.customDepthMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    });
	tire1.customDepthMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    });
	tire2.customDepthMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    });
	tire3.customDepthMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    });
	
	wheel.rotation.x = Math.PI/2;
	
	tire.position.z = -5;
	
	tire1.position.z = 5;

	wheel1.rotation.x = Math.PI/2;

	tire2.position.z = -5;

	tire3.position.z = 5;
	
	TireLeft.add(wheel);
	TireLeft.add(tire1);
	TireLeft.add(tire);
	TireLeft.position.set(0,20,-20);
	//scene.add(TireLeft);
	
	TireRight.add(wheel1);
	TireRight.add(tire2);
	TireRight.add(tire3);
	TireRight.position.set(0,20,+20);
	
	scene.add(TireLeft);
	scene.add(TireRight);
}