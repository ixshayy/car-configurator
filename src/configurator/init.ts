import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

const config = {
  container: "configurator",
};

class Configurator {
  private renderer: THREE.WebGLRenderer;
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls;
  //   private dracoLoader: DRACOLoader;
  private loader: GLTFLoader;

  constructor() {
    this.container = document.getElementById(config.container)!;

    this.renderer = new THREE.WebGLRenderer({ alpha: true});  //antialias: true , 
    this.renderer.setClearColor( 0x000000, 0 ); // the default
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color(0xff0000);

    this.camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    this.camera.position.set(5, 2, 8);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0.5, 0);
    this.controls.update();
    this.controls.enablePan = false;
    this.controls.enableDamping = true;

    window.addEventListener("resize", this.onWindowResize);
    this.loader = new GLTFLoader();

    // LIGHTS

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2);
    hemiLight.color.setHSL(0.6, 1, 0.6);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 50, 0);
    this.scene.add(hemiLight);

    const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10);
    this.scene.add(hemiLightHelper);

    const dirLight = new THREE.DirectionalLight(0xffffff, 3);
    dirLight.color.setHSL(0.1, 1, 0.95);
    dirLight.position.set(-1, 1.75, 1);
    dirLight.position.multiplyScalar(30);
    this.scene.add(dirLight);

    dirLight.castShadow = true;

    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;

    const d = 50;

    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;

    dirLight.shadow.camera.far = 3500;
    dirLight.shadow.bias = -0.0001;

    const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);
    this.scene.add(dirLightHelper);

    // this.loadModel();
  }

  loadModel = () => {
    // this.dracoLoader = new DRACOLoader();
    // this.dracoLoader.setDecoderPath("jsm/libs/draco/gltf/");

    // this.loader = new GLTFLoader();
    // this.loader.setDRACOLoader(this.dracoLoader);
    this.loader.setPath("/src/assets/model/");
    this.loader.load(
      "car.glb",
      (gltf) => {
        const model = gltf.scene;
        model.position.set(0, 0, 0);
        // model.scale.set(0.01, 0.01, 0.01);
        this.scene.add(model);
        this.controls.target.copy(model.position);
        this.renderer.setAnimationLoop(this.animate);
      },
      undefined,
      function (e) {
        console.error(e);
      }
    );
  };

  onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };

  animate = () => {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };
}

export default Configurator;
